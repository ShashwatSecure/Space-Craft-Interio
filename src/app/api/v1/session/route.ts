import { prismaClient } from "@/utils/prismaClient"
import { cookies } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"
import { z } from "zod"

const sessionCreateSchema = z.object({
    city: z.string().min(1, "City is required!"),
    latitude: z.number().min(1, "Latitude is required!"),
    longitude: z.number().min(1, "Longitude is required!"),
})

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const parsedBody = sessionCreateSchema.parse(body)

        const session = await prismaClient.session.create({
            data: {
                city: parsedBody.city,
                latitude: parsedBody.latitude.toString(),
                longitude: parsedBody.longitude.toString(),
            },
        })

        const cookieStore = await cookies()
        cookieStore.set("sessionToken", session.token)
        return NextResponse.json(
            { success: true, sessionToken: session.token },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500 }
        )
    }
}

export const GET = async () => {
    try {
        const cookieStore = await cookies()
        const token = cookieStore.get("sessionToken")?.value

        if (!token)
            return NextResponse.json(
                { success: false, message: "No token found" },
                { status: 400 }
            )

        const session = await prismaClient.session.findFirst({
            where: { token },
        })
        if (!session)
            return NextResponse.json(
                { success: false, message: "No session found" },
                { status: 404 }
            )

        return NextResponse.json(
            { success: true, message: "Visits incremented" },
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500 }
        )
    }
}

export const PUT = async (req: NextRequest) => {
    try {
        const cookieStore = await cookies()
        const token = cookieStore.get("sessionToken")?.value

        if (!token)
            return NextResponse.json(
                { success: false, message: "No token found" },
                { status: 400 }
            )

        const body = await req.json()

        const session = await prismaClient.session.findFirst({
            where: { token },
        })
        if (!session)
            return NextResponse.json(
                { success: false, message: "No session found" },
                { status: 404 }
            )

        if (!body.designCategory)
            return NextResponse.json(
                { success: false, message: "No design given" },
                { status: 400 }
            )

        const isCategoryThere = await prismaClient.design.findFirst({
            where: {
                Category: {
                    equals: body.designCategory.replaceAll("-", " "),
                    mode: "insensitive",
                },
            },
        })
        if (!isCategoryThere)
            return NextResponse.json(
                { success: false, message: "No such category found" },
                { status: 404 }
            )

        const isSessionDesignCategoryThere =
            await prismaClient.designCategory.findFirst({
                where: {
                    AND: [
                        { sessionId: session.id },
                        { design: body.designCategory },
                    ],
                },
            })

        if (!isSessionDesignCategoryThere)
            await prismaClient.designCategory.create({
                data: {
                    design: body.designCategory,
                    sessionId: session.id
                }
            })

        return NextResponse.json(
            { success: true, message: "Updated the session!" },
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500 }
        )
    }
}
