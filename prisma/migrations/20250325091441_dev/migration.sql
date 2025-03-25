/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Design` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 1,
    "designsId" INTEGER[],

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignsViewedInSession" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "designId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "DesignsViewedInSession_id_key" ON "DesignsViewedInSession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Design_title_key" ON "Design"("title");

-- AddForeignKey
ALTER TABLE "DesignsViewedInSession" ADD CONSTRAINT "DesignsViewedInSession_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignsViewedInSession" ADD CONSTRAINT "DesignsViewedInSession_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
