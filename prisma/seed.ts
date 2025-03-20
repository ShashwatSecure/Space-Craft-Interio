import { projectData } from "../src/projectData"
import { data } from "../src/data"
import { PrismaClient } from "@prisma/client"
import { reviewData } from "../src/reviewData"
import { freeConsultations } from "../src/consultationData"
const prisma = new PrismaClient()
async function main() {
    data.map((d) => {
        const category = d.title
        d.items.map(async (item) => {
            await prisma.design.create({
                data: {
                    Category: category,
                    title: item.title,
                    imageUrl: item.imageUrl,
                },
            })
        })
    })
    projectData.map(async (data) => {
        await prisma.project.create({
            data: { ...data },
        })
    })
    reviewData.map(async (data) => {
        await prisma.review.create({
            data: data,
        })
    })
    freeConsultations.map(async (consultation) => {
        await prisma.freeDesignConsultation.create({
            data: consultation,
            include: { Design: true },
        })
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
