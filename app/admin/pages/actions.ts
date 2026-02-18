
'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function createPage(formData: FormData) {
    const supabase = await createClient()

    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const meta_description = formData.get('meta_description') as string
    const is_published = formData.get('is_published') === 'on'

    const { error } = await supabase.from('pages').insert({
        title,
        slug,
        meta_description,
        is_published,
    })

    if (error) {
        return { message: 'Failed to create page' }
    }

    revalidatePath('/admin/pages')
    redirect('/admin/pages')
}

export async function updatePage(id: number, formData: FormData) {
    const supabase = await createClient()

    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const meta_description = formData.get('meta_description') as string
    const is_published = formData.get('is_published') === 'on'

    const { error } = await supabase
        .from('pages')
        .update({
            title,
            slug,
            meta_description,
            is_published,
            updated_at: new Date().toISOString(),
        })
        .eq('id', id)

    if (error) {
        return { message: 'Failed to update page' }
    }

    revalidatePath(`/admin/pages/${id}`)
    revalidatePath('/admin/pages')
}

export async function deletePage(id: number) {
    const supabase = await createClient()

    const { error } = await supabase.from('pages').delete().eq('id', id)

    if (error) {
        return { message: 'Failed to delete page' }
    }

    revalidatePath('/admin/pages')
    redirect('/admin/pages')
}

export async function addSection(pageId: number, formData: FormData) {
    const supabase = await createClient()

    const section_type = formData.get('section_type') as string
    // Default content based on type could be handled here or in the UI
    const content = JSON.parse((formData.get('content') as string) || '{}')

    // Get max order index
    const { data: sections } = await supabase
        .from('page_sections')
        .select('order_index')
        .eq('page_id', pageId)
        .order('order_index', { ascending: false })
        .limit(1)

    const nextOrderIndex = sections && sections.length > 0 ? sections[0].order_index + 1 : 0

    const { error } = await supabase.from('page_sections').insert({
        page_id: pageId,
        section_type,
        content,
        order_index: nextOrderIndex,
        is_visible: true,
    })

    if (error) {
        console.error(error)
        return { message: 'Failed to add section' }
    }

    revalidatePath(`/admin/pages/${pageId}`)
}

export async function updateSection(sectionId: number, formData: FormData) {
    const supabase = await createClient()

    const contentStr = formData.get('content') as string
    const is_visible = formData.get('is_visible') === 'on'

    let content = {}
    try {
        content = JSON.parse(contentStr)
    } catch (e) {
        console.error("Invalid JSON", e)
        return { message: 'Invalid JSON content' }
    }

    const { error } = await supabase
        .from('page_sections')
        .update({
            content,
            is_visible,
            updated_at: new Date().toISOString(),
        })
        .eq('id', sectionId)

    if (error) {
        return { message: 'Failed to update section' }
    }

    // We need to know the page_id to revalidate, but for now we rely on the component using this to trigger a refresh
    // Or we can fetch it (extra query)
    // revalidatePath(`/admin/pages/[id]`) 
}

export async function deleteSection(sectionId: number, pageId: number) {
    const supabase = await createClient()

    const { error } = await supabase.from('page_sections').delete().eq('id', sectionId)

    if (error) {
        return { message: 'Failed to delete section' }
    }

    revalidatePath(`/admin/pages/${pageId}`)
}
