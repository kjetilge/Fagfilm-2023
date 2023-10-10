/*
  Warnings:

  - The primary key for the `License` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `License` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "License" DROP CONSTRAINT "License_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "License_pkey" PRIMARY KEY ("skolekode");
