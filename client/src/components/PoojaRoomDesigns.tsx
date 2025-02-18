"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const PoojaRoomDesigns = () => {
    const router = useRouter()
    const poojaRoomDesigns = [
        { title: "Contemporary Pooja Room Design for Indian Homes", imageUrl: "/images/Pooja Room/contemporary-pooja-room-design-for-indian-homes.jpg" },
        { title: "Floating Pooja Unit with Intricate Jaali Door", imageUrl: "/images/Pooja Room/floating-pooja-unit-with-intricate-jaali-door.jpg" },
        { title: "Grey and White Pooja Unit with Jaali Backdrop", imageUrl: "/images/Pooja Room/grey-and-white-pooja-unit-with-jaali-backdrop.jpg" },
        { title: "Grey and White TV Unit with Pooja Room", imageUrl: "/images/Pooja Room/grey-and-white-tv-unit-with-pooja-room.jpg" },
        { title: "L-Shaped Puja Unit Design in Blush Pink", imageUrl: "/images/Pooja Room/l-shaped-puja-unit-design-blush-pink.jpg" },
        { title: "Open Mandir Room Design with Ganesha Jaali Backdrop", imageUrl: "/images/Pooja Room/open-mandir-room-design-with-ganesha-jaali-backdrop.jpg" },
        { title: "Pooja Room Design with Marble and Wooden Finish", imageUrl: "/images/Pooja Room/pooja-room-design-with-marble-and-wooden.jpg" },
        { title: "White and Wooden Finish Pooja Unit Design", imageUrl: "/images/Pooja Room/white-and-wooden-finish-pooja-unit-design.jpg" },
        { title: "White Pooja Unit Design with Storage", imageUrl: "/images/Pooja Room/white-pooja-unit-design-with-storage.jpg" },
        { title: "Wooden Pooja Mandir Design with Traditional Touch", imageUrl: "/images/Pooja Room/wooden-pooja-mandir-design-with-traditional-touch.jpg" }
    ]

    const [visibleCount, setVisibleCount] = useState(6) // Show first 6 designs

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Pooja Room Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore divine pooja room designs that blend traditional and modern aesthetics, ensuring a serene space for worship at home.
            </p>

            {/* Display Pooja Rooms */}
            <div className="mt-6 flex flex-col items-center">
                {poojaRoomDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A beautifully crafted {design.title} that enhances your home's spiritual ambiance.
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
            {visibleCount < poojaRoomDesigns.length && (
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

export default PoojaRoomDesigns
