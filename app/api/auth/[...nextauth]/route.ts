import NextAuth from "next-auth";
import { authOptions }from "./authOptions";

// const FEIDE_API_BASE_URL = 'https://auth.dataporten.no';


// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     {
//       id: "feide",
//       name: "Feide",
//       type: "oauth",
//       wellKnown: `${FEIDE_API_BASE_URL}/.well-known/openid-configuration`,
//       authorization: { params: { scope: "openid email profile" } },

//       token: `${FEIDE_API_BASE_URL}/oauth/token`,
//       userinfo: `${FEIDE_API_BASE_URL}/v2/user/me`,
//       clientId: process.env.FEIDE_ID,
//       clientSecret: process.env.FEIDE_SECRET,
//       profile(profile) {
//         console.log('********************************** profile', profile.name)
//         return {
//           id: profile.sub,
//           email: profile.sub,
//           name: profile.name
//         }
//       },
//     },
//     EmailProvider({
//       server: {
//         host: process.env.EMAIL_SERVER_HOST,
//         port: Number(process.env.EMAIL_SERVER_PORT),
//         auth: {
//           user: process.env.EMAIL_SERVER_USER,
//           pass: process.env.EMAIL_SERVER_PASSWORD,
//         },
//       },
//       from: process.env.EMAIL_FROM,
//     })
//   ],
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
