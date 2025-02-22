"use client";
import { useState } from "react";
import { reviewData } from "@/reviewData";

const ReviewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;

    const totalPages = Math.ceil(reviewData.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const selectedReviews = reviewData.slice(startIndex, startIndex + reviewsPerPage);

    return (
        <div className="max-w-4xl mx-auto p-6 mt-12 md:mt-16">
            {/* Page Heading */}
            <h1 className="text-3xl font-semibold text-center text-gray-900">Customer Reviews</h1>
            {/* Subheading */}
            <p className="text-center text-gray-600 mt-2">
                See what our happy customers have to say about our services!
            </p>

            <div className="space-y-6 mt-6 ">
                {selectedReviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"{review.review}"</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.address}</p>
                        </div>
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
                <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-green-500 text-white"}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ReviewsPage;
