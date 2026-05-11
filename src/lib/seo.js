import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

const normalizePath = (path = "") => {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const getAbsoluteUrl = (path = "/") =>
  new URL(path, SITE_URL).toString();

export const getLocalizedPath = (locale, path = "") =>
  `/${locale}${normalizePath(path)}`;

export const getCanonicalUrl = (locale, path = "") =>
  getAbsoluteUrl(getLocalizedPath(locale, path));

export const getLanguageAlternates = (path = "") => ({
  ...Object.fromEntries(
    routing.locales.map((locale) => [locale, getCanonicalUrl(locale, path)]),
  ),
  "x-default": getCanonicalUrl(routing.defaultLocale, path),
});
