import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

const normalizePath = (path = "") => {
  if (!path || path === "/") {
    return "/";
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;

  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
};

const normalizeParams = (params = {}) =>
  Object.fromEntries(
    Object.entries(params).flatMap(([key, value]) => {
      if (value == null) {
        return [];
      }

      if (Array.isArray(value)) {
        return [[key, value.map(String)]];
      }

      return [[key, String(value)]];
    }),
  );

const pathnameEntries = Object.entries(routing.pathnames ?? {}).flatMap(
  ([internalPathname, localizedPathname]) =>
    routing.locales.map((locale) => ({
      locale,
      internalPathname: normalizePath(internalPathname),
      externalPathname: normalizePath(
        typeof localizedPathname === "string"
          ? localizedPathname
          : localizedPathname[locale] ??
              localizedPathname[routing.defaultLocale] ??
              internalPathname,
      ),
    })),
);

const sortBySpecificity = (a, b) => {
  const aDynamic = a.includes("[");
  const bDynamic = b.includes("[");

  if (aDynamic !== bDynamic) {
    return aDynamic ? 1 : -1;
  }

  return b.length - a.length;
};

pathnameEntries.sort((a, b) => {
  const externalComparison = sortBySpecificity(
    a.externalPathname,
    b.externalPathname,
  );

  if (externalComparison !== 0) {
    return externalComparison;
  }

  return sortBySpecificity(a.internalPathname, b.internalPathname);
});

const matchPathnamePattern = (pattern, actualPathname) => {
  const normalizedPattern = normalizePath(pattern);
  const normalizedPathname = normalizePath(actualPathname);

  if (normalizedPattern === normalizedPathname) {
    return {};
  }

  const patternSegments = normalizedPattern.split("/").filter(Boolean);
  const pathnameSegments = normalizedPathname.split("/").filter(Boolean);
  const params = {};

  for (let index = 0; index < patternSegments.length; index += 1) {
    const patternSegment = patternSegments[index];
    const pathnameSegment = pathnameSegments[index];

    if (patternSegment?.startsWith("[...") && patternSegment.endsWith("]")) {
      const key = patternSegment.slice(4, -1);
      params[key] = pathnameSegments.slice(index);
      return params;
    }

    if (pathnameSegment == null) {
      return null;
    }

    if (patternSegment?.startsWith("[") && patternSegment.endsWith("]")) {
      params[patternSegment.slice(1, -1)] = pathnameSegment;
      continue;
    }

    if (patternSegment !== pathnameSegment) {
      return null;
    }
  }

  return patternSegments.length === pathnameSegments.length ? params : null;
};

const resolvePathname = (path = "/") => {
  const normalizedPath = normalizePath(path);

  for (const entry of pathnameEntries) {
    const internalParams = matchPathnamePattern(
      entry.internalPathname,
      normalizedPath,
    );

    if (internalParams) {
      return {
        pathname: entry.internalPathname,
        params: internalParams,
        isConfigured: true,
      };
    }

    const externalParams = matchPathnamePattern(
      entry.externalPathname,
      normalizedPath,
    );

    if (externalParams) {
      return {
        pathname: entry.internalPathname,
        params: externalParams,
        isConfigured: true,
      };
    }
  }

  return {
    pathname: normalizedPath,
    params: {},
    isConfigured: false,
  };
};

export const getAbsoluteUrl = (path = "/") =>
  new URL(path, SITE_URL).toString();

export const getLocalizedPath = (locale, path = "/", params) => {
  const resolvedPathname = resolvePathname(path);
  const resolvedParams = normalizeParams(
    Object.keys(params ?? {}).length ? params : resolvedPathname.params,
  );

  if (!resolvedPathname.isConfigured) {
    return resolvedPathname.pathname === "/"
      ? `/${locale}`
      : `/${locale}${resolvedPathname.pathname}`;
  }

  const href = Object.keys(resolvedParams).length
    ? {
        pathname: resolvedPathname.pathname,
        params: resolvedParams,
      }
    : resolvedPathname.pathname;

  return getPathname({ locale, href });
};

export const getCanonicalUrl = (locale, path = "/", params) =>
  getAbsoluteUrl(getLocalizedPath(locale, path, params));

export const getLanguageAlternates = (path = "/", params) =>
  Object.fromEntries([
    ...routing.locales.map((locale) => [locale, getCanonicalUrl(locale, path, params)]),
    ["x-default", getCanonicalUrl(routing.defaultLocale, path, params)],
  ]);

export const getPathWithoutLocale = (pathname = "/") => {
  const [, maybeLocale, ...segments] = pathname.split("/");

  if (!routing.locales.includes(maybeLocale)) {
    return normalizePath(pathname);
  }

  return normalizePath(segments.join("/"));
};

export const getHreflangLinkHeader = (path = "") =>
  Object.entries(getLanguageAlternates(path))
    .map(
      ([locale, href]) =>
        `<${href}>; rel="alternate"; hreflang="${locale}"`,
    )
    .join(", ");
