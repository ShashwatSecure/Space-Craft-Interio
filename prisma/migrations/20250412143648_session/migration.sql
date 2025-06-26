/*
  Warnings:

  - You are about to drop the column `visits` on the `DesignCategory` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `visits` on the `Session` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Session_token_key";

-- AlterTable
ALTER TABLE "DesignCategory" DROP COLUMN "visits";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "token",
DROP COLUMN "visits",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
