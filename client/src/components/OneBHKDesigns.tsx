"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OneBHKDesigns = [
    { title: "1-bhk-bedroom-designed-with-sliding-wardrobe-and-king-sized-bed", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863473/1-bhk-bedroom-designed-with-sliding-wardrobe-and-king-sized-bed_pxygdd.jpg" },
    { title: "1-bhk-flat-bedroom-with-sliding-wardrobe-and-wooden-flooring", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863473/1-bhk-flat-bedroom-with-sliding-wardrobe-and-wooden-flooring_bpodqc.jpg" },
    { title: "1-bhk-kitchen-design-with-handleless-cabinets-open-shelves-in-built-hob-and-chimney", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863472/1-bhk-kitchen-design-with-handleless-cabinets-open-shelves-in-built-hob-and-chimney_f23bno.jpg" },
    { title: "classy-bedroom-in-1bhk-home-design", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863473/classy-bedroom-in-1bhk-home-design_y8u6gw.jpg" },
    { title: "elegant-1bhk-home-design-with-neutral-tones", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863473/elegant-1bhk-home-design-with-neutral-tones_gcac5g.jpg" },
    { title: "elegant-living-room-design-with-cosy-sofa-in-1bhk-apartment-design", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863474/elegant-living-room-design-with-cosy-sofa-in-1bhk-apartment-design_dfcrpa.jpg" },
    { title: "latest-living-room-design-designed-in-1bhk-house-design", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863474/latest-living-room-design-designed-in-1bhk-house-design_mem8ju.jpg" },
    { title: "living-room-home-interior-for-1bhk-flat-is-designed-in-sandstone-wallpaper-and-brick-cladding-wall-the-sofa-unit-and-a-bean-bag", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863475/living-room-home-interior-for-1bhk-flat-is-designed-in-sandstone-wallpaper-and-brick-cladding-wall-the-sofa-unit-and-a-bean-bag_h50q2n.jpg" },
    { title: "living-room-in-1-bhk-flat-designed-with-textured-wallpaper-behind-entertainment-unit", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863473/living-room-in-1-bhk-flat-designed-with-textured-wallpaper-behind-entertainment-unit_mqddcm.jpg" },
    { title: "living-room-in-1-bhk-interior-features-wall-mounted-tv-unit-with-wooden-panelling", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863475/living-room-in-1-bhk-interior-features-wall-mounted-tv-unit-with-wooden-panelling_avzton.jpg" },
    { title: "modern-1bhk-home-living-room-designed-with-comfortable-couch-and-tv-unit", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863475/modern-1bhk-home-living-room-designed-with-comfortable-couch-and-tv-unit_tju2rv.jpg" },
    { title: "spacious-1-bhk-home-design-with-neutral-tones-and-minimal-furniture", imageUrl: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739863475/spacious-1-bhk-home-design-with-neutral-tones-and-minimal-furniture_q5urha.jpg" }
];

const OneBHKGallery = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const router = useRouter();

    return (
        <section className="mt-20 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">1BHK Designs</h2>
            <p className="text-center text-gray-600 mt-2">
                Explore beautiful 1BHK home designs to inspire your next project.
            </p>

            <div className="mt-6 flex flex-col items-center">
                {OneBHKDesigns.slice(0, visibleCount).map((design, index) => (
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
                            A beautifully designed {design.title} to enhance your 1BHK home.
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

            {visibleCount < OneBHKDesigns.length && (
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

export default OneBHKGallery;
