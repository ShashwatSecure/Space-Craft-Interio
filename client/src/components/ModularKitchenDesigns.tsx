"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ModularKitchenDesigns = () => {
    const router = useRouter()
    const kitchenDesigns = [
        { title: "Blue and White Modular Kitchen Design", imageUrl: "/images/Kitchen/blue-and-white-modular-kitchen-design.jpg" },
        { title: "G-Shaped Kitchen with Black and Lime Green", imageUrl: "/images/Kitchen/g-shaped-kitchen-design-with-two-contrasting-colours-of-black-and-lime-green.jpg" },
        { title: "L-Shape Modular Kitchen with Foldable Dining Table", imageUrl: "/images/Kitchen/l-shape-modular-kitchen-design-with-foldable-dining-table.jpg" },
        { title: "L-Shaped Kitchen with Dining Table", imageUrl: "/images/Kitchen/l-shaped-kitchen-with-dining-table-design.jpg" },
        { title: "L-Shaped Modular Kitchen with Marble and Wood", imageUrl: "/images/Kitchen/l-shaped-modualr-kitchen-with-marble-and-wood-makes-modern-kitchen-design.jpg" },
        { title: "L-Shaped Modular Kitchen Design", imageUrl: "/images/Kitchen/l-shaped-modular-kitchen-design.jpg" },
        { title: "Modern L-Shaped Kitchen with Patterned Backsplash", imageUrl: "/images/Kitchen/modern-l-shaped-kitchen-design-with-patterned-tiled-backsplash.jpg" },
        { title: "Parallel Kitchen Design in Red and Yellow", imageUrl: "/images/Kitchen/parallel-kitchen-design-in-red-and-yellow.jpg" },
        { title: "Pastel Blue U-Shaped Kitchen Layout", imageUrl: "/images/Kitchen/pastel-blue-kitchen-u-shaped-layout.jpg" },
        { title: "Red and White Kitchen with Granite Countertops", imageUrl: "/images/Kitchen/red-and-white-kitchen-design-with-granite-countertops.jpg" },
        { title: "Straight Shaped Kitchen with Foldable Breakfast Counter", imageUrl: "/images/Kitchen/straight-shaped-kitchen-design-with-foldable-breakfast-counter.jpg" },
        { title: "U-Shaped Kitchen Layout with Pastel Shades", imageUrl: "/images/Kitchen/u-shaped-kitchen-layout-pastel-shades.jpg" },
    ]

    const [visibleCount, setVisibleCount] = useState(8) // Show first 8 designs

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Modular Kitchen Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Discover stylish modular kitchen designs: Straight, L-shaped, U-shaped, Parallel & Island layouts.
                Combining functionality with modern, space-saving solutions.
            </p>

            {/* Display Kitchens */}
            <div className="mt-6 flex flex-col items-center">
                {kitchenDesigns.slice(0, visibleCount).map((kitchen, index) => (
                    <div key={index} className="w-full md:w-3/4 lg:w-2/3 p-4 mb-6 bg-gray-100 rounded-lg shadow-lg">
                        <Image
                            src={kitchen.imageUrl}
                            alt={kitchen.title}
                            width={800}
                            height={500}
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{kitchen.title}</h3>
                        <p className="text-gray-600 mt-2">
                            A beautifully designed {kitchen.title} that optimizes space while adding modern aesthetics.
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
            {visibleCount < kitchenDesigns.length && (
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

export default ModularKitchenDesigns
