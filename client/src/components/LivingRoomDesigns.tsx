"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const LivingRoomDesigns = () => {
    const router = useRouter()
    const livingRoomDesigns = [
        { title: "Classic Style Living Room Design", imageUrl: "/images/Living Room/classic-style-living-room-design.jpg" },
        { title: "Eclectic Living Room with Traditional Touch", imageUrl: "/images/Living Room/eclectic-living-room-with-traditional-touch.jpg" },
        { title: "Industrial Rustic Living Room in Earthy Tones", imageUrl: "/images/Living Room/industrial-rustic-living-room-in-earthy-tones.jpg" },
        { title: "Industrial Style Living Room with Furniture Sofa", imageUrl: "/images/Living Room/industrial-style-living-room-interior-with-furniture-sofa.jpg" },
        { title: "Living Room Furniture with Accent Wall", imageUrl: "/images/Living Room/living-room-furniture-with-accent-wall.jpg" },
        { title: "Living Room Design for Small Indian Homes", imageUrl: "/images/Living Room/living-room-interior-design-for-small-indian-homes-with-subtle-pastel-dual-tone.jpg" },
        { title: "Minimalist Living Room Interior", imageUrl: "/images/Living Room/living-room-interior-design-minimal-style.jpg" },
        { title: "Living Room with Large Sectional Sofa in Beige", imageUrl: "/images/Living Room/living-room-interior-with-a-large-sectional-sofa-in-beige.jpg" },
        { title: "Living Room Red Couch with Recliner Lounge", imageUrl: "/images/Living Room/living-room-red-couch-with-recliner-lounge.jpg" },
        { title: "Living Room TV Unit Against Brick Wall", imageUrl: "/images/Living Room/living-room-tv-unit-against-brick-wall.jpg" },
        { title: "Minimalist Living Room for Small Families", imageUrl: "/images/Living Room/minimalist-living-room-for-small-families.jpg" },
        { title: "Modern Living Room with Basil Green Paneled Wall", imageUrl: "/images/Living Room/modern-living-room-basil-green-paneled-wall.jpg" },
        { title: "Modern Living Room with TV Unit & Storage", imageUrl: "/images/Living Room/modern-living-room-design-with-tv-unit-designed-with-storage.jpg" },
        { title: "Modern Minimalist Living Room with Bookshelf & Sofa", imageUrl: "/images/Living Room/modern-minimalist-living-room-with-bookshelf-and-sofa.jpg" },
        { title: "Nature-Themed Living Room with Blue Sofa", imageUrl: "/images/Living Room/nature-themed-living-room-blue-sofa-design.jpg" },
        { title: "Open Living Room with Partition Design", imageUrl: "/images/Living Room/open-living-room-with-partition-design.jpg" },
        { title: "Wall-Mounted TV Unit for Contemporary Living Room", imageUrl: "/images/Living Room/wall-mounted-tv-unit-for-contemporary-living-room.jpg" },
        { title: "WFH-Friendly Living Room for Professionals", imageUrl: "/images/Living Room/wfh-friendly-living-room-for-working-professionals.jpg" },
        { title: "WFH-Friendly Modern Living Room", imageUrl: "/images/Living Room/wfh-friendly-modern-living-room.jpg" },
        { title: "White Color Wall Modern Living Room Interior", imageUrl: "/images/Living Room/white-color-wall-modern-style-living-room-interior-design.jpg" },
    ]

    const [visibleCount, setVisibleCount] = useState(8) // Show first 8 designs

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Living Room Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore beautiful living room designs that match your style, whether modern, minimalist, or traditional.
                Discover ideas to create a cozy and elegant space.
            </p>

            {/* Display Living Room Designs */}
            <div className="mt-6 flex flex-col items-center">
                {livingRoomDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A stylish {design.title} that enhances the aesthetics and comfort of your living space.
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
            {visibleCount < livingRoomDesigns.length && (
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

export default LivingRoomDesigns
