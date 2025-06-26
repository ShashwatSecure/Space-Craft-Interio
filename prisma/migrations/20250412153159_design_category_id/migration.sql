/*
  Warnings:

  - The primary key for the `DesignCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `DesignCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DesignCategory" DROP CONSTRAINT "DesignCategory_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "DesignCategory_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "DesignCategory_id_key" ON "DesignCategory"("id");
