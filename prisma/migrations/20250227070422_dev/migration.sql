/*
  Warnings:

  - Added the required column `designId` to the `FreeDesignConsultation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FreeDesignConsultation" ADD COLUMN     "designId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Design" (
    "id" SERIAL NOT NULL,
    "Category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Design_id_key" ON "Design"("id");

-- AddForeignKey
ALTER TABLE "FreeDesignConsultation" ADD CONSTRAINT "FreeDesignConsultation_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
