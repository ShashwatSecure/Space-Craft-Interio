// import React from "react";
// import { data } from "@/data";
// import { motion } from "framer-motion";
import { fetchAllDesigns } from "@/actions/designs.action";
import Carousel from "./designs-carousel/Carousel";

const InteriorDesign = async () => {
    const interiors = (await fetchAllDesigns()).data

    return (
        <>
            <div
                className="relative flex items-center justify-center bg-cover bg-center w-full text-white font-extrabold text-4xl md:text-6xl lg:text-7xl px-4 md:px-6 h-[10vh] mt:20"
            >
            </div>
            <div className="w-[100vw] pt-4 lg:pt-8 md:mx-1 bg-white flex flex-col items-center justify-start from-gray-100 to-white">
                <div className="flex flex-col justify-center items-center">
                        <div className="bg-white rounded-xl md:w-[80vw] w-full p-6 mb-6 animate-animate-appear border-gray-200">
                            <h1 className="md:text-3xl text-2xl font-bold text-center text-gray-900">
                                Welcome to Our Interior Design Studio
                            </h1>
                            <p className="text-center md:text-lg text-sm text-gray-600 mt-4">
                                Creating elegant and personalized spaces with expert craftsmanship.
                            </p>
                        </div>
                </div>

                {/* Carousel Section */}
                <div className="md:w-[90%] w-full md:mx-4 mx-0 space-y-4">
                    {interiors.map((interior) => (
                        <Carousel
                            title={interior.category}
                            items={interior.items}
                            key={interior.category}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default InteriorDesign;
