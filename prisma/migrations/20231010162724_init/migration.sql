/*
  Warnings:

  - You are about to drop the column `KontaktpersonEpostFraLisens` on the `Licence` table. All the data in the column will be lost.
  - You are about to drop the column `PostmottakEpostFraNSR` on the `Licence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Licence" DROP COLUMN "KontaktpersonEpostFraLisens",
DROP COLUMN "PostmottakEpostFraNSR",
ADD COLUMN     "kontaktpersonEpostFraLisens" TEXT,
ADD COLUMN     "postmottakEpostFraNSR" TEXT,
ALTER COLUMN "postnummer" DROP NOT NULL,
ALTER COLUMN "sted" DROP NOT NULL,
ALTER COLUMN "kontaktperson" DROP NOT NULL,
ALTER COLUMN "lisensEier" DROP NOT NULL,
ALTER COLUMN "ressursnummer" DROP NOT NULL,
ALTER COLUMN "ressursnummer" DROP DEFAULT,
ALTER COLUMN "endUserQuantity" DROP NOT NULL,
ALTER COLUMN "fakturaUrl" DROP NOT NULL;
