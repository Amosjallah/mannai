
import { createClient } from './supabase/server'
import { cache } from 'react'

export const getSiteSettings = cache(async () => {
    const supabase = await createClient()
    const { data } = await supabase.from('site_settings').select('*').single()
    return data
})

export const getPageBySlug = cache(async (slug: string) => {
    const supabase = await createClient()

    // First get the page
    const { data: page } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single()

    if (!page) return null

    // Then get its visible sections
    const { data: sections } = await supabase
        .from('page_sections')
        .select('*')
        .eq('page_id', page.id)
        .eq('is_visible', true)
        .order('order_index', { ascending: true })

    return { ...page, sections }
})
