import { Licence } from '@prisma/client';
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { PrismaClient } from "@prisma/client";

export const getLicenceInfo = async (): Promise<LicenceInfo> => {

  const info: LicenceInfo = {
    canView: false,
    isExpired: undefined,
    skolekodeMissing: undefined
  }

  const user = await getUser()
  console.log('user', user)
  if (!user) {
    return info
  }
  // user is logged in with feide
  if(user.name) { 
    // todo: check if license is expired. I dag skjer det manuelt i feide admin
    info.canView = true
    return info
  }

  // user is logged in with email and skolekode is missing
  if (!user.skolekode) { 
    info.skolekodeMissing = true
    return info
  }

  // user is logged in with email and skolekode is present
  const license = await getLicence(user.skolekode)
  console.log('license', license)
  if (!license) {
    info.skolekodeMissing = true
    return info
  }
  info.isExpired = isLicenceExpired(license)
  info.canView = !info.isExpired
  
  return info
}

async function getUser () {
  const session = await getServerSession(authOptions)
  if(session?.user?.email) {
    const email = session.user.email
    const foundUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    return foundUser
  }
  return null
}

// create a typed function isLicenceExpired, that takes a Licence and checks if the startDate is more than 1 year ago and returns a boolan
// indicating whether or not the license is valid
export const isLicenceExpired = (license: Licence): boolean => {
  const startDate = new Date(license.startDate)
  const now = new Date()
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  return startDate < oneYearAgo
}


export const getLicence = async (skolekode: string): Promise<Licence | null> => {
  // get the license from the database

  const license = await prisma.licence.findUnique({
    where: {
      skolekode
    }
  });
  // return the license
  return license;
}
