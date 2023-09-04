import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import hasSkolekode from "@/lib/hasSkolekode";
import { redirect } from "next/navigation";

export default async function Page() {
  const hasCode = await hasSkolekode();
  if(!await hasSkolekode()) {
    redirect('/skolekode')
  }
  
  const session = await getServerSession(authOptions);
    return (
      <>
        <p>Signed in as {JSON.stringify(session)}</p>
      </>
    )
}