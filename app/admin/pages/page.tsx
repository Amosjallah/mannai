
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Trash } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createPage } from './actions'

export default async function PagesList() {
    const supabase = await createClient()

    const { data: pages } = await supabase
        .from('pages')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Pages</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Create New Page Card */}
                <Card className="border-dashed border-2 hover:border-green-500 transition-colors bg-gray-50/50">
                    <CardHeader>
                        <CardTitle className="text-gray-500 flex items-center gap-2">
                            <Plus className="h-5 w-5" />
                            Create New Page
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action={createPage} className="space-y-4">
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase">Title</label>
                                <input
                                    name="title"
                                    placeholder="e.g. Terms of Service"
                                    required
                                    className="w-full rounded border px-3 py-2 text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase">Slug</label>
                                <input
                                    name="slug"
                                    placeholder="e.g. terms"
                                    required
                                    pattern="[a-z0-9-]+"
                                    className="w-full rounded border px-3 py-2 text-sm"
                                />
                                <p className="text-[10px] text-gray-400 mt-1">URL-friendly name, lowercase</p>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 flex items-center justify-center text-sm font-medium"
                            >
                                Create Page
                            </button>
                        </form>
                    </CardContent>
                </Card>

                {pages?.map((page) => (
                    <Card key={page.id} className="hover:shadow-md transition-shadow group relative">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-semibold text-gray-800">{page.title}</CardTitle>
                            <div className={`w-2 h-2 rounded-full ${page.is_published ? 'bg-green-500' : 'bg-gray-300'}`} title={page.is_published ? 'Published' : 'Draft'} />
                        </CardHeader>
                        <CardContent>
                            <div className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-600 inline-block mb-4 font-mono">
                                /{page.slug}
                            </div>
                            <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
                                {page.meta_description || "No description"}
                            </p>

                            <div className="mt-4 pt-4 border-t flex justify-end">
                                <Link
                                    href={`/admin/pages/${page.id}`}
                                    className="inline-flex items-center text-sm text-green-600 hover:text-green-800 font-medium"
                                >
                                    Edit Page <Edit className="h-3 w-3 ml-1" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
