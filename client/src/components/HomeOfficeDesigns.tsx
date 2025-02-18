"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeOfficeDesigns = () => {
    const router = useRouter();
    const homeOfficeDesigns = [
        { title: "Home Office Beside Window with Seating", imageUrl: "/images/Home Office/home-office-beside-window-with-seating.jpg" },
        { title: "Home Office Design Ideas for Balcony with Multiple Storage", imageUrl: "/images/Home Office/home-office-design-ideas-for-balcony-with-multiple-storage.jpg" },
        { title: "Home Office Design in Bedroom with Blue and Wooden Theme", imageUrl: "/images/Home Office/home-office-design-in-bedroom-with-blue-and-wooden-theme.jpg" },
        { title: "Home Office with an Old-Style Wooden Table and Cabinet", imageUrl: "/images/Home Office/home-office-design-with-an-old-style-wooden-table-and-cabinet-unit-with-bronze-gold-handles.jpg" },
        { title: "Home Office Design with Floral Patterned Wallpaper", imageUrl: "/images/Home Office/home-office-design-with-floral-patterned-wallpaper.jpg" },
        { title: "Home Office Desk Extends to a Wooden Folding Bookshelf", imageUrl: "/images/Home Office/home-office-desk-extends-to-a-wooden-folding-bookshelf-with-handleless-drawer.jpg" },
        { title: "Home Office Desk Unit with Bookshelf for Two", imageUrl: "/images/Home Office/home-office-desk-unit-with-bookshelf-for-two.jpg" },
        { title: "Home Office Desk with Floating Shelves for Storage", imageUrl: "/images/Home Office/home-office-desk-with-floating-shelves-to-store-books-and-documents.jpg" },
        { title: "Home Office Interior Design for Small Apartment", imageUrl: "/images/Home Office/home-office-interior-design-for-small-apartment-with-floating-shelf.jpg" },
        { title: "Home Office Interior with Shelves and Handleless Drawers", imageUrl: "/images/Home Office/home-office-interior-design-with-a-combination-of-shelves-with-two-handleless-drawers.jpg" }
    ];

    const [visibleCount, setVisibleCount] = useState(8);

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Home Office Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Discover stylish and functional home office designs tailored to your workspace needs.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {homeOfficeDesigns.slice(0, visibleCount).map((design, index) => (
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
                            Enhance your productivity with a {design.title} setup that blends comfort and efficiency.
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

            {visibleCount < homeOfficeDesigns.length && (
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

export default HomeOfficeDesigns;
