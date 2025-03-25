/*
  Warnings:

  - The primary key for the `DesignCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DesignCategory` table. All the data in the column will be lost.
  - Added the required column `design` to the `DesignCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DesignCategory_id_key";

-- AlterTable
ALTER TABLE "DesignCategory" DROP CONSTRAINT "DesignCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "design" TEXT NOT NULL,
ADD CONSTRAINT "DesignCategory_pkey" PRIMARY KEY ("sessionId", "design");
