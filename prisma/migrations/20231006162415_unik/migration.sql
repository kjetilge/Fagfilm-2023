/*
  Warnings:

  - A unique constraint covering the columns `[skolekode]` on the table `License` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "License_skolekode_key" ON "License"("skolekode");
