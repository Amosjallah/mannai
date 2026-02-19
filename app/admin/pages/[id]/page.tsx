
import { createClient } from '@/utils/supabase/server'
import { updatePage, deletePage } from '../actions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionEditor from './section-editor'
import { ArrowLeft, Save, Trash } from 'lucide-react'
import Link from 'next/link'

export default async function PageDetail({ params }: { params: Promise<{ id: string }> }) {
    const supabase = await createClient()
    const { id: idStr } = await params
    const id = parseInt(idStr)

    const { data: page } = await supabase
        .from('pages')
        .select('*')
        .eq('id', id)
        .single()

    if (!page) {
        return <div>Page not found</div>
    }

    const { data: sections } = await supabase
        .from('page_sections')
        .select('*')
        .eq('page_id', id)
        .order('order_index', { ascending: true })

    const updatePageWithId = updatePage.bind(null, id)

    async function handleDelete(): Promise<void> {
        'use server'
        await deletePage(id)
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/pages" className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Edit Page: {page.title}</h1>
                </div>
                <form action={handleDelete}>
                    <button className="text-red-600 hover:bg-red-50 px-4 py-2 rounded flex items-center">
                        <Trash className="h-4 w-4 mr-2" /> Delete Page
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Sections */}
                <div className="lg:col-span-2">
                    <SectionEditor initialSections={sections || []} pageId={id} />
                </div>

                {/* Sidebar: Metadata */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Page Metadata</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form action={updatePageWithId} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Title</label>
                                    <input
                                        name="title"
                                        defaultValue={page.title}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Slug</label>
                                    <input
                                        name="slug"
                                        defaultValue={page.slug}
                                        className="w-full p-2 border rounded bg-gray-50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <textarea
                                        name="meta_description"
                                        defaultValue={page.meta_description}
                                        rows={3}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        name="is_published"
                                        id="is_published"
                                        defaultChecked={page.is_published}
                                    />
                                    <label htmlFor="is_published" className="text-sm">Published</label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center"
                                >
                                    <Save className="h-4 w-4 mr-2" /> Update Metadata
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
