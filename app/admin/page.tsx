
import { createClient } from '@/utils/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Images, Settings, Users } from 'lucide-react'
import Link from 'next/link'

export default async function AdminDashboard() {
    const supabase = await createClient()

    // Fetch some stats
    const { count: pagesCount } = await supabase
        .from('pages')
        .select('*', { count: 'exact', head: true })

    const { count: sectionsCount } = await supabase
        .from('page_sections')
        .select('*', { count: 'exact', head: true })

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{pagesCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Active pages on site</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Sections</CardTitle>
                        <Images className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{sectionsCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Content blocks/sections</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Site Settings</CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Configure</div>
                        <p className="text-xs text-muted-foreground">Manage global variables</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <Link href="/admin/pages" className="p-4 border rounded hover:bg-gray-50 flex flex-col items-center justify-center text-center">
                                <FileText className="h-8 w-8 mb-2 text-green-600" />
                                <span className="font-medium">Manage Pages</span>
                            </Link>
                            <Link href="/admin/settings" className="p-4 border rounded hover:bg-gray-50 flex flex-col items-center justify-center text-center">
                                <Settings className="h-8 w-8 mb-2 text-blue-600" />
                                <span className="font-medium">Site Settings</span>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
