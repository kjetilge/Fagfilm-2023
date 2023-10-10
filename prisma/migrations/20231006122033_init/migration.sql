-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL,
    "Lisensbruker" TEXT NOT NULL,
    "skolekode" TEXT NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);
