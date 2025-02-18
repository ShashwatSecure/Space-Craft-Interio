"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const WardrobeDesigns = () => {
    const router = useRouter()
    const wardrobeDesigns = [
        { title: "3-Door Bedroom Wardrobe in Wooden Finish", imageUrl: "/images/Wardrobe/3-door-bedroom-wardrobe-design-in-wooden-finish.jpg" },
        { title: "Ceiling-to-Floor Sliding Wardrobe with Dresser Unit", imageUrl: "/images/Wardrobe/ceiling-to-floor-sliding-wardrobe-with-attached-dresser-unit.jpg" },
        { title: "Dual-Tone Wardrobe with Several Compartments", imageUrl: "/images/Wardrobe/dual-tone-wardrobe-design-with-several-compartments.jpg" },
        { title: "Floor-to-Ceiling Wardrobe with Glass Shutters", imageUrl: "/images/Wardrobe/floor-to-ceiling-wardrobe-design-with-glass-shutters.jpg" },
        { title: "Earthy Pink Floor-to-Ceiling Wardrobe with Dressing Unit", imageUrl: "/images/Wardrobe/floor-to-ceiling-wardrobe-in-earthy-pink-with-attached-dressing-unit.jpg" },
        { title: "Floor-to-Ceiling Wooden Wardrobe", imageUrl: "/images/Wardrobe/floor-to-ceiling-wooden-wardrobe-images.jpg" },
        { title: "Four-Door Dark Wood Wardrobe with Mirror", imageUrl: "/images/Wardrobe/four-door-dark-wood-wardrobe-design-with-mirror.jpg" },
        { title: "Kids Wardrobe Design for Bedroom", imageUrl: "/images/Wardrobe/kids-wardrobe-design-for-bedroom.jpg" },
        { title: "Modern White Wardrobe with Pull-Out Dresser", imageUrl: "/images/Wardrobe/modern-white-wardrobe-design-with-pull-out-dresser.jpg" },
        { title: "Multi-Door Wardrobe in Orange", imageUrl: "/images/Wardrobe/multi-door-wardrobe-interior-design-in-orange-colour.jpg" },
        { title: "Sleek Wardrobe with Space-Saving Sliding Doors", imageUrl: "/images/Wardrobe/new-wardrobe-design-with-sleek-wardrobe-with-space-saving-sliding-door-mechanism.jpg" },
        { title: "Rustic Wardrobe with Bookshelf and Study Table", imageUrl: "/images/Wardrobe/rustic-wardrobe-design-with-bookshelf-and-study-table.jpg" },
        { title: "Sliding Wardrobe with Handleless Closed Drawers", imageUrl: "/images/Wardrobe/sliding-wardrobe-design-with-handleless-closed-drawers.jpg" },
        { title: "Minimalistic Slate-Finished Wardrobe", imageUrl: "/images/Wardrobe/wardrobe-design-finished-in-slate-with-minimalistic-look.jpg" },
        { title: "Wardrobe with Pink Doors and Zig-Zag Pattern", imageUrl: "/images/Wardrobe/wardrobe-design-photos-with-pink-doors-and-zig-zag-pattern.jpg" },
        { title: "Wardrobe Design with In-Built TV Unit", imageUrl: "/images/Wardrobe/wardrobe-design-with-in-built-tv-unit.jpg" },
        { title: "Wardrobe with Attached Study & Dressing Unit", imageUrl: "/images/Wardrobe/wardrobe-with-attached-study-cum-dressing-unit.jpg" },
        { title: "White Wardrobe with Dressing Unit", imageUrl: "/images/Wardrobe/white-wardrobe-design-with-dressing-unit.jpg" },
        { title: "Wood Walk-In Wardrobe Closet for Master Bedroom", imageUrl: "/images/Wardrobe/wood-walk-in-wardrobe-closet-for-master-bedroom.jpg" },
    ]

    const [visibleCount, setVisibleCount] = useState(8) // Show first 8 designs initially

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Wardrobe Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Browse through stylish wardrobe designs that blend storage, functionality, and aesthetics. 
                Find the perfect wardrobe for your space.
            </p>

            {/* Display Wardrobe Designs */}
            <div className="mt-6 flex flex-col items-center">
                {wardrobeDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A premium {design.title} that adds elegance and practicality to your home.
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
            {visibleCount < wardrobeDesigns.length && (
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

export default WardrobeDesigns
