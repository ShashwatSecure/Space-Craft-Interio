"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BedroomDesigns = () => {
    const router = useRouter()
    const bedroomDesigns = [
        { title: "Apartment Bedroom with Light Wood Laminates", imageUrl: "/images/Bedroom/apartment-bedroom-with-light-wood-laminates.jpg" },
        { title: "Bedroom Bed Design with Tufted Headboard", imageUrl: "/images/Bedroom/bedroom-bed-design-with-tufted-headboard.jpg" },
        { title: "Neutral Bedroom Colour with Accent Wall", imageUrl: "/images/Bedroom/bedroom-colour-design-in-neutral-with-accent-wall.jpg" },
        { title: "Industrial Style Bedroom Design", imageUrl: "/images/Bedroom/bedroom-design-in-industrial-style-bedroom.jpg" },
        { title: "Panton Colour 2021 Yellow & Grey Bedroom with Modular Furniture", imageUrl: "/images/Bedroom/bedroom-design-in-panton-colour-of-year-2021-yellow-and-grey-with-modular-furniture.jpg" },
        { title: "Bedroom Design with Window Bay Seating", imageUrl: "/images/Bedroom/bedroom-design-with-window-bay-seating.jpg" },
        { title: "Tall Headboard Bedroom with Backlit Feature", imageUrl: "/images/Bedroom/bedroom-tall-headboard-with-backlit.jpg" },
        { title: "Bedroom Wardrobe with Tinted Glass Front", imageUrl: "/images/Bedroom/bedroom-wardrobe-with-tinted-glass-front.jpg" },
        { title: "Bright Bedroom in White and Orange", imageUrl: "/images/Bedroom/bright-bedroom-design-in-white-and-orange-colour.jpg" },
        { title: "Compact Bedroom with Queen-Size Bed", imageUrl: "/images/Bedroom/compact-bedroom-design-comes-with-queen-size.jpg" },
        { title: "Modern Blue and White Bedroom Design", imageUrl: "/images/Bedroom/modern-bedroom-design-blue-white-bed-design-image-online.jpg" },
        { title: "Modern Bedroom with Green Accent Wall", imageUrl: "/images/Bedroom/modern-bedroom-design-with-green-accent-wall.jpg" },
        { title: "Modern Bedroom with Side Tables", imageUrl: "/images/Bedroom/modern-bedroom-design-with-side-table-on-either-side.jpg" },
        { title: "Modern Bedroom Designs in Bangalore, Mumbai, Hyderabad", imageUrl: "/images/Bedroom/modern-bedroom-designs-in-bangalore-mumbai-hyderabad.jpg" },
        { title: "Modern Bedroom in Gray and Wood Finish", imageUrl: "/images/Bedroom/modern-bedroom-in-gray-and-wood.jpg" },
        { title: "Modern Living Room Cum Bedroom", imageUrl: "/images/Bedroom/modern-living-room-cum-bedroom.jpg" },
        { title: "Muted Colour Modern Bedroom Designs", imageUrl: "/images/Bedroom/muted-colour-modern-bedroom-designs.jpg" },
        { title: "Neo-Classical Style Bedroom with Wall Moulding", imageUrl: "/images/Bedroom/neo-classical-style-bedroom-design-with-wall-moulding.jpg" },
        { title: "Spacious Bedroom with Walk-In Closet", imageUrl: "/images/Bedroom/spacious-bedroom-with-walk-in-closet.jpg" },
        { title: "Spacious Black Bedroom with Black Wood Panelling", imageUrl: "/images/Bedroom/spacious-black-bedroom-with-black-wood-panelling.jpg" },
    ]

    const [visibleCount, setVisibleCount] = useState(8) // Show first 8 designs initially

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Bedroom Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore our elegant and comfortable bedroom designs that cater to different styles and needs.
            </p>

            {/* Display Bedroom Designs */}
            <div className="mt-6 flex flex-col items-center">
                {bedroomDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A premium {design.title} that offers style and relaxation.
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
                        onClick={() => setVisibleCount(visibleCount + 8)}
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    )
}

export default BedroomDesigns
