import { isValidGateToken, SITE_GATE_COOKIE } from "@/lib/site-gate";
import { NextRequest, NextResponse } from "next/server";

/**
 * Draft gate: cookie session after password form on /login.
 * Unset SITE_PASSWORD to make the site public.
 */
export async function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;
  const token = request.cookies.get(SITE_GATE_COOKIE)?.value;
  const authed = await isValidGateToken(token, password);

  if (pathname === "/login") {
    if (authed) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (authed) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|brand/).*)",
  ],
};
