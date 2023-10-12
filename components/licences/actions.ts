'use server'
// import 'server-only'

import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
import prisma from "@/lib/prisma";
import { z } from 'zod'

// to seed add this to package json: && node ./seed.mjs

export async function getLicences() {
  const licences = await prisma.licence.findMany();
  return licences;
}

export async function updateLicence(formData: FormData) {
  console.log('updateLicence', formData);
  try {
    const licence = await prisma.licence.update({
      where: {
        id: formData.get('licenceId') as string,
      },
      data: {
        id: formData.get('licenceId') as string,
        skolekode: formData.get('skolekode') as string,
        lisensbruker: formData.get('lisensbruker') as string,
        postnummer: formData.get('postnummer') as string,
        sted: formData.get('sted') as string,
        orgNr: formData.get('orgNr') as string,
        kontaktperson: formData.get('kontaktperson') as string,
        kontaktpersonEpostFraLisens: formData.get('KontaktpersonEpostFraLisens') as string,
        postmottakEpostFraNSR: formData.get('PostmottakEpostFraNSR') as string,
        lisenseier: formData.get('lisensEier') as string,
        eiersOrgNr: formData.get('eiersOrgnr') as string,
        isGroupLicenceUser: formData.get('isGroupLicenseUser') === 'true',
        startDate: new Date(formData.get('startDate') as string),
        ressursnummer: formData.get('ressursnummer') as string,
        endUserQuantity: parseInt(formData.get('endUserQuantity') as string),
        fakturaUrl: formData.get('fakturaUrl') as string,
      },
    });
    console.log(licence);
    return revalidateTag('licences')
  } catch (e) {
    console.log(e)
    return { message: `Lagring gikk galt: ${JSON.stringify(e)}` };
  }

}

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
        kontaktpersonEpostFraLisens: formData.get('KontaktpersonEpostFraLisens') as string,
        postmottakEpostFraNSR: formData.get('PostmottakEpostFraNSR') as string,
        lisenseier: formData.get('lisensEier') as string,
        eiersOrgNr: formData.get('eiersOrgnr') as string,
        isGroupLicenceUser: formData.get('isGroupLicenseUser') === 'true',
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

export async function deleteLicence(formData: FormData) {
  console.log('formData ->', formData)
  const licenceId = formData.get('licenceId')
  console.log('licenceId ->', licenceId)
  try {
    const licence = await prisma.licence.delete({
      where: {
        id: licenceId
      }
    })
    console.log(licence)
    return revalidateTag('licences')
  } catch (e) {
    console.log(e)
    return { message: `Sletting gikk galt: ${JSON.stringify(e)}` } 
  }
}