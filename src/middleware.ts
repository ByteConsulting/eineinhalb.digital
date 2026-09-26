import { NextRequest, NextResponse } from "next/server";

/**
 * Draft/site gate via HTTP Basic Auth.
 * Set SITE_PASSWORD (required to enable) and optional SITE_USER (default: draft).
 * Remove or unset SITE_PASSWORD when the site should be public.
 */
export function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.next();
  }

  const user = process.env.SITE_USER || "draft";
  const header = request.headers.get("authorization");

  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const separator = decoded.indexOf(":");
      const givenUser = separator >= 0 ? decoded.slice(0, separator) : decoded;
      const givenPassword = separator >= 0 ? decoded.slice(separator + 1) : "";

      if (givenUser === user && givenPassword === password) {
        return NextResponse.next();
      }
    } catch {
      // fall through to challenge
    }
  }

  return new NextResponse("Authentifizierung erforderlich.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="ein-ein-halb digital (Draft)"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: [
    /*
     * Protect everything except Next internals and common static probes.
     * Public assets still require auth once — browser reuses Basic credentials.
     */
    "/((?!_next/image|_next/static|favicon.ico).*)",
  ],
};
