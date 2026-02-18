
'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function updateSettings(formData: FormData) {
    const supabase = await createClient()

    // Verify admin access
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Basic fields
    const site_name = formData.get('site_name') as string
    const description = formData.get('description') as string
    const logo_url = formData.get('logo_url') as string

    // JSON fields
    const theme_colors = {
        primary: formData.get('primary_color') as string,
        secondary: formData.get('secondary_color') as string,
    }

    const contact_info = {
        email: formData.get('contact_email') as string,
        phone: formData.get('contact_phone') as string,
        address: formData.get('contact_address') as string,
    }

    const social_links = {
        facebook: formData.get('facebook_url') as string,
        twitter: formData.get('twitter_url') as string,
        instagram: formData.get('instagram_url') as string,
    }

    // Update logic: we assume there is only one row in site_settings, ID 1
    // If it doesn't exist, we insert it (though migration seeded it)
    const { error } = await supabase
        .from('site_settings')
        .upsert({
            id: 1,
            site_name,
            description,
            logo_url,
            theme_colors,
            contact_info,
            social_links,
            updated_at: new Date().toISOString(),
        })

    if (error) {
        console.error('Error updating settings:', error)
        return { message: 'Failed to update settings' }
    }

    revalidatePath('/', 'layout') // Revalidate everything
    redirect('/admin/settings?message=Settings updated successfully')
}
