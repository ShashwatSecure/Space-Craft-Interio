"use client";

import { projectData } from "@/projectData";
import Image from "next/image";
import { useState, useRef } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

export default function RecentProjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const selectedProjects = projectData.slice(startIndex, startIndex + projectsPerPage);

  return (
    <>
      <section className="mx-auto p-6 mt-12 md:mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Recent Projects
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explore our completed projects showcasing beautiful interior designs.
        </p>

        <div className="mt-6 flex flex-col items-center gap-8">
          {selectedProjects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-3/4 px-4 lg:w-2/3 py-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-start"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-center">{project.workDetails}</p>
              <p className="text-gray-500 text-center mb-4">{project.address}</p>
              <ImageCarousel images={project.imageUrls} />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-green-500 text-white"}`}
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-green-500 text-white"}`}
          >
            Next
          </button>
        </div>
      </section>
      <Disclaimer />
      <Footer />
    </>
  );
}

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[90%] md:w-[80%] lg:w-[70%]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Project Image ${currentIndex + 1}`}
          width={800}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>
      <BiLeftArrowCircle
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-gray-500 cursor-pointer hover:text-gray-700"
        onClick={prevImage}
      />
      <BiRightArrowCircle
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-gray-500 cursor-pointer hover:text-gray-700"
        onClick={nextImage}
      />
    </div>
  );
};
