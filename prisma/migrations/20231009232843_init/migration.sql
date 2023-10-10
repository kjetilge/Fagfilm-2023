/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Licence` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Licence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Licence" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
