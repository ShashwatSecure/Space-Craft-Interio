"use server";

import { prismaClient } from "@/utils/prismaClient";

export async function fetchAllProjects(page: number = 1, limit: number = 5) {
    try {
        console.log("Fetching projects with parameters:", { page, limit });

        if (!page || !limit || isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
            throw new Error("Invalid page or limit parameters. Ensure they are positive numbers.");
        }

        console.log("Checking Prisma client connection...");
        if (!prismaClient) {
            throw new Error("Prisma client is not initialized. Check the prismaClient import.");
        }

        console.log("Fetching projects from the database...");
        const response = await prismaClient.project.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });

        console.log("Projects fetched:", response);

        console.log("Counting total projects...");
        const projectCount = await prismaClient.project.count();
        console.log("Total projects count:", projectCount);

        return { success: true, data: response ?? [], count: projectCount };
    } catch (error) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof Error) {
            errorMessage = error.message;
            console.error("🚨 Error fetching projects:", error.message);
            console.error("🔍 Stack Trace:", error.stack);
        } else {
            console.error("🚨 Unknown error type:", error);
        }

        return { success: false, data: [], error: errorMessage };
    }
}
