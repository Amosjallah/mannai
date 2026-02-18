
import Link from 'next/link'
import { LayoutDashboard, Settings, FileText, Images, LogOut } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Optional: Check for admin role
    // const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
    // if (profile?.role !== 'admin') {
    //   redirect('/')
    // }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-green-700">Mennai Admin</h1>
                </div>
                <nav className="mt-6">
                    <Link
                        href="/admin"
                        className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                        <LayoutDashboard className="h-5 w-5 mr-3" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/pages"
                        className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                        <FileText className="h-5 w-5 mr-3" />
                        Pages
                    </Link>
                    <Link
                        href="/admin/sections"
                        className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                        <Images className="h-5 w-5 mr-3" />
                        Sections
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                        <Settings className="h-5 w-5 mr-3" />
                        Settings
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-64 p-6 border-t">
                    <div className="flex items-center text-gray-600 mb-4">
                        <span className="text-sm truncate">{user.email}</span>
                    </div>
                    <form action="/auth/signout" method="post">
                        <button className="flex items-center text-red-600 hover:text-red-800 w-full">
                            <LogOut className="h-5 w-5 mr-3" />
                            Sign Out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
