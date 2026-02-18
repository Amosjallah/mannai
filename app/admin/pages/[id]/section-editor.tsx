
'use client'

import { useState } from 'react'
import { Save, Trash, Plus, ChevronUp, ChevronDown } from 'lucide-react'
import { updateSection, deleteSection, addSection } from '../actions'

type Section = {
    id: number
    section_type: string
    order_index: number
    content: any
    is_visible: boolean
}

export default function SectionEditor({
    initialSections,
    pageId
}: {
    initialSections: Section[],
    pageId: number
}) {
    const [sections, setSections] = useState<Section[]>(initialSections)
    const [isAdding, setIsAdding] = useState(false)

    // Handlers for adding new section
    async function handleAddSection(formData: FormData) {
        await addSection(pageId, formData)
        setIsAdding(false)
        // In a real app we'd re-fetch or use optimistic updates
        // For now, nextjs server actions should trigger revalidatePath which updates the page prop
        // But we are in a client component, so we might need a refresh or router.refresh()
        window.location.reload()
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Page Sections</h2>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="bg-green-600 text-white px-4 py-2 rounded flex items-center hover:bg-green-700"
                >
                    <Plus className="h-4 w-4 mr-2" /> Add Section
                </button>
            </div>

            {isAdding && (
                <div className="border p-4 rounded bg-gray-50 mb-4">
                    <h3 className="font-bold mb-4">New Section</h3>
                    <form action={handleAddSection} className="space-y-4">
                        <select name="section_type" className="w-full p-2 border rounded">
                            <option value="hero">Hero Section</option>
                            <option value="about">About Section</option>
                            <option value="features">Features/Product Showcase</option>
                            <option value="contact">Contact Section</option>
                            <option value="custom">Custom JSON</option>
                        </select>
                        <textarea
                            name="content"
                            placeholder='{"title": "..."}'
                            className="w-full p-2 border rounded h-32 font-mono text-sm"
                            defaultValue='{}'
                        />
                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 border rounded">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="space-y-4">
                {initialSections.map((section) => (
                    <SectionCard key={section.id} section={section} pageId={pageId} />
                ))}
                {initialSections.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed rounded text-gray-400">
                        No sections yet. Add one to get started.
                    </div>
                )}
            </div>
        </div>
    )
}

function SectionCard({ section, pageId }: { section: Section, pageId: number }) {
    const [isEditing, setIsEditing] = useState(false)
    const [jsonContent, setJsonContent] = useState(JSON.stringify(section.content, null, 2))
    const [isVisible, setIsVisible] = useState(section.is_visible)

    async function handleUpdate() {
        const formData = new FormData()
        formData.append('content', jsonContent)
        if (isVisible) formData.append('is_visible', 'on')

        await updateSection(section.id, formData)
        setIsEditing(false)
        window.location.reload()
    }

    async function handleDelete() {
        if (!confirm('Are you sure you want to delete this section?')) return
        await deleteSection(section.id, pageId)
        window.location.reload()
    }

    return (
        <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded text-gray-600 uppercase">{section.section_type}</span>
                    <span className="text-sm text-gray-500">#{section.id}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsEditing(!isEditing)} className="p-1 hover:bg-gray-200 rounded text-gray-600">
                        <Save className="h-4 w-4" />
                    </button>
                    <button onClick={handleDelete} className="p-1 hover:bg-red-100 rounded text-red-600">
                        <Trash className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <div className="p-4">
                <div className="mb-4 flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isVisible}
                        onChange={(e) => setIsVisible(e.target.checked)}
                        id={`visible-${section.id}`}
                    />
                    <label htmlFor={`visible-${section.id}`} className="text-sm">Visible on site</label>
                </div>

                <textarea
                    value={jsonContent}
                    onChange={(e) => setJsonContent(e.target.value)}
                    className="w-full h-48 font-mono text-sm p-2 border rounded bg-gray-50 focus:bg-white transition-colors"
                />

                <div className="mt-2 flex justify-end">
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
                        disabled={jsonContent === JSON.stringify(section.content, null, 2) && isVisible === section.is_visible}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
