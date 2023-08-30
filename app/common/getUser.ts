import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"
import { get } from "http";

const prisma = new PrismaClient();

// should receive a session object from protected pages
const getUser = async () => {
  'use server'
  const session = await getServerSession(authOptions)
  console.log('session', session) 
  if(!session) return session

  const email = session?.user?.email as string

  const foundUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  //console.log('foundUser', foundUser)
  return foundUser
}

export default getUser