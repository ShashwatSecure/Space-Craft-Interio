"use client"

import { GuideData, guideData } from "@/guideData"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function Guide() {
    const params = useParams()
    const [guideInfo, setGuideInfo] = useState<GuideData | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>("")

    useEffect(() => {
        if (params?.guide) {
            const guideFound = guideData.find(
                (val) => val.slug === params.guide
            )
            if (guideFound) {
                setGuideInfo(guideFound)
                setSelectedCategory(guideFound.categories[0]?.id || "")
            }
        }
    }, [params?.guide])

    if (!guideInfo) {
        return (
            <div className="text-center text-gray-600 mt-20">
                <h2 className="text-2xl font-semibold text-blue-600">
                    Loading...
                </h2>
            </div>
        )
    }

    const selectedContent =
        guideInfo.content[selectedCategory as keyof typeof guideInfo.content]

    return (
        <>
            <section className="mt-20 px-6 flex flex-col md:flex-row">
                {/* Sidebar - Categories */}
                <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-md">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                        {guideInfo.title}
                    </h3>
                    <ul className="space-y-3">
                        {guideInfo.categories.map(
                            (category: { id: string; title: string }) => (
                                <li key={category.id}>
                                    <button
                                        className={`text-left w-full ${
                                            selectedCategory === category.id
                                                ? "text-blue-700 font-bold"
                                                : "text-blue-600"
                                        } hover:underline`}
                                        onClick={() =>
                                            setSelectedCategory(category.id)
                                        }
                                    >
                                        {category.title}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-full md:w-3/4 px-6">
                    {selectedContent ? (
                        <>
                            <h2 className="text-3xl font-semibold text-gray-900">
                                {selectedContent.title}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {selectedContent.description}
                            </p>

                            <div className="mt-6">
                                <Image
                                    src={selectedContent.imageUrl}
                                    alt={selectedContent.title}
                                    width={800}
                                    height={500}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-500">
                            No content available for this category.
                        </p>
                    )}
                </main>
            </section>
        </>
    )
}
