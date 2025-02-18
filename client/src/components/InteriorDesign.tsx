import React from "react";
import { data } from "@/data";
import { motion } from "framer-motion";
import Carousel from "./designs-carousel/Carousel";

const InteriorDesign = () => {
    const interiors = JSON.parse(data);

    return (
        <>
            <div
                className="relative flex items-center justify-center bg-cover bg-center w-full text-white font-extrabold text-4xl md:text-6xl lg:text-7xl px-4 md:px-6 h-[10vh] mt:20"

            >
            </div>
            <div className="w-[100vw] pt-4 lg:pt-8 mx-1 bg-gradient-to-b from-gray-100 to-white">
                <div className="flex flex-col justify-center items-center">
                    <motion.section
                        className="hero"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white rounded-xl w-[80vw] p-6 mb-12 shadow-md border border-gray-200">
                            <h1 className="text-3xl font-bold text-center text-gray-900">
                                Welcome to Our Interior Design Studio
                            </h1>
                            <p className="text-center text-lg text-gray-600 mt-4">
                                Creating elegant and personalized spaces with expert craftsmanship.
                            </p>
                        </div>
                    </motion.section>
                </div>

                {/* Carousel Section */}
                <div className="w-full px-4 md:px-6 lg:px-8">
                    {interiors.map((interior: any) => (
                        <Carousel
                            title={interior.title}
                            items={interior.items}
                            key={interior.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default InteriorDesign;
