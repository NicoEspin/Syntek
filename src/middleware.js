import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getHreflangLinkHeader, getPathWithoutLocale } from "./lib/seo";
 
const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host");
  const hostname = host?.split(":")[0];
  const pathname = request.nextUrl.pathname;
  const isRootPath = pathname === "/";

  if (hostname === "synttek.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = "www.synttek.com";

    if (isRootPath) {
      url.pathname = `/${routing.defaultLocale}`;
    }

    return NextResponse.redirect(url, 308);
  }

  if (isRootPath) {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;

    return NextResponse.redirect(url, 308);
  }

  const response = intlMiddleware(request);
  const localizedPath = getPathWithoutLocale(pathname);
  const hreflangHeader = getHreflangLinkHeader(localizedPath);
  const currentLinkHeader = response.headers.get("Link") ?? "";
  const nonAlternateLinks = currentLinkHeader
    .split(",")
    .map((value) => value.trim())
    .filter(
      (value) =>
        value &&
        !(value.includes('rel="alternate"') && value.includes("hreflang=")),
    );

  response.headers.set(
    "Link",
    [hreflangHeader, ...nonAlternateLinks].filter(Boolean).join(", "),
  );

  return response;
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
