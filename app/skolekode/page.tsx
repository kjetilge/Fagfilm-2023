import React from 'react'
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../lib/prisma"
import getUser from "../../lib/getUser"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"
import { signOut } from "next-auth/react"

const adapter = PrismaAdapter(prisma)

export default async function Home() {
  const user = await getUser()
  const session = await getServerSession(authOptions)
  

  async function deleteAccount() {
    'use server'
    const foundUser = await getUser()
    console.log(foundUser)
    try {
      const res = await prisma.user.delete({
        where: {
          email: foundUser?.email as string
        }
      })
    } catch (error) {
      console.log(error)
    }
    // signOut() // {redirect: false}
  }

  // update user with skolekode
  // async function updateSkolekode() {
  //   'use server'
  //   const foundUser = await getUser()
  //   console.log(foundUser)
  //   try { 
  //     const res = await prisma.user.update({
  //       where: {
  //         email: foundUser?.email as string
  //       },
  //       data: {
  //         skolekode: 'test'
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  if(!user) {
    return (
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <p>Logg inn for å se denne siden. User:{JSON.stringify(user)}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Nesten der...</h1>
        <p>Nå er det bare å taste inn skolekoden</p>

        <br />
  
        <form action={deleteAccount}>
        
        <button type="submit">OK</button>
        </form>
      </div>
    )
  }
}