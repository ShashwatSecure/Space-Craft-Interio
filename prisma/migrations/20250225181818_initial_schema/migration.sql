-- CreateEnum
CREATE TYPE "Property" AS ENUM ('ONE_BHK', 'TWO_BHK', 'THREE_BHK', 'FOUR_BHK_OR_DUPLEX');

-- CreateEnum
CREATE TYPE "City" AS ENUM ('DELHI', 'MUMBAI', 'BANGALORE', 'HYDERABAD', 'CHENNAI', 'KOLKATA', 'PUNE', 'JAIPUR', 'AHMEDABAD', 'LUCKNOW', 'CHANDIGARH', 'KOCHI', 'INDORE', 'BHOPAL', 'VISAKHAPATNAM', 'SURAT', 'GUWAHATI', 'PATNA', 'BHUBANESWAR', 'VARANASI', 'OTHERS');

-- CreateTable
CREATE TABLE "FreeDesignConsultation" (
    "id" SERIAL NOT NULL,
    "property" "Property" NOT NULL,
    "city" "City" NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "isConsultationDone" BOOLEAN NOT NULL DEFAULT false,
    "whatsappUpdates" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FreeDesignConsultation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FreeDesignConsultation_id_key" ON "FreeDesignConsultation"("id");
