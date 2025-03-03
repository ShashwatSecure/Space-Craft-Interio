import { City } from "@/utils/constants"
import { z } from "zod"

export const FreeConsultationSchema = z.object({
    property: z
        .enum(["ONE_BHK", "TWO_BHK", "THREE_BHK", "FOUR_BHK_OR_DUPLEX"])
        .default("ONE_BHK"),
    name: z.string({ required_error: "Name is required!" }),
    city: z
        .enum(City as [string, ...string[]])
        .default("KOLKATA"),
    phoneNumber: z
        .string({ required_error: "Phone Number is required!" })
        .min(10, "Invalid Phone Number"),
        // .regex(new RegExp("^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$")),
    whatsappUpdates: z.boolean().default(false),
    designId: z.number(),
})
