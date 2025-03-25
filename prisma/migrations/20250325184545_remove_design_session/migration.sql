/*
  Warnings:

  - You are about to drop the column `designsId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the `DesignsViewedInSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DesignsViewedInSession" DROP CONSTRAINT "DesignsViewedInSession_designId_fkey";

-- DropForeignKey
ALTER TABLE "DesignsViewedInSession" DROP CONSTRAINT "DesignsViewedInSession_sessionId_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "designsId",
ADD COLUMN     "designCategory" TEXT[];

-- DropTable
DROP TABLE "DesignsViewedInSession";
