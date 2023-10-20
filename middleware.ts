import { NextResponse, NextRequest } from 'next/server'
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth"

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl
  // const response = NextResponse.next()
  // const session = await getServerSession(authOptions);

  // FIX PROBLEM:
  // HTTP-based Email Provider
  // https://authjs.dev/guides/providers/email-http

  
  //   console.log('session:', session)

  // const url = new URL('/skolekode', request.url)
  // console.log('url', url)

  // console.log('pathname', pathname)
  
  // if (
  //   !pathname.endsWith('/skolekode')
  // ) {
  //   console.log(url)
  //   // return NextResponse.redirect(new URL('/home', request.url))
  // }

}