/*
  Warnings:

  - You are about to drop the column `lisensEier` on the `Licence` table. All the data in the column will be lost.
  - Added the required column `lisenseier` to the `Licence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Licence" DROP COLUMN "lisensEier",
ADD COLUMN     "lisenseier" TEXT NOT NULL;
