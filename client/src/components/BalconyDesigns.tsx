"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BalconyDesigns = () => {
    const router = useRouter();
    const balconyDesigns = [
        { title: "Balcony with Brick Wall and Open Shelves", imageUrl: "/images/Balcony/balcony-design-with-brick-wall-and-open-shelves.jpg" },
        { title: "Balcony with Cosy Work Station", imageUrl: "/images/Balcony/balcony-design-with-cosy-work-station.jpg" },
        { title: "Balcony with Home Office Setup", imageUrl: "/images/Balcony/balcony-design-with-home-office-setup.jpg" },
        { title: "Balcony with Smart Bar Unit", imageUrl: "/images/Balcony/balcony-design-with-smart-bar-unit.jpg" },
        { title: "Balcony with Yellow and White Multifunctional Cabinet", imageUrl: "/images/Balcony/balcony-design-with-yellow-and-white-multifunctional-cabinet.jpg" },
        { title: "Balcony with Wooden Two-Seater Jhula", imageUrl: "/images/Balcony/balcony-interior-design-with-wooden-two-seater-jhula.jpg" },
        { title: "Balcony Interior with Showcase Cum Wine Rack", imageUrl: "/images/Balcony/balcony-interior-ideas-with-showcase-cum-wine-rack-and-handleless-drawers.jpg" },
        { title: "Blue and White Balcony with Multifunctional Furniture", imageUrl: "/images/Balcony/blue-and-white-balcony-design-with-multifunctional-furniture.jpg" },
        { title: "Enclosed Balcony with Home Office Setup", imageUrl: "/images/Balcony/enclosed-balcony-images-with-home-office-setup.jpg" },
        { title: "Modern Balcony with Study Nook and Hidden Storage", imageUrl: "/images/Balcony/modern-balcony-design-with-study-knook-and-hidden-storage.jpg" },
        { title: "Small Balcony with Turf Grass Wall and Wicker Swing", imageUrl: "/images/Balcony/small-balcony-design-with-turf-grass-wall-and-single-seater-wicker-swing.jpg" },
        { title: "Spacious Balcony with Bookshelf", imageUrl: "/images/Balcony/spacious-balcony-design-with-bookshelf.jpg" },
        { title: "Stylish Balcony with Book Cabinet and Hanging Swing", imageUrl: "/images/Balcony/stylish-balcony-design-with-book-cabinet-and-hanging-swing.jpg" }
    ];

    const [visibleCount, setVisibleCount] = useState(6);

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Balcony Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Discover creative and stylish balcony designs to elevate your outdoor space.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {balconyDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A beautifully designed {design.title} to enhance your home.
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

            {visibleCount < balconyDesigns.length && (
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

export default BalconyDesigns;
