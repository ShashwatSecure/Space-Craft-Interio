import { City } from "@/utils/constants"
import { z } from "zod"

export const FreeConsultationSchema = z.object({
    property: z
        .enum(["ONE_BHK", "TWO_BHK", "THREE_BHK", "FOUR_BHK_OR_DUPLEX"])
        .default("ONE_BHK"),
    name: z.string({ required_error: "Name is required!" }),
    city: z.enum(City as [string, ...string[]]).default("KOLKATA"),
    phoneNumber: z
        .string({ required_error: "Phone Number is required!" })
        .length(10, "Invalid Phone Number")
        .regex(new RegExp("^[6789]\\d{9}$")),
    whatsappUpdates: z.boolean().default(false),
    designId: z.number(),
})
