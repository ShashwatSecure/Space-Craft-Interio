"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BathroomDesigns = () => {
    const router = useRouter()
    const bathroomDesigns = [
        { title: "Minimalistic Style Bathroom in Pastel Colours", imageUrl: "/images/Bathroom/bathroom-design-in-minimalistic-style-and-pastel-colour-interior-1023x810.jpg" },
        { title: "Modern Bathroom with Marble Vitrified Tiles", imageUrl: "/images/Bathroom/bathroom-design-in-sleek-look-modern-style-bathroom-with-marble-vitrified-tiles.jpg" },
        { title: "Bathroom with Striking Blue Vanity", imageUrl: "/images/Bathroom/bathroom-design-with-striking-blue-vanity-1023x810.jpg" },
        { title: "Bathroom with Yellow Patterned Tiles", imageUrl: "/images/Bathroom/bathroom-design-with-yellow-patterned-tiles-1023x810.jpg" },
        { title: "Minimalistic Grey Tone Bathroom with Wood Finishes", imageUrl: "/images/Bathroom/bathroom-designs-in-minimalistic-style-bathroom-in-grey-tones-wood-finishes.jpg" },
        { title: "Modern Bathroom with Patterned Flooring", imageUrl: "/images/Bathroom/bathroom-designs-in-modern-style-with-patterned-flooring.jpg" },
        { title: "Bathroom with Floral Mosaic Tiles", imageUrl: "/images/Bathroom/bathroom-interior-design-with-floral-mosaic-tiles.jpg" },
        { title: "Grey and White Bathroom", imageUrl: "/images/Bathroom/grey-and-white-bathroom-design.jpg" },
        { title: "Master Bathroom with Space-Saving Storage", imageUrl: "/images/Bathroom/master-bathroom-design-with-space-saving-storage-1023x810.jpg" },
        { title: "Modern Grey and White Bathroom", imageUrl: "/images/Bathroom/modern-bathroom-design-in-grey-and-white-1023x810.jpg" },
        { title: "Black and White Modern Bathroom", imageUrl: "/images/Bathroom/modern-bathroom-design-with-black-and-white-colour-1023x810.jpg" },
        { title: "Modern Bathroom with Green Walls and Gold Accents", imageUrl: "/images/Bathroom/modern-bathroom-design-with-green-walls-gold-accents-1023x810.jpg" },
        { title: "Modern Bathroom in Neutral Shades", imageUrl: "/images/Bathroom/modern-bathroom-designed-with-neutral-shades-1023x810.jpg" },
        { title: "Modern Classical Bathroom with Blue Ceramic Tiles", imageUrl: "/images/Bathroom/modern-classical-bathroom-design-with-blue-wall-finish-ceramic-tiles-1023x810.jpg" },
        { title: "Modern Bathroom with Patterned Tiled Walls", imageUrl: "/images/Bathroom/modern-style-bathroom-with-patterned-tiled-walls-1023x810.jpg" },
        { title: "Olive Green Modern Bathroom", imageUrl: "/images/Bathroom/olive-green-modern-bathroom-design-1023x810.jpg" },
        { title: "Small Organic Style Bathroom with Marble Tiles", imageUrl: "/images/Bathroom/small-bathroom-design-images-in-modern-oragnic-style-with-marble-tiles.jpg" },
        { title: "Small Bathroom with Slate Tiles and Space-Saving Vanity", imageUrl: "/images/Bathroom/small-bathroom-design-with-slate-tiles-space-saving-vanity-unit.jpg" },
    ]

    const [visibleCount, setVisibleCount] = useState(8)

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Bathroom Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Discover modern and stylish bathroom designs to enhance your space.
            </p>
            <div className="mt-6 flex flex-col items-center">
                {bathroomDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A beautifully designed {design.title} for your home.
                        </p>
                        <button
                            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                            onClick={() => router.push("/get-quote")}
                        >
                            Get Quote
                        </button>
                    </div>
                ))}
            </div>
            {visibleCount < bathroomDesigns.length && (
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

export default BathroomDesigns
