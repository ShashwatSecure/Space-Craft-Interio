import { faker } from "@faker-js/faker"
import { City, Prisma, Property } from "@prisma/client"

function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createRandomConsultation = (): Prisma.FreeDesignConsultationCreateInput => {

    const city = Object.keys(City)[generateRandomNumber(0, 11)] as City
    const property = Object.keys(Property)[generateRandomNumber(0, 3)] as Property
    const designId = generateRandomNumber(1, 100)
    const whatsappUpdates = generateRandomNumber(0, 1)

    return (
        {
            name: faker.person.fullName(),
            city,
            Design: {
                connect: {
                    id: designId
                }
            },
            phoneNumber: faker.phone.number(),
            property,
            whatsappUpdates: whatsappUpdates === 1 ? true : false
        }
    )
}

export const freeConsultations = faker.helpers.multiple(createRandomConsultation, { count: 20 })