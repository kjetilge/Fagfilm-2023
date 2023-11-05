import React from 'react'
import Link from 'next/link'

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import { redirect } from 'next/navigation'


const IkkeLoggetInn = async () => {

  // const session = await getServerSession(authOptions)

  // if (session) {
  //  //  return <IkkeLoggetInn />
  //  redirect("/filmkatalog")
  // }

  return (
    <div className="mx-9">
      <h1 className="text-4xl pb-3">
        Du er ikke logget inn
      </h1>
      <p>Du må være innlogget for å se fagfilm. Vi jobber med å implementere 
        epost-innlogging med skolekode på de nye sidene. Dersom skolen ikke har 
        registrert <Link className="underline hover:text-sky-700" href="https://www.feide.no/innforing-av-feide">fagfilm-innlogging hos Feide</Link> kan du logge deg inn på{" "}
        <Link className="underline hover:text-sky-700" href="https://www.fagfilm.no">de gamle sidene</Link></p>
    </div>
  )
}

export default IkkeLoggetInn