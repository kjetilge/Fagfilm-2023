/*
  Warnings:

  - A unique constraint covering the columns `[skolekode]` on the table `Licence` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Licence_skolekode_key" ON "Licence"("skolekode");
