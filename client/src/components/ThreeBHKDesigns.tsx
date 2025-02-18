"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ThreeBHKDesigns = () => {
    const router = useRouter();
    const [visibleCount, setVisibleCount] = useState(6);

    const designs = [
        { title: "3 BHK Design Home Kitchen With Breakfast Counter", imageUrl: "/images/3BHK/3-bhk-design-home-kitchen-with-breakfast-counter.jpg" },
        { title: "3 BHK Flat Design With Living Cum Dining Area", imageUrl: "/images/3BHK/3-bhk-flat-design-with-living-cum-dining-area.jpg" },
        { title: "Bedroom Interior Design For 3 BHK Flat In Bangalore", imageUrl: "/images/3BHK/bedroom-interior-design-for-3-bhk-flat-in-bangalore.jpg" },
        { title: "Dining Cum Kitchen Area For 3 BHK Villa House Design", imageUrl: "/images/3BHK/dining-cum-kitchen-area-for-3-bhk-villa-house-design.jpg" },
        { title: "Dining Room Interior Design For Modern 3 BHK Flat Bangalore", imageUrl: "/images/3BHK/dining-room-interior-design-for-modern-3-bhk-flat-bangalore.jpeg" },
        { title: "Living Room 3 BHK Interior Design With Brick Wall Cladding", imageUrl: "/images/3BHK/living-room-3bhk-interior-design-with-brick-wall-cladding.jpg" },
        { title: "Pooja Room In A 3 BHK Interior Design With A Wood Accent Wall Cladding And Two Hanging Lamps", imageUrl: "/images/3BHK/pooja-room-in-a-3bhk-interior-design-with-a-wood-accent-wall-cladding-and-two-hanging-lamps.jpg" }
    ];

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">3BHK Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore elegant 3BHK home designs to elevate your living space.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {designs.slice(0, visibleCount).map((design, index) => (
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
                            A beautifully designed {design.title} to enhance your 3BHK home.
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

            {visibleCount < designs.length && (
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
    );
};

export default ThreeBHKDesigns;
