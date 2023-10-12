'use server'
import { PrismaClient, Licence } from '@prisma/client';
import licences from "./licences.json" assert { type: "json" };

import { uuid } from 'uuidv4';
const prisma = new PrismaClient();


function updateLicences(licences: License[]) {
  let orgNr
  const unique_id = uuid(); 
  const small_id = unique_id.slice(0,8)

  const updatedLicences = licences.map((licence) => {
    if (typeof licence.startDate === "string" && licence.startDate !== "") {
      licence.startDate = new Date(licence.startDate);
    } else {
      licence.startDate = new Date("1970-01-01");
    }
    return {
      ...licence,
      startDate: licence.startDate.toISOString(),
      postnummer: licence.postnummer === null ? "" : licence.postnummer.toString(),
      // ressursnummer: parseInt(licence.ressursnummer),
      // endUserQuantity: parseInt(licence.endUserQuantity),
      lisenseier: licence.lisenseier === null ? "mangler" : licence.lisenseier.toString(),
      orgNr: licence.orgNr === null ? "mangler" : licence.orgNr.toString(),
      ressursnummer: licence.ressursnummer === null ? "mangler" : licence.ressursnummer.toString(),
      endUserQuantity: licence.endUserQuantity !== undefined ? parseInt(licence.endUserQuantity) : 0,
      eiersOrgNr: licence.eiersOrgNr === null ? "mangler" : licence.eiersOrgNr.toString(),
      skolekode: licence.skolekode === null ? "mangler_" + small_id : licence.skolekode,
      isGroupLicenceUser: licence.isGroupLicenceUser === "true" ? true : false,
    };
  });
  return updatedLicences;
}


async function seed() {
  const updatedLicences = updateLicences(licences)
  console.log(updatedLicences);

  for (const licence of updatedLicences) {
    try {
      await prisma.licence.create({
        data: licence,
      });
    } catch (e) {

      const unique_id = uuid(); 
      const small_id = unique_id.slice(0,8)
      const newLicence ={
        ...licence,
        skolekode: licence.skolekode + "_er_dublet_" + small_id
      }
      await prisma.licence.create({
        data: newLicence,
      });

      await prisma.dublett.create({
        data: {
          skolekode: licence.skolekode,
          dublet: newLicence.skolekode,
          lisensbruker: licence.lisensbruker,
        }
      });
      console.error("dublet: ", newLicence.skolekode, e)
    }
  }
}


export async function seedLicences () {
  seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
}