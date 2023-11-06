const Konto = () => {
  return (
    <div>Konto 3</div>
  )
}

export default Konto

// import React from 'react'
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "../../../lib/prisma"
// import getUser from "../../../lib/getUser"
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "../../api/auth/[...nextauth]/authOptions"
// import { signOut } from "next-auth/react"
// import { getLicenceInfo } from "@/lib/licenceUtils"

// const adapter = PrismaAdapter(prisma)

// export default async function Home() {
//   const query = prisma.user.update(
//     {
//       where: {
//         email: 'sfdg',
//       },
//       data: {
//         skolekode: "kode",
//       },
//       select: {
//         email: true,
//         skolekode: true,
//       },
//     }
//     )

//   const session = await getServerSession(authOptions)
//   const lInfo= await getLicenceInfo()
//   return (
//     <div>
//       <h1>Konto</h1>
//       <p>{JSON.stringify(lInfo)}</p>
//       <p>..</p>
//       <p>Her kan du slette din konto. Hvis du sletter den vil du ikke lenger kunne se fagfilm.</p>
//       <p>Vi vil ikke lagre noen informasjon om deg etter at du har slettet kontoen din.</p>
//       <p>Vi vil heller ikke lagre informasjon om deg hvis du ikke logger inn på kontoen din i løpet av 6 måneder.</p>
//       <p>Du kan enket melde deg på igjen med en gyldig skolekode</p>
//       <br />
//     </div>
//   )
//   // const user = await getUser()
//   // const session = await getServerSession(authOptions)
  
//   // // delete account
//   // async function deleteAccount() {
//   //   'use server'
//   //   const foundUser = await getUser()
//   //   console.log(foundUser)
//   //   try {
//   //     const res = await prisma.user.delete({
//   //       where: {
//   //         email: foundUser?.email as string
//   //       }
//   //     })
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   //   // signOut() // {redirect: false}
//   // }

//   // if(!user) {
//   //   return (
//   //     <div className="z-10 w-full max-w-xl px-5 xl:px-0">
//   //       <p>Logg inn for å se denne siden. User:{JSON.stringify(user)}</p>
//   //     </div>
//   //   )
//   // } else {
//   //   return (
//   //     <div>
//   //       <h1>Konto</h1>
//   //       <p>Her kan du slette din konto. Hvis du sletter den vil du ikke lenger kunne se fagfilm.</p>
//   //       <p>Vi vil ikke lagre noen informasjon om deg etter at du har slettet kontoen din.</p>
//   //       <p>Vi vil heller ikke lagre informasjon om deg hvis du ikke logger inn på kontoen din i løpet av 6 måneder.</p>
//   //       <p>Du kan enket melde deg på igjen med en gyldig skolekode</p>
//   //       <br />
  
//   //       <form action={deleteAccount}>
//   //       <p>Slett din bruker: {user?.email} ?</p>
//   //       <button type="submit">Ja, slett nå</button>
//   //     </form>
//   //     </div>
//   //   )
//   // }
// }