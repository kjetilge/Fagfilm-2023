-- CreateTable
CREATE TABLE "Licence" (
    "skolekode" TEXT NOT NULL,
    "lisensbruker" TEXT NOT NULL,
    "postnummer" TEXT NOT NULL,
    "sted" TEXT NOT NULL,
    "orgNr" TEXT NOT NULL,
    "kontaktperson" TEXT NOT NULL,
    "KontaktpersonEpostFraLisens" TEXT NOT NULL,
    "PostmottakEpostFraNSR" TEXT NOT NULL,
    "lisensEier" TEXT NOT NULL,
    "eiersOrgnr" INTEGER NOT NULL,
    "isGroupLicenseUser" BOOLEAN,
    "startDate" TIMESTAMP(3) NOT NULL,
    "ressursnummer" INTEGER NOT NULL,
    "endUserQuantity" INTEGER NOT NULL,
    "fakturaUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Licence_pkey" PRIMARY KEY ("skolekode")
);

-- CreateIndex
CREATE UNIQUE INDEX "Licence_skolekode_key" ON "Licence"("skolekode");
