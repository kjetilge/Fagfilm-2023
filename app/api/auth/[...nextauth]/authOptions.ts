
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";
import { redirect } from "next/navigation";
import getUser from "@/lib/getUser";

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
    // async signIn({ user, account, profile, email, credentials }) {
    //   // console.log("signIn USER", user)
    //   // console.log("signIn ACCOUNT", account)
    //   // console.log("signIn PROFILE", profile)
    //   // console.log("signIn EMAIL", email)
    //   // console.log("signIn CREDENTIALS", credentials)
    //   if (email?.verificationRequest) {
    //     console.log("******************** is verificationRequest\n")
    //     return true
    //   }
    //   const userEmail = email?.toLowerCase()
    //   const foundUser = await getUser(user.email || "")
    //   if (!foundUser?.skolekode) {
    //     return '/skolekode'
    //   }
    //   console.log("foundUser", foundUser)
    //   console.log("-----------------------\n")
    //   return true
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
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
    }
  },
};