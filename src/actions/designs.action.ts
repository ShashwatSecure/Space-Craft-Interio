"use server"

import { prismaClient } from "@/utils/prismaClient"

export async function fetchDesignsByCategory(category: string) {
    
    try {
        const response = await prismaClient.design.findMany({
            where: {
                Category: {
                    equals: category.replaceAll("-", " "),
                    mode: "insensitive"
                }
            }
        })
        return { success: true, data: response || [] }
    } catch (error) {
        console.error(error)
        return { success: false, data: [] }
    }
}