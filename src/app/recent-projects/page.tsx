"use client"

import { fetchAllProjects } from "@/actions/projects.action"
import Loader from "@/components/Loader"
import { Project } from "@prisma/client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi"

export default function RecentProjects() {
    const [currentPage, setCurrentPage] = useState(1)
    const projectsPerPage = 5
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [projectData, setProjectData] = useState<Project[]>([])

    useEffect(() => {
        ;(async () => {
            setLoading(true)
            window.scrollTo({ top: 0, behavior: "smooth" })
            const response = await fetchAllProjects(
                currentPage,
                projectsPerPage
            )
            setProjectData(response.data || [])
            setTotalPages(Math.ceil(response.count! / projectsPerPage))
            setLoading(false)
        })()
    }, [currentPage])

    return !loading ? (
        <>
            <section className="mx-auto p-6 mt-12 md:mt-16 max-w-7xl bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-xl">
                <h2 className="text-4xl font-bold text-center text-gray-900 tracking-wide">
                    Recent Projects
                </h2>
                <p className="text-center text-gray-700 mt-3 text-lg">
                    Explore our completed projects showcasing beautiful interior
                    designs.
                </p>

                <div className="mt-8 flex flex-col items-center gap-12">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="w-full px-8 py-10 bg-white rounded-xl shadow-xl flex flex-col items-center transition-all duration-500 hover:scale-105"
                        >
                            <h3 className="text-3xl font-semibold text-gray-800 mb-5">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 text-center max-w-3xl text-lg leading-relaxed">
                                {project.workDetails}
                            </p>
                            <p className="text-gray-500 text-center mt-2 text-md italic">
                                {project.address}
                            </p>
                            <ImageCarousel images={project.imageUrls} />
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-12">
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md ${
                            currentPage === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                    >
                        Previous
                    </button>
                    <span className="text-gray-800 font-semibold text-xl">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                        className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md ${
                            currentPage === totalPages
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    ) : (
        <Loader className="h-[200vh]" />
    )
}

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    // const carouselRef = useRef<HTMLDivElement>(null)

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="relative w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex items-center">
            <BiLeftArrowCircle
                className="absolute left-[-50px] md:left-[-60px] text-6xl text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:scale-110"
                onClick={prevImage}
            />
            <div className="overflow-hidden rounded-xl shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center bg-gray-200">
                <Image
                    src={images[currentIndex]}
                    alt={`Project Image ${currentIndex + 1}`}
                    width={900}
                    height={600}
                    className="rounded-xl object-cover w-full h-full transition-all duration-700 ease-in-out transform hover:scale-105"
                />
            </div>
            <BiRightArrowCircle
                className="absolute right-[-50px] md:right-[-60px] text-6xl text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-300 transform hover:scale-110"
                onClick={nextImage}
            />
        </div>
    )
}
