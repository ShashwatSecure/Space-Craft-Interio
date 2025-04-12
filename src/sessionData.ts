import { faker } from "@faker-js/faker"
import { Prisma, Property } from "@prisma/client"
import { City, Designs } from "./utils/constants";

function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  
    // Get timestamps and generate a random time in between
    const startTime = new Date("2024-01-01T00:00:00").getTime();
    const endTime = new Date().getTime();
  
    if (startTime > endTime) {
      throw new Error("start date must be before end date");
    }
  
    const randomTime = startTime + Math.random() * (endTime - startTime);
    return new Date(randomTime);
  }
  

const createRandomSessions = (): Prisma.SessionCreateInput => {

    return (
        {
            city: City[generateRandomNumber(0, City.length-1)],
            latitude: faker.location.latitude().toString(),
            longitude: faker.location.longitude().toString(),
            createdAt: getRandomDate()
        }
    )
}

const createRandomDesignCategory = (): { design: string, sessionId: number } => {
    return ({
        design: Designs[generateRandomNumber(0, Designs.length - 1)],
        sessionId: generateRandomNumber(40, 1999)
    })
}

export const randomSessions = faker.helpers.multiple(createRandomSessions, { count: 2000 })
export const randomSessionsDesignCategory = faker.helpers.multiple(createRandomDesignCategory, { count: 2000 })