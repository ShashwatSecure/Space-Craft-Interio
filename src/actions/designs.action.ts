"use server"

import { prismaClient } from "@/utils/prismaClient"
import { Design, Prisma } from "@prisma/client"

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

export async function fetchAllDesigns() {
    
    try {
        const categories = await prismaClient.design.groupBy({
            by: ['Category'],
        })

        const allDesigns: Array<{category: string; items: Array<{ id: number, title: string, imageUrl: string }>}> = []
        for(let category of categories) {
            const response = await prismaClient.design.findMany({ where: { Category: category.Category }, select: { id: true, imageUrl: true, title: true } })
            allDesigns.push({ category: category.Category, items: response })
        }

        return { success: true, data: allDesigns || [] }
    } catch (error) {
        console.error(error)
        return { success: false, data: [] }
    }
}