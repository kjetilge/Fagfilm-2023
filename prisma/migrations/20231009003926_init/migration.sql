/*
  Warnings:

  - Added the required column `lisensbruker` to the `Dublett` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dublett" ADD COLUMN     "lisensbruker" TEXT NOT NULL;
