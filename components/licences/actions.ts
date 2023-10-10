'use server'
// import 'server-only'

import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
import prisma from "@/lib/prisma";

// to seed add this to package json: && node ./seed.mjs

export async function getLicences(searchTerm: string): Promise<Licence[]> {
  const licences = await prisma.licence.findMany({
    where: {
      OR: [
        { lisensbruker: { contains: searchTerm } },
        { lisensEier: { contains: searchTerm } },
        { skolekode: { contains: searchTerm } },
        { orgNr: { contains: searchTerm } },
        { eiersOrgNr: { contains: searchTerm } },
      ],
    },
  });
  return licences;
}

export async function updateLicence() {}

export async function createLicence(prevState: any, formData: FormData) {
  console.log('createLicence', formData);
  try {
    const licence = await prisma.licence.create({
      data: {
        skolekode: formData.get('skolekode') as string,
        lisensbruker: formData.get('lisensbruker') as string,
        postnummer: formData.get('postnummer') as string,
        sted: formData.get('sted') as string,
        orgNr: formData.get('orgNr') as string,
        kontaktperson: formData.get('kontaktperson') as string,
        KontaktpersonEpostFraLisens: formData.get('KontaktpersonEpostFraLisens') as string,
        PostmottakEpostFraNSR: formData.get('PostmottakEpostFraNSR') as string,
        lisensEier: formData.get('lisensEier') as string,
        eiersOrgNr: formData.get('eiersOrgnr') as string,
        isGroupLicenseUser: formData.get('isGroupLicenseUser') === 'true',
        startDate: new Date(formData.get('startDate') as string),
        ressursnummer: formData.get('ressursnummer') as string,
        endUserQuantity: parseInt(formData.get('endUserQuantity') as string),
        fakturaUrl: formData.get('fakturaUrl') as string,
      },
    });
    console.log(licence);
  } catch (e) {
    console.log(e)
    return { message: `Lagring gikk galt: ${JSON.stringify(e)}` };
  }
  revalidateTag('licences')
  // revalidatePath('/admin/lisenser');
  redirect(`/admin/lisenser`)
}
