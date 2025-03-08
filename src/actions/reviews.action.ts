"use server";

import { prismaClient } from "@/utils/prismaClient";

export async function fetchAllReviews(page: number = 1, limit: number = 4) {
    try {
        console.log("Fetching reviews with parameters:", { page, limit });

        if (!page || !limit || isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
            throw new Error("Invalid page or limit parameters. Ensure they are positive numbers.");
        }

        console.log("Checking Prisma client connection...");
        if (!prismaClient) {
            throw new Error("Prisma client is not initialized. Check the prismaClient import.");
        }

        console.log("Fetching reviews from the database...");
        const response = await prismaClient.review.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });

        console.log("Reviews fetched:", response);

        console.log("Counting total reviews...");
        const reviewCount = await prismaClient.review.count();
        console.log("Total review count:", reviewCount);

        return { success: true, data: response ?? [], count: reviewCount };
    } catch (error) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof Error) {
            errorMessage = error.message;
            console.error("🚨 Error fetching reviews:", error.message);
            console.error("🔍 Stack Trace:", error.stack);
        } else {
            console.error("🚨 Unknown error type:", error);
        }

        return { success: false, data: [], error: errorMessage };
    }
}
