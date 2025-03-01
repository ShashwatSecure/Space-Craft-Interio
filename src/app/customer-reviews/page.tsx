"use client";
import { fetchAllReviews } from "@/actions/reviews.action";
import Loader from "@/components/Loader";
import { Review } from "@prisma/client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const ReviewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewData, setReviewData] = useState<Review[]>([])
    const [loading, setLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const reviewsPerPage = 4;

    useEffect(() => {
        ;(async () => {
            setLoading(true)
            window.scrollTo({ top: 0, behavior: "smooth" });
            const response = await fetchAllReviews(currentPage, reviewsPerPage)
            console.log(response)
            setReviewData(response.data || [])
            setTotalPages(Math.ceil(response.count!/reviewsPerPage))
            setLoading(false)
        })()
    }, [currentPage]);

    return (
        !loading ?
        <div className="max-w-4xl mx-auto p-6 mt-12 md:mt-16">
            {/* Page Heading */}
            <h1 className="text-3xl font-semibold text-center text-gray-900">Customer Reviews</h1>
            {/* Subheading */}
            <p className="text-center text-gray-600 mt-2">
                See what our happy customers have to say about our services!
            </p>

            <div className="space-y-6 mt-6">
                {reviewData.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md relative">
                        <p className="text-gray-700 italic">"{review.review}"</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.address}</p>
                        </div>
                        {/* Star Rating */}
                        <div className="mt-4 flex space-x-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-green-500 text-white"}`}
                >
                    Previous
                </button>
                <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={reviewData.length < reviewsPerPage}
                    className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-green-500 text-white"}`}
                >
                    Next
                </button>
            </div>
        </div>
        : <Loader />
    );
};

export default ReviewsPage;