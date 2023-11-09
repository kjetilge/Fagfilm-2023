import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // your middleware stuff here
  console.log("reqqq", request);
  return NextResponse.next({
    request: {
      headers: new Headers({ "x-url": request.url }),
    },
  });
}