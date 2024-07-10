import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/options";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./lib/routes";

export default async function middleware(request: NextRequest) {
  // const session = await getServerSession(authOptions);
  // const user = session?.user;

  // const isProtected = PROTECTED_ROUTES.some((route) =>
  //   request.nextUrl.pathname.startsWith(route)
  // );

  // const isAuth = AUTH_ROUTES.some((route) =>
  //   request.nextUrl.pathname.startsWith(route)
  // );

  // if (!user && isProtected) {
  //   const absoluteURL = new URL("/", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }

  // if (user && isAuth) {
  //   const absoluteURL = new URL("/dashboard", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
