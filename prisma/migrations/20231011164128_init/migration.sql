/*
  Warnings:

  - You are about to drop the column `isGroupLicenseUser` on the `Licence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Licence" DROP COLUMN "isGroupLicenseUser",
ADD COLUMN     "isGroupLicenceUser" BOOLEAN NOT NULL DEFAULT false;
