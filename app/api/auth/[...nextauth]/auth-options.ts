
import NextAuth, { NextAuthOptions } from "next-auth"
import prisma from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";
import { redirect } from "next/navigation";
import getUser from "@/lib/getUser";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Profiler } from "react";


const FEIDE_API_BASE_URL = 'https://auth.dataporten.no';

type FeideProfile = {
  sub: string
  name: string
}

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: "feide",
      name: "Feide",
      type: "oauth",
      wellKnown: `${FEIDE_API_BASE_URL}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid email profile" } },

      token: `${FEIDE_API_BASE_URL}/oauth/token`,
      userinfo: `${FEIDE_API_BASE_URL}/v2/user/me`,
      clientId: process.env.FEIDE_ID,
      clientSecret: process.env.FEIDE_SECRET,
      profile(profile: FeideProfile) {
        return {
          id: profile.sub,
          email: profile.sub,
          name: profile.name,
        }
      },
    }
  ],
}