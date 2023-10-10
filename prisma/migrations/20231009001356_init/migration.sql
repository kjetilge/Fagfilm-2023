/*
  Warnings:

  - The primary key for the `Licence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[orgNr]` on the table `Licence` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Licence_skolekode_key";

-- AlterTable
ALTER TABLE "Licence" DROP CONSTRAINT "Licence_pkey",
ADD CONSTRAINT "Licence_pkey" PRIMARY KEY ("orgNr");

-- CreateIndex
CREATE UNIQUE INDEX "Licence_orgNr_key" ON "Licence"("orgNr");
