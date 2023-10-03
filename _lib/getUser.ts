import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../app/api/auth/[...nextauth]/authOptions"
import { get } from "http";
import { useSession } from "next-auth/react"

const prisma = new PrismaClient();

// should receive a session object from protected pages
<<<<<<<< HEAD:_lib/prismaQueries.ts
export const getUser = async () => {
========
const getUser = async (email: string) => {
>>>>>>>> preview:_lib/getUser.ts
  'use server'
  const foundUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  //console.log('foundUser', foundUser)
  return foundUser
}