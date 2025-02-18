"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SpaceSavingDesigns = () => {
    const router = useRouter()
    const spaceSavingDesigns = [
        { title: "A Colourful Kids Room With Space Saving Furniture With Open Wardrobe", imageUrl: "/images/Space Saving/A-Colourful-Kids-Room-With-Space-Saving-Furniture-With-Open-Wardobe.jpg" },
        { title: "A Dining Room With A Hidden Bar Cabinet", imageUrl: "/images/Space Saving/A-Dining-Room-With-A-Hidden-Bar-Cabinet.jpg" },
        { title: "A Kids Bedroom With A Trundle Bed", imageUrl: "/images/Space Saving/A-Kids-Bedroom-With-A-Trundle-Bed.jpg" },
        { title: "Bedroom With Space Saving Furniture Design For Small Homes", imageUrl: "/images/Space Saving/bedroom-with-space-saving-furniture-design-for-smal-homes.jpg" },
        { title: "Kids Bedroom With Space Saving Trundle Bed", imageUrl: "/images/Space Saving/kids-bedroom-with-space-saving-trundle-bed.jpg" },
        { title: "Lift Top TV Unit With Hidden Shelf In Living Room", imageUrl: "/images/Space Saving/lift-top-tv-unit-with-hidden-shelf-in-living-room.jpg" },
        { title: "Modern Dining Room With A Space Saving Side Cabinet", imageUrl: "/images/Space Saving/modern-dining-room-with-a-space-saving-side-cabinet.jpg" },
        { title: "Modern TV Cum Study Unit In Dual Tone", imageUrl: "/images/Space Saving/modern-tv-cum-study-unit-in-dual-tone.jpg" },
        { title: "Multifunctional Furniture With Crockery Unit And Foldable Dining Table Design", imageUrl: "/images/Space Saving/multifunctional-furniture-with-crockery-unit-and-foldable-dining-table-design.jpg" },
        { title: "Side Cabinet With Pullout Wine Unit Dining Room", imageUrl: "/images/Space Saving/side-cabinet-with-pullout-wine-unit-dining-room.jpg" }
    ]

    const [visibleCount, setVisibleCount] = useState(8) // Show first 8 designs

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Space-Saving Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore innovative space-saving furniture ideas: foldable tables, hidden storage, Murphy beds, and more to maximize your living space.
            </p>

            {/* Display Designs */}
            <div className="mt-6 flex flex-col items-center">
                {spaceSavingDesigns.slice(0, visibleCount).map((design, index) => (
                    <div key={index} className="w-full md:w-3/4 lg:w-2/3 p-4 mb-6 bg-gray-100 rounded-lg shadow-lg">
                        <Image
                            src={design.imageUrl}
                            alt={design.title}
                            width={800}
                            height={500}
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{design.title}</h3>
                        <p className="text-gray-600 mt-2">
                            A smartly designed {design.title} that optimizes space while adding functionality and aesthetics.
                        </p>

                        {/* Get Quote Button */}
                        <button
                            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                            onClick={() => router.push("/get-quote")}
                        >
                            Get Quote
                        </button>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            {visibleCount < spaceSavingDesigns.length && (
                <div className="text-center mt-4 mb-4">
                    <button
                        className="text-blue-600 font-medium hover:underline"
                        onClick={() => setVisibleCount(visibleCount + 8)}
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    )
}

export default SpaceSavingDesigns
