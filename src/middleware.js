import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";
 
const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host");
  const hostname = host?.split(":")[0];

  if (hostname === "synttek.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = "www.synttek.com";

    return NextResponse.redirect(url, 308);
  }

  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;

    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
