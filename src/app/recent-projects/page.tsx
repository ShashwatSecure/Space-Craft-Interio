"use client"

import { fetchAllProjects } from "@/actions/projects.action"
import ImageCarousel from "@/components/ImageCarousel"
import Loader from "@/components/Loader"
import { Project } from "@prisma/client"
import { useState, useEffect } from "react"

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
            <section className="mx-auto p-6 mt-12 md:mt-16 max-w-full animate-animate-appear">
                <h2 className="text-4xl font-bold text-center text-gray-900 tracking-wide">
                    Recent Projects
                </h2>
                <p className="text-center text-gray-700 mt-3 text-lg">
                    Explore our completed projects showcasing beautiful interior
                    designs.
                </p>

                <div className="mt-1 mb-6 flex flex-col items-center gap-6">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="w-full px-2 py-2 bg-white rounded-xl flex flex-col items-center transition-all duration-500"
                        >
                            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 text-center max-w-3xl text-lg leading-relaxed">
                                {project.workDetails}
                            </p>
                            <p className="text-gray-500 text-center mt-2 mb-2 text-md italic">
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