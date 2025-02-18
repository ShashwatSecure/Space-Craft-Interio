"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TwoBHKDesigns = [
    { title: "2 BHK Apartment Living Room Interior Design", imageUrl: "/images/2BHK/2bhk-apartment-living-room-interior-design.jpg" },
    { title: "2 BHK Interior Design Master Bedroom With Platform Bed And Side Tables", imageUrl: "/images/2BHK/2bhk-interior-design-master-bedroom-is-designed-with-a-platform-bed-with-side-tables.jpg" },
    { title: "2 BHK Interior Design With Hidden TV Unit Storage", imageUrl: "/images/2BHK/2bhk-interior-design-with-hidden-tv-unit-storage.jpg" },
    { title: "2 BHK Kitchen Design With Floral Tiled Backsplash", imageUrl: "/images/2BHK/2bhk-kitchen-design-with-floral-tiled-backsplash.jpg" },
    { title: "Kids Room Interior Design Of 2 BHK", imageUrl: "/images/2BHK/kids-room-interior-design-of-2bhk.jpg" },
    { title: "Living Room In 2 BHK Interior Designed In Wood And White", imageUrl: "/images/2BHK/living-room-in-2bhk-interior-designed-in-wood-and-white-oozes.jpg" },
    { title: "Modern 2 BHK House Living Room With Minimalistic Style TV Unit", imageUrl: "/images/2BHK/modern-2bhk-house-living-room-with-minimalistic-style-tv-unit.jpg" },
    { title: "Modern Living Room Design For 2 BHK Home", imageUrl: "/images/2BHK/modern-living-room-designers-for-2bhk-home-design.jpg" }
];

const TwoBHK = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const router = useRouter();

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">2 BHK Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Discover stunning 2 BHK home designs to elevate your living space.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {TwoBHKDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A beautifully designed {design.title} to enhance your 2 BHK home.
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

            {visibleCount < TwoBHKDesigns.length && (
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

export default TwoBHK;
