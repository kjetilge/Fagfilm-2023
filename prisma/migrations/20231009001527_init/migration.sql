/*
  Warnings:

  - The primary key for the `Licence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Licence` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Licence_orgNr_key";

-- AlterTable
ALTER TABLE "Licence" DROP CONSTRAINT "Licence_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Licence_pkey" PRIMARY KEY ("id");
