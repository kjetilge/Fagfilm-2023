import { PrismaClient } from '@prisma/client';
import licences from "./lib/licences.json" assert { type: "json" };
import { v4 as uuid } from 'uuid'; 

const prisma = new PrismaClient();


function updateLicences(licences) {
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
      ressursnummer: parseInt(licence.ressursnummer),
      endUserQuantity: parseInt(licence.endUserQuantity),
      orgNr: licence.orgNr === null ? "mangler" : licence.orgNr,
      ressursnummer: licence.ressursnummer === null ? "mangler" : toString(licence.ressursnummer),
      endUserQuantity: 0, // licence.endUserQuantity !== undefined ? parseInt(licence.endUserQuantity) : 0,
      eiersOrgNr: licence.eiersOrgNr === null ? "mangler" : toString(licence.eiersOrgNr),
      skolekode: licence.skolekode === "" ? "mangler_" + small_id : licence.skolekode,
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
      console.error("dublet: ", newLicence.skolekode)
    }
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  export function seedLicenses () {
    seed()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  }