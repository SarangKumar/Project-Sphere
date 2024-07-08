import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/auth/sign-in", "/auth/sign-up"];

export default async function middleware(request: NextRequest) {
  // const session = await auth();

  // const isProtected = protectedRoutes.some((route) =>
  //   request.nextUrl.pathname.startsWith(route)
  // );

  // const isAuth = authRoutes.some((route) =>
  //   request.nextUrl.pathname.startsWith(route)
  // );

  // if (!session && isProtected) {
  //   const absoluteURL = new URL("/", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }

  // if (session && isAuth) {
  //   const absoluteURL = new URL("/dashboard", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
