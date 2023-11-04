import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import prisma from "@/lib/prisma";

export default async function hasSkolekode () {
  const session = await getServerSession(authOptions);
  if(session?.user) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    })
    const hasSkolekode = user?.skolekode ? true : false
    // Sjekk om lisensen er aktiv
    if(hasSkolekode) {
      return true
    } else {
      return false
    }
  }
}
