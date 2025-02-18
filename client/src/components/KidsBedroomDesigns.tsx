"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const KidsBedroomDesigns = () => {
    const router = useRouter()
    const bedroomDesigns = [
        { title: "Children's Bedroom with Bunk Bed and Seating Area", imageUrl: "/images/Kids Bedroom/childrens-bedroom-with-bunk-bed-and-seating-area.jpg" },
        { title: "Cozy Kids Bedroom with Single Bed and Wooden Bookshelf", imageUrl: "/images/Kids Bedroom/cozy-kids-bedroom-with-single-bed-and-wooden-bookshelf.jpg" },
        { title: "Kids Bed with Pull-Out Storage Drawers Underneath", imageUrl: "/images/Kids Bedroom/kids-bed-with-pull-out-storage-drawers-underneath.jpg" },
        { title: "Kids Bedroom Boys with Light Wood Wardrobe", imageUrl: "/images/Kids Bedroom/kids-bedroom-boys-with-light-wood-wardrobe.jpg" },
        { title: "Kids Bedroom Design for Boys and Girls", imageUrl: "/images/Kids Bedroom/kids-bedroom-design-for-boys-and-girls.jpg" },
        { title: "Kids Bedroom Design for Small Homes", imageUrl: "/images/Kids Bedroom/kids-bedroom-design-for-small-homes.jpg" },
        { title: "Kids Bedroom Design in Modern Eclectic Style with Bunk Beds", imageUrl: "/images/Kids Bedroom/kids-bedroom-design-in-modern-eclectic-style-with-bunk-beds.jpg" },
        { title: "Kids Bedroom with Bed and White Desk", imageUrl: "/images/Kids Bedroom/kids-bedroom-with-bed-and-white-desk.jpg" },
    ]

    const [visibleCount, setVisibleCount] = useState(6) // Show first 6 designs initially

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Kids Bedroom Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore creative and space-efficient kids' bedroom designs, perfect for both fun and functionality.
            </p>

            {/* Display Bedrooms */}
            <div className="mt-6 flex flex-col items-center">
                {bedroomDesigns.slice(0, visibleCount).map((bedroom, index) => (
                    <div key={index} className="w-full md:w-3/4 lg:w-2/3 p-4 mb-6 bg-gray-100 rounded-lg shadow-lg">
                        <Image
                            src={bedroom.imageUrl}
                            alt={bedroom.title}
                            width={800}
                            height={500}
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{bedroom.title}</h3>
                        <p className="text-gray-600 mt-2">
                            A thoughtfully designed {bedroom.title} that blends comfort and aesthetics seamlessly.
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
            {visibleCount < bedroomDesigns.length && (
                <div className="text-center mt-4 mb-4">
                    <button
                        className="text-blue-600 font-medium hover:underline"
                        onClick={() => setVisibleCount(visibleCount + 6)}
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    )
}

export default KidsBedroomDesigns
