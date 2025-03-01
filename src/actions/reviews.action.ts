"use server"

import { prismaClient } from "@/utils/prismaClient"

export async function fetchAllReviews(page: number = 1, limit: number = 4) {
    try {
        const response = await prismaClient.review.findMany({
            skip: (page - 1) * limit,
            take: limit,
        })
        const reviewCount = await prismaClient.review.count()

        return { success: true, data: response, count: reviewCount }
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
}
