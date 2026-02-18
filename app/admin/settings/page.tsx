
import { createClient } from '@/utils/supabase/server'
import { updateSettings } from './actions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Save } from 'lucide-react'

export default async function SettingsPage() {
    const supabase = await createClient()

    // Fetch current settings
    const { data: settings } = await supabase
        .from('site_settings')
        .select('*')
        .single()

    // Default values if settings are missing (for safety)
    const defaultSettings = {
        site_name: 'Mennai Farms',
        description: '',
        logo_url: '',
        theme_colors: { primary: '#16a34a', secondary: '#ca8a04' },
        contact_info: { email: '', phone: '', address: '' },
        social_links: { facebook: '', twitter: '', instagram: '' },
    }

    const s = settings || defaultSettings
    const colors = s.theme_colors || defaultSettings.theme_colors
    const contact = s.contact_info || defaultSettings.contact_info
    const social = s.social_links || defaultSettings.social_links

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
            </div>

            <form action={updateSettings} className="space-y-8">

                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>General Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <label htmlFor="site_name" className="text-sm font-medium">Site Name</label>
                            <input
                                id="site_name"
                                name="site_name"
                                defaultValue={s.site_name}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="description" className="text-sm font-medium">Site Description (SEO)</label>
                            <textarea
                                id="description"
                                name="description"
                                defaultValue={s.description}
                                rows={3}
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="logo_url" className="text-sm font-medium">Logo URL</label>
                            <input
                                id="logo_url"
                                name="logo_url"
                                defaultValue={s.logo_url}
                                placeholder="https://example.com/logo.png"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <p className="text-xs text-muted-foreground">URL to your logo image. You can upload images in the 'Sections' editor and copy the URL here.</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Branding & Theme */}
                <Card>
                    <CardHeader>
                        <CardTitle>Branding & Theme</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2">
                        <div className="grid gap-2">
                            <label htmlFor="primary_color" className="text-sm font-medium">Primary Color</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    id="primary_color_picker"
                                    defaultValue={colors.primary}
                                    onChange={(e) => {
                                        const input = document.getElementById('primary_color') as HTMLInputElement;
                                        if (input) input.value = e.target.value;
                                    }}
                                    className="h-10 w-10 p-1 rounded border cursor-pointer"
                                />
                                <input
                                    id="primary_color"
                                    name="primary_color"
                                    defaultValue={colors.primary}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="secondary_color" className="text-sm font-medium">Secondary Color</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    id="secondary_color_picker"
                                    defaultValue={colors.secondary}
                                    onChange={(e) => {
                                        const input = document.getElementById('secondary_color') as HTMLInputElement;
                                        if (input) input.value = e.target.value;
                                    }}
                                    className="h-10 w-10 p-1 rounded border cursor-pointer"
                                />
                                <input
                                    id="secondary_color"
                                    name="secondary_color"
                                    defaultValue={colors.secondary}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="contact_email" className="text-sm font-medium">Email</label>
                                <input
                                    id="contact_email"
                                    name="contact_email"
                                    type="email"
                                    defaultValue={contact.email}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="contact_phone" className="text-sm font-medium">Phone</label>
                                <input
                                    id="contact_phone"
                                    name="contact_phone"
                                    defaultValue={contact.phone}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="contact_address" className="text-sm font-medium">Address</label>
                            <input
                                id="contact_address"
                                name="contact_address"
                                defaultValue={contact.address}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                    <CardHeader>
                        <CardTitle>Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <label htmlFor="facebook_url" className="text-sm font-medium">Facebook URL</label>
                            <input
                                id="facebook_url"
                                name="facebook_url"
                                defaultValue={social.facebook}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="twitter_url" className="text-sm font-medium">Twitter (X) URL</label>
                            <input
                                id="twitter_url"
                                name="twitter_url"
                                defaultValue={social.twitter}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="instagram_url" className="text-sm font-medium">Instagram URL</label>
                            <input
                                id="instagram_url"
                                name="instagram_url"
                                defaultValue={social.instagram}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </CardContent>
                </Card>


                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 bg-green-600 text-white hover:bg-green-700"
                    >
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}
