/*
  Warnings:

  - You are about to drop the `License` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "License";

-- CreateTable
CREATE TABLE "Dublett" (
    "id" TEXT NOT NULL,
    "skolekode" TEXT NOT NULL,
    "dublet" TEXT NOT NULL,

    CONSTRAINT "Dublett_pkey" PRIMARY KEY ("id")
);
