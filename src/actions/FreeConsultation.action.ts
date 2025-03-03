"use server"

import { FreeConsultationSchema } from "@/schemas/FreeConsultation"
import { prismaClient } from "@/utils/prismaClient"
import { City, Property } from "@prisma/client"
import { z } from "zod"

export const addFreeConsultation = async ({ city, designId, name, phoneNumber, property, whatsappUpdates }: z.infer<typeof FreeConsultationSchema>) => {
    try {
        await prismaClient.freeDesignConsultation.create({
            data: {
                name,
                city: city as City,
                phoneNumber,
                property: property as Property,
                whatsappUpdates,
                designId
            }
        })
        return { success: true, data: null }
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
}