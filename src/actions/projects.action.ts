"use server"

import { prismaClient } from "@/utils/prismaClient"

export async function fetchAllProjects(page: number = 1, limit: number = 5) {
    try {
        const response = await prismaClient.project.findMany({
            skip: (page - 1) * limit,
            take: limit
        })
        const projectCount = await prismaClient.project.count()
        return { success: true, data: response, count: projectCount }
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
}
