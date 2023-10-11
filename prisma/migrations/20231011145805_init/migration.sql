/*
  Warnings:

  - Made the column `lisensEier` on table `Licence` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isGroupLicenseUser` on table `Licence` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Licence" ALTER COLUMN "lisensEier" SET NOT NULL,
ALTER COLUMN "isGroupLicenseUser" SET NOT NULL,
ALTER COLUMN "isGroupLicenseUser" SET DEFAULT false;
