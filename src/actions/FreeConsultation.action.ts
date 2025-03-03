"use server"

import { FreeConsultationSchema } from "@/schemas/FreeConsultation"
import { FreeConsultationEmailTemplateGenerator } from "@/utils/constants"
import { prismaClient } from "@/utils/prismaClient"
import sendEmail from "@/utils/sendEmail"
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
        const design = await prismaClient.design.findFirst({
            where: {
                id: designId
            }
        })
        await sendEmail({to: process.env.ADMIN_EMAIL || "mdrehan9007@gmail.com", html: FreeConsultationEmailTemplateGenerator("admin", name, phoneNumber, design?.title || "random design"), subject: "Request For Consultation"})
        return { success: true, data: null }
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
}