
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "_lib/prisma";
import EmailProvider from "next-auth/providers/email";
<<<<<<< HEAD
=======
import { redirect } from "next/navigation";
import getUser from "@/lib/getUser";

>>>>>>> preview
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
          name: profile.name
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
<<<<<<< HEAD
      // Send properties to the client, like an access_token and user id from a provider.
      // const skolekode = user?.skolekode
      // session.skole = token.accessToken
      console.log(JSON.stringify(session, null, 2))
      return session
    }
  },
  events: {
    updateUser: async (message) => {  
      console.log("updateUser", message)
=======
      console.log(JSON.stringify(session, null, 2))
      if(session.user?.email) {
        const foundUser = await getUser(session.user.email)
        // console.log('foundUser', foundUser)
        session.user.skolekode = foundUser?.skolekode
      }
      console.log('NY SESSION',JSON.stringify(session, null, 2))
      return session
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
      console.log("signIn EVENT")
>>>>>>> preview
    }
  },
};