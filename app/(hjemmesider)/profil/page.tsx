// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
// import hasSkolekode from "@/lib/hasSkolekode";
// import { redirect } from "next/navigation";
// // import { useSession } from "next-auth/react"

// // use server side sessions
// // https://medium.com/@majidkuhail/server-side-session-in-next-js-v13-app-router-2d55d15bafb1

// export default async function Page() {
//   const hasCode = await hasSkolekode();

//   // if(!await hasSkolekode()) {
//   //   redirect('/skolekode')
//   // }

//   const session = await getServerSession(authOptions);
//     return (
//       <article className="prose lg:prose-xl prose-slate w-4/5">
//         <p>Signed in as {JSON.stringify(session)}</p>
//       </article>
//     )
// }