"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DiningRoom = () => {
    const router = useRouter();
    const diningRoomDesigns = [
        { title: "Classical Dining Room Interior Design with Wooden Table and Chairs", imageUrl: "/images/Dining Room/classical-dining-room-interior-design-with-wooden-table-with-chairs.jpg" },
        { title: "Dining Room Design in Dark Veneer Finish with Grey Rug and Oval Mirror", imageUrl: "/images/Dining Room/dining-room-design-in-dark-coloured-veneer-finish-with-grey-rug-and-oval-mirror.jpg" },
        { title: "Modern Minimal Dining Room Design", imageUrl: "/images/Dining Room/dining-room-design-in-modern-minimal-style-dining-room.jpg" },
        { title: "Dining Room with Breakfast Counter and Open Shelves", imageUrl: "/images/Dining Room/dining-room-design-with-breakfast-counter-with-open-shelves.jpg" },
        { title: "Dining Room with Chandelier and Velvet Upholstered Chairs", imageUrl: "/images/Dining Room/dining-room-design-with-chandelier-and-four-velvet-upholstered-chairs.jpg" },
        { title: "Round Wooden Dining Table with Chairs and Cabinet", imageUrl: "/images/Dining Room/dining-room-design-with-round-wooden-table-with-chairs-and-cabinet.jpg" },
        { title: "Walnut Wood Dining Table with Glass Front Crockery Unit", imageUrl: "/images/Dining Room/dining-room-design-with-walnut-wood-dining-table-and-chairs-and-glass-front-crockery-unit.jpg" },
        { title: "Oak Wood Dining Table for Six with Gorgeous Painting", imageUrl: "/images/Dining Room/dining-room-in-oak-wood-fininsh-dining-table-for-six-with-gorgeous-painting.jpg" },
        { title: "Neo-Classical Dining Room Interior Design", imageUrl: "/images/Dining Room/dining-room-interior-design-in-neo-classical-style.jpg" },
        { title: "Dining Room Interior with White Marble Top and Wooden Crockery", imageUrl: "/images/Dining Room/dining-room-interior-with-white-marble-top-and-wooden-crockery.jpg" }
    ];

    const [visibleCount, setVisibleCount] = useState(8);

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Dining Room Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore elegant and functional dining room designs that bring warmth and sophistication to your home.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {diningRoomDesigns.slice(0, visibleCount).map((dining, index) => (
                    <div key={index} className="w-full md:w-3/4 lg:w-2/3 p-4 mb-6 bg-gray-100 rounded-lg shadow-lg">
                        <Image
                            src={dining.imageUrl}
                            alt={dining.title}
                            width={800}
                            height={500}
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{dining.title}</h3>
                        <p className="text-gray-600 mt-2">
                            A beautifully designed {dining.title} that creates a welcoming dining experience.
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

            {visibleCount < diningRoomDesigns.length && (
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
    );
};

export default DiningRoom;
