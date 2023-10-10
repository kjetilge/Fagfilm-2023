/*
  Warnings:

  - You are about to drop the column `eiersOrgnr` on the `Licence` table. All the data in the column will be lost.
  - Added the required column `eiersOrgNr` to the `Licence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Licence" DROP COLUMN "eiersOrgnr",
ADD COLUMN     "eiersOrgNr" INTEGER NOT NULL;
