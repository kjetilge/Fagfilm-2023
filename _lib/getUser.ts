import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../app/api/auth/[...nextauth]/authOptions"
import { get } from "http";
import { useSession } from "next-auth/react"

const prisma = new PrismaClient();

// should receive a session object from protected pages

export const getUser = async (email: string) => {

  'use server'
  const foundUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  //console.log('foundUser', foundUser)
  return foundUser
}