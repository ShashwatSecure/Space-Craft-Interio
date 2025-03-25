/*
  Warnings:

  - You are about to drop the column `designCategory` on the `Session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "designCategory";

-- CreateTable
CREATE TABLE "DesignCategory" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "DesignCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DesignCategory_id_key" ON "DesignCategory"("id");

-- AddForeignKey
ALTER TABLE "DesignCategory" ADD CONSTRAINT "DesignCategory_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
