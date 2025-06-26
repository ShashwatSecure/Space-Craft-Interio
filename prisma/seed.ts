import { projectData } from "../src/projectData"
import { data, data2 } from "../src/data"
import { PrismaClient } from "@prisma/client"
import { reviewData } from "../src/reviewData"
import { freeConsultations } from "../src/consultationData"
import { guides } from "../src/guideData"
import { randomSessions, randomSessionsDesignCategory } from "../src/sessionData"
const prisma = new PrismaClient()
async function main() {
    /*
        Only seed those tables which dont have any values.
        And write all the dependent tables in then block
    */

    // const designCount = await prisma.design.count()
    // const projectCount = await prisma.project.count()
    // const reviewCount = await prisma.review.count()
    // const guideCount = await prisma.guide.count()
    // const consultationCount = await prisma.freeDesignConsultation.count()

    // await new Promise((res, rej) => {
        // if (projectCount == 0)
        //     projectData.map(async (data) => {
        //         await prisma.project.create({
        //             data: { ...data },
        //         })
        //     })

        // if (reviewCount == 0)
        //     reviewData.map(async (data) => {
        //         await prisma.review.create({
        //             data: data,
        //         })
        //     })

        // if (guideCount == 0)
        //     guides.map(async (guide) => {
        //         await prisma.guide.create({
        //             data: {
        //                 title: guide.title,
        //                 description: guide.description,
        //                 GuideContent: {
        //                     createMany: {
        //                         data: guide.content,
        //                     },
        //                 },
        //             },
        //         })
        //     })
        // if (designCount == 0) {
            data2.map((d) => {
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
        // }
        // await prisma.session.createMany({
        //     data: randomSessions
        // })
        // await prisma.designCategory.createMany({
        //     data: randomSessionsDesignCategory
        // })
    // })
    // .then(() => {
    //     if (consultationCount == 0)
    //         freeConsultations.map(async (consultation) => {
    //             await prisma.freeDesignConsultation.create({
    //                 data: consultation,
    //                 include: { Design: true },
    //             })
    //         })
    // })
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
