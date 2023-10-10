
import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";
import { redirect } from "next/navigation";
import getUser from "@/lib/getUser";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const FEIDE_API_BASE_URL = 'https://auth.dataporten.no';


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.sub,
          name: profile.name,
        }
      },
    },
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      // console.log(JSON.stringify(session, null, 2))
      // console.log("TOKEN", JSON.stringify(token, null, 2))
      console.log("user", JSON.stringify(user, null, 2))
      let skolekode
      let isFeideUser, canView = false

      if(session.user?.email) {
        const foundUser = await getUser(session.user.email)
        const userId = foundUser?.id
        console.log('userId', userId)
        // console.log('foundUser', foundUser)
        skolekode = "heisann-12345"//foundUser?.skolekode
      }
      // console.log('NY SESSION',JSON.stringify(session, null, 2))
      return {  ...session, skolekode }
    },
  },
  events: {
    // updateUser: async (message) => {  
    //   console.log("updateUser", message)
    // },
    // signOut: async (message) => {
    //   console.log("signOut", message)
    // },
    // createUser: async (message) => {
    //   console.log("createUser", message)
    // },
    signIn: async (message) => {
      // console.log("signIn EVENT")
    }
  },
};