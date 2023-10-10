/*
  Warnings:

  - You are about to drop the column `Lisensbruker` on the `License` table. All the data in the column will be lost.
  - You are about to drop the column `StartDate` on the `License` table. All the data in the column will be lost.
  - Added the required column `lisensbruker` to the `License` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `License` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "License" DROP COLUMN "Lisensbruker",
DROP COLUMN "StartDate",
ADD COLUMN     "lisensbruker" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
