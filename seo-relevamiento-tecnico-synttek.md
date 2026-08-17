# Relevamiento Tecnico SEO - Synttek

Fecha: 2026-08-17
Modo: diagnostico previo a implementacion
Estado: sin cambios aplicados en el codigo

## 1. Arquitectura General

- Version de Next.js: `16.3.0`
- Router: `App Router`
- i18n: `next-intl`
- Locale default: `es`
- Deteccion automatica de idioma: desactivada
- Middleware real: no hay `middleware.*`; la logica vive en `src/proxy.js`
- Scripts disponibles:
  - `lint`: si
  - `build`: si
  - `typecheck`: no
  - `tests`: no

### package.json

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\package.json`

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  },
  "dependencies": {
    "next": "16.3.0",
    "next-intl": "4.13.6",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  }
}
```

Como funciona actualmente:
- El proyecto corre con App Router porque las rutas estan bajo `src/app/**`.
- No hay infraestructura de tests ni typecheck en scripts.

Que archivos habria que modificar para corregirlo:
- `package.json`

Riesgos o dependencias del cambio:
- Falta de tests y typecheck complica validar cambios SEO sin regresiones.

### next.config.mjs

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\next.config.mjs`

```js
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  skipProxyUrlNormalize: true,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
```

Como funciona actualmente:
- No hay `redirects()`, `rewrites()` ni `trailingSlash`.
- Toda la politica SEO de rutas no esta aca.

Que archivos habria que modificar para corregirlo:
- `next.config.mjs`
- probablemente `src/proxy.js`

Riesgos o dependencias del cambio:
- `skipProxyUrlNormalize` interactua con el proxy; no conviene tocarlo sin revisar redirects y canonicals juntos.

### Configuracion de internacionalizacion

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\i18n\routing.js`

```js
export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/servicios': {
      es: '/servicios',
      en: '/services'
    },
    '/servicios/[slug]': {
      es: '/servicios/[slug]',
      en: '/services/[slug]'
    },
    '/sobre-nosotros': {
      es: '/sobre-nosotros',
      en: '/about'
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact'
    }
  },
  localeDetection: false
});
```

Como funciona actualmente:
- Las carpetas fisicas no son `/es` y `/en`; todo cuelga de `src/app/[locale]`.
- Las URLs publicas EN se resuelven con `pathnames`, por ejemplo `/en/services/*`.
- `localeDetection: false` hace que el idioma salga de la URL, no de cookie ni `Accept-Language`.

Que archivos habria que modificar para corregirlo:
- `src/i18n/routing.js`

Riesgos o dependencias del cambio:
- Cualquier cambio de slug localizado impacta navegacion, canonicals, hreflang, sitemap y links internos.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\i18n\navigation.js`

```js
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
```

Como funciona actualmente:
- Los `Link` del proyecto usan rutas internas como `"/servicios/slug"` y `next-intl` las transforma al pathname final del locale.

Que archivos habria que modificar para corregirlo:
- normalmente no hace falta tocarlo
- si revisar los componentes que usan `Link`

Riesgos o dependencias del cambio:
- Si alguien usa `next/link` directo en vez de este wrapper, puede saltear localizacion.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\i18n\request.js`

```js
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
```

Como funciona actualmente:
- El idioma actual se valida contra `routing.locales` y luego carga `messages/es.json` o `messages/en.json`.

Que archivos habria que modificar para corregirlo:
- `src/i18n/request.js`

Riesgos o dependencias del cambio:
- Si cambias locales o estrategia de fallback, tambien cambia metadata, sitemap y hreflang.

### Middleware / proxy

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\proxy.js`

```js
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
```

Como funciona actualmente:
- Redirige `synttek.com` a `www.synttek.com`
- Redirige `/` a `/es`
- Ejecuta el middleware de `next-intl`
- Inyecta header `Link` con hreflang

Que archivos habria que modificar para corregirlo:
- `src/proxy.js`
- `src/lib/seo.js`
- `src/i18n/routing.js`

Riesgos o dependencias del cambio:
- Tocar esto puede romper redirects, hreflang y canonicals al mismo tiempo.

### Estructura de carpetas para /es y /en

Base:
- `src/app/[locale]/page.js`
- `src/app/[locale]/blogs/**`
- `src/app/[locale]/projects/**`
- `src/app/[locale]/servicios/**`
- `src/app/[locale]/sobre-nosotros/page.js`
- `src/app/[locale]/contacto/page.js`
- `src/app/[locale]/cordoba/page.js`
- `src/app/[locale]/villa-carlos-paz/page.js`

## 2. Sistema De Metadata

### Layout principal

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\layout.js`

```js
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Synttek | Web, Software, Diseño e IA",
    template: `%s | ${SITE_NAME}`,
  },
```

Como funciona actualmente:
- Si, existe template global `"%s | Synttek"`.

### Fuente base de dominio y OG global

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\site.js`

```js
export const SITE_NAME = "Synttek";
export const SITE_URL = "https://www.synttek.com";
export const SITE_OG_IMAGE_URL = `${SITE_URL}/og-synttek.jpg`;
```

### Por que podria aparecer `Desarrollo web profesional para empresas | Synttek | Synttek`

Porque el layout tiene template global y los `metaTitle` de servicios ya traen `| Synttek`.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\data\services.js`

```js
metaTitle: localizedText(
  "Desarrollo web profesional para empresas | Synttek",
  "Professional web development for companies | Synttek",
),
```

Pero hoy NO se duplica desde la pagina de servicio porque usa `absolute`.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\[slug]\page.js`

```js
return {
  title: {
    absolute: service.metaTitle,
  },
```

Como funciona actualmente:
- `title.absolute` bypass-ea el template global.
- El riesgo existe, pero no vi evidencia de duplicacion activa en estas paginas mientras sigan usando `absolute`.

Que archivos habria que modificar para corregirlo:
- `src/app/[locale]/layout.js`
- `src/data/services.js`
- `src/app/[locale]/servicios/page.js`
- `src/app/[locale]/servicios/[slug]/page.js`

Riesgos o dependencias del cambio:
- Si sacas `absolute` sin limpiar el branding en los titulos hijos, duplicas marca.
- Si sacas el branding de los hijos, tenes que revisar servicios, blog, projects, about y contact para mantener consistencia.

### Metadata de servicios

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\page.js`

```js
const title = isEs
  ? "Servicios de desarrollo, branding y automatización | Synttek"
  : "Development, branding and automation services | Synttek";

return {
  title: { absolute: title },
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\[slug]\page.js`

```js
const service = getServiceBySlug(slug, locale);

return {
  title: {
    absolute: service.metaTitle,
  },
  description: service.metaDescription,
```

### Las 12 paginas de servicios afectadas y donde se define el titulo

| URL | Titulo definido en |
| --- | --- |
| `/es/servicios/desarrollo-web` | `src/data/services.js` lineas 31-34 |
| `/en/services/desarrollo-web` | `src/data/services.js` lineas 31-34 |
| `/es/servicios/landing-pages` | `src/data/services.js` lineas 195-198 |
| `/en/services/landing-pages` | `src/data/services.js` lineas 195-198 |
| `/es/servicios/software-a-medida` | `src/data/services.js` lineas 359-362 |
| `/en/services/software-a-medida` | `src/data/services.js` lineas 359-362 |
| `/es/servicios/automatizaciones` | `src/data/services.js` lineas 523-526 |
| `/en/services/automatizaciones` | `src/data/services.js` lineas 523-526 |
| `/es/servicios/ecommerce` | `src/data/services.js` lineas 687-690 |
| `/en/services/ecommerce` | `src/data/services.js` lineas 687-690 |
| `/es/servicios/branding` | `src/data/services.js` lineas 851-854 |
| `/en/services/branding` | `src/data/services.js` lineas 851-854 |

## 3. Rutas Internas De Servicios En Ingles

Busqueda exacta:
- `/en/servicios/`: 0 archivos
- `/servicios/desarrollo-web`, `/servicios/landing-pages`, `/servicios/software-a-medida`, `/servicios/automatizaciones`, `/servicios/ecommerce`, `/servicios/branding`: 2 archivos con strings exactos

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\sections\Services.jsx`

```js
const services = [
  { href: "/servicios/desarrollo-web" },
  { href: "/servicios/landing-pages" },
  { href: "/servicios/software-a-medida" },
  { href: "/servicios/automatizaciones" },
  { href: "/servicios/ecommerce" },
  { href: "/servicios/branding" },
];
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\contacto\ContactPageContent.jsx`

```jsx
<Link
  href="/servicios/desarrollo-web"
>
```

Como funciona actualmente:
- Home services y CTA de contacto estan hardcodeados con pathname interno español.
- Como usan `Link` de `@/i18n/navigation`, en EN deberian salir como `/en/services/*`.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\components\(common)\Footer.jsx`

```js
const serviceLinks = getPrimaryServices(locale);

<Link
  key={service.slug}
  href={`/servicios/${service.slug}`}
>
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\ServicesPageContent.jsx`

```js
<Link
  href={`/servicios/${service.slug}`}
>
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\[slug]\ServiceDetail.jsx`

```js
<Link
  href={`/servicios/${relatedService.slug}`}
>
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\components\(common)\Navbar.jsx`

```js
const isServicesPage = pathname.startsWith("/servicios");

const navLinks = [
  {
    key: "services",
    label: t("services"),
    href: "/servicios",
  },
];
```

Header, footer, cards y CTAs comparten generador:
- Header: no, usa string manual `"/servicios"`
- Footer: parcialmente, usa `getPrimaryServices(locale)` para listar servicios
- Home cards: no, hardcodeadas
- CTA contacto: no, hardcodeado
- Services index y related services: si, usan dataset
- Templates de projects: si, usan dataset

Fuente central parcial:

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\data\services.js`

```js
const primaryServiceSlugs = [
  "desarrollo-web",
  "landing-pages",
  "software-a-medida",
  "automatizaciones",
  "ecommerce",
  "branding",
];
```

Por que EN no deberia enlazar a `/en/servicios/*`:
- Porque `routing.js` mapea `/servicios` -> `/services` para EN.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\i18n\routing.js`

```js
'/servicios': {
  es: '/servicios',
  en: '/services'
},
'/servicios/[slug]': {
  es: '/servicios/[slug]',
  en: '/services/[slug]'
},
```

Como deberia generarse:
- Seguir generando internamente `"/servicios/..."`
- `next-intl` deberia resolver externamente a `/en/services/...`
- Si en produccion hoy aparece `/en/servicios/*`, el problema no esta en estas strings sino en render real, uso incorrecto de `Link` o algun HTML manual fuera del patron encontrado.

Cantidad de archivos que contienen esas rutas exactas:
- 2 archivos con strings exactos
- 8 archivos mas generan la familia `/servicios/*` de forma dinamica

## 4. Middleware Y Redirecciones

No existe:
- `middleware.*`
- `vercel.json`
- `src/app/**/route.js|ts`
- `redirects()` en `next.config.mjs`
- `rewrites()` en `next.config.mjs`

### Redirecciones encontradas

| Origen | Destino | Status actual | Depende de | Naturaleza |
| --- | --- | --- | --- | --- |
| `synttek.com/*` | `https://www.synttek.com/*` | 308 | `host` | permanente |
| `synttek.com/` | `https://www.synttek.com/es` | 308 | `host` + root | permanente |
| `/` | `/es` | 308 | `pathname` | hoy permanente, pero conceptualmente es decision de locale default |

Evidencia:

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\proxy.js`

```js
if (hostname === "synttek.com") {
  ...
  return NextResponse.redirect(url, 308);
}

if (isRootPath) {
  ...
  return NextResponse.redirect(url, 308);
}
```

Sobre `/en/servicios/* -> /en/services/*`:
- No encontre ninguna redireccion implementada para eso.
- Hoy el repo intenta no necesitarla, porque la URL publica EN se genera bien desde `next-intl`.

Sobre barra final:
- No hay redirect explicito.
- Solo hay normalizacion en helper SEO.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\seo.js`

```js
const normalizePath = (path = "") => {
  ...
  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
};
```

Como funciona actualmente:
- Canonicals salen sin slash final.
- No hay evidencia de politica server-side explicita de slash/no-slash.

Que archivos habria que modificar para corregirlo:
- `src/proxy.js`
- `next.config.mjs`
- eventualmente `src/lib/seo.js`

Riesgos o dependencias del cambio:
- No conviene convertir todo a 308 a ciegas.
- `synttek.com -> www` si es migracion permanente.
- `/ -> /es` es mas una decision de locale default.
- Si el proyecto llega a activar locale detection, esa decision cambia.

## 5. Canonicals Y Hreflang

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\seo.js`

```js
export const getCanonicalUrl = (locale, path = "/", params) =>
  getAbsoluteUrl(getLocalizedPath(locale, path, params));

export const getLanguageAlternates = (path = "/", params) =>
  Object.fromEntries([
    ...routing.locales.map((locale) => [locale, getCanonicalUrl(locale, path, params)]),
    ["x-default", getCanonicalUrl(routing.defaultLocale, path, params)],
  ]);
```

Donde se usan:
- `src/app/[locale]/page.js`
- `src/app/[locale]/blogs/page.js`
- `src/app/[locale]/blogs/[slug]/page.js`
- `src/app/[locale]/projects/page.js`
- `src/app/[locale]/projects/[id]/page.js`
- `src/app/[locale]/servicios/page.js`
- `src/app/[locale]/servicios/[slug]/page.js`
- `src/app/[locale]/sobre-nosotros/page.js`
- `src/app/[locale]/contacto/page.js`
- `src/app/[locale]/cordoba/page.js`
- `src/app/[locale]/villa-carlos-paz/page.js`

Ejemplo:

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\[slug]\page.js`

```js
alternates: {
  canonical: getCanonicalUrl(locale, path),
  languages: getLanguageAlternates(path),
},
```

Comprobacion:
- Canonical y hreflang salen de la misma fuente.
- EN deberia resolver a `/en/services/*`.
- ES deberia resolver a `/es/servicios/*`.
- `x-default` apunta a `es`.

No vi mezcla de `www` y no-`www` en helpers:

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\site.js`

```js
export const SITE_URL = "https://www.synttek.com";
```

No vi mezcla estructural de slash/no-slash en canonicals:
- `normalizePath()` remueve slash final.

Caso sospechoso importante:
- Las paginas de Cordoba y Villa Carlos Paz generan canonical por locale correcto.
- Pero su JSON-LD hardcodea URL ES.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\jsonLd.js`

```js
url: `${SITE_URL}/es/villa-carlos-paz`,
...
url: `${SITE_URL}/es/cordoba`,
```

Riesgo:
- En `/en/cordoba` y `/en/villa-carlos-paz`, schema y canonical no coinciden.

Que archivos habria que modificar para corregirlo:
- `src/lib/seo.js`
- `src/lib/jsonLd.js`
- `src/app/[locale]/cordoba/page.js`
- `src/app/[locale]/villa-carlos-paz/page.js`

## 6. Sitemap Y Robots

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\sitemap.js`

```js
for (const locale of routing.locales) {
  routes.push({ url: getCanonicalUrl(locale) });
  routes.push({ url: getCanonicalUrl(locale, "/projects") });
  routes.push({ url: getCanonicalUrl(locale, "/blogs") });
  routes.push({ url: getCanonicalUrl(locale, "/servicios") });
  routes.push({ url: getCanonicalUrl(locale, "/sobre-nosotros") });
  routes.push({ url: getCanonicalUrl(locale, "/contacto") });

  for (const slug of getPrimaryServiceSlugs()) {
    const path = `/servicios/${slug}`;
    routes.push({ url: getCanonicalUrl(locale, path) });
  }

  for (const project of projects) {
    routes.push({ url: getCanonicalUrl(locale, `/projects/${project.id}`) });
  }

  for (const post of blogPosts) {
    const path = `/blogs/${post.slug}`;
    routes.push({ url: getCanonicalUrl(locale, path) });
  }
}
```

Como funciona actualmente:
- Sitemap sale de arrays y helpers, no de crawling.
- Incluye ES y EN porque itera `routing.locales`.
- Usa URLs canonicas, no las redirigidas.

`lastModified`:

```js
const staticRoutes = {
  home: "2026-04-09T20:36:11.080Z",
  projects: "2026-04-09T20:36:11.080Z",
  blogs: "2026-06-24T00:00:00.000Z",
  services: "2026-05-25T00:00:00.000Z",
  servicesIndex: "2026-05-26T00:00:00.000Z",
  about: "2026-05-25T00:00:00.000Z",
  contact: "2026-05-25T00:00:00.000Z",
};
```

Que pasa hoy:
- Home, projects, blogs, about, contact y services index usan fechas hardcodeadas.
- Services detail usa tambien fecha hardcodeada, aunque `src/data/services.js` tiene `updatedAt`.
- Projects detail usa `project.updatedAt`.
- Blog detail usa `post.date`.

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\robots.js`

```js
export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
  };
}
```

Como funciona actualmente:
- `robots` permite todo.
- Publica un solo sitemap canonico: `https://www.synttek.com/sitemap.xml`

### Por que el sitemap da 54 URLs

- 2 locales
- 6 rutas estaticas por locale: home, projects, blogs, services, about, contact = 12
- 6 servicios por locale = 12
- 9 proyectos por locale = 18
- 6 posts por locale = 12
- total = 54

### Paginas indexables fuera del sitemap

- `src/app/[locale]/cordoba/page.js`
- `src/app/[locale]/villa-carlos-paz/page.js`

Eso agrega 4 URLs omitidas:
- `/es/cordoba`
- `/en/cordoba`
- `/es/villa-carlos-paz`
- `/en/villa-carlos-paz`

Eso explica parte del gap con GSC, no todo.

El resto probablemente venga de:
- URLs historicas de deploys previos
- variantes redirigidas conocidas por Google
- rutas viejas ya descubiertas fuera del sitemap actual

No encontre:
- listas de rutas legacy
- redirect maps
- sitemap viejo en repo
- rewrites activos

Que archivos habria que modificar para corregirlo:
- `src/app/sitemap.js`
- `src/data/services.js`
- `src/data/blogPosts.js` si queres `dateModified` real

Riesgos o dependencias del cambio:
- Si cambias sitemap sin alinear canonicals y redirects, dejas URLs no canonicas publicadas.

## 7. Structured Data

Archivo central: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\jsonLd.js`

Tipos encontrados:
- `Organization`: `buildOrganizationJsonLd()`
- `ProfessionalService`: `buildProfessionalServiceJsonLd()`
- `LocalBusiness`: `buildLocalBusinessJsonLd()`
- `WebSite`: `buildWebsiteJsonLd()`
- `FAQPage`: `buildFaqPageJsonLd()`
- `Service`: `buildServiceJsonLd()`
- `BreadcrumbList`: `buildBreadcrumbJsonLd()`
- `Article`: `buildArticleJsonLd()`
- `CreativeWork`: `buildCreativeWorkJsonLd()`
- `AggregateRating` y `Review`: `buildAggregateRatingReviewJsonLd()`

Snippets:

```js
export const buildOrganizationJsonLd = () => ({
  "@type": "Organization",
```

```js
export const buildProfessionalServiceJsonLd = () => ({
  "@type": "ProfessionalService",
```

```js
export const buildLocalBusinessJsonLd = () => ({
  "@type": "LocalBusiness",
```

```js
export const buildWebsiteJsonLd = (options) => ({
  "@type": "WebSite",
```

```js
export const buildFaqPageJsonLd = (faqs) => ({
  "@type": "FAQPage",
```

```js
export const buildServiceJsonLd = ({ name, title, description, path }) => ({
  "@type": "Service",
```

```js
export const buildBreadcrumbJsonLd = (items) => ({
  "@type": "BreadcrumbList",
```

```js
export const buildArticleJsonLd = ({ ... }) => ({
  "@type": "Article",
```

```js
export const buildCreativeWorkJsonLd = ({ ... }) => ({
  "@type": "CreativeWork",
```

### Donde se agregan `aggregateRating` y `review` a la organizacion principal

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\page.js`

```js
const structuredData = buildGraphJsonLd([
  { ...buildOrganizationJsonLd(), ...buildAggregateRatingReviewJsonLd() },
  buildLocalBusinessJsonLd(),
  buildWebsiteJsonLd({ locale, url: SITE_URL }),
  buildFaqPageJsonLd(faqs),
]);
```

Como retirarlo despues sin afectar testimonios visuales:
- La UI visible de testimonios no depende de este JSON-LD.
- El cambio minimo seria sacar `...buildAggregateRatingReviewJsonLd()` de `src/app/[locale]/page.js`.
- La seccion visual de testimonios puede quedar intacta.

Que archivos habria que modificar para corregirlo:
- minimo: `src/app/[locale]/page.js`
- opcional limpieza: `src/lib/jsonLd.js`

Riesgos o dependencias del cambio:
- Si eliminas el builder de `jsonLd.js`, primero asegurate de que no haya mas usos.
- Hoy las reviews estan solo en home.

## 8. Open Graph

### OG global

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\layout.js`

```js
openGraph: {
  images: [
    {
      url: SITE_OG_IMAGE_URL,
      secureUrl: SITE_OG_IMAGE_URL,
      width: SITE_OG_IMAGE_WIDTH,
      height: SITE_OG_IMAGE_HEIGHT,
      alt: SITE_OG_IMAGE_ALT,
      type: SITE_OG_IMAGE_TYPE,
    },
  ],
},
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\site.js`

```js
export const SITE_OG_IMAGE_URL = `${SITE_URL}/og-synttek.jpg`;
export const SITE_OG_IMAGE_WIDTH = 1730;
export const SITE_OG_IMAGE_HEIGHT = 909;
```

### Que paginas usan `android-chrome-512x512.png`

- services index
- service detail
- blog index
- projects index
- about
- contact
- varias paginas internas genericas

Ejemplo services:

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\[slug]\page.js`

```js
const socialImage = `${SITE_URL}/android-chrome-512x512.png`;

images: [
  {
    url: socialImage,
    width: 512,
    height: 512,
    alt: service.metaTitle,
  },
],
```

Infraestructura OG dinamica:
- No encontre `opengraph-image.*`
- No vi generadores dinamicos por ruta

Que habria que modificar para una imagen 1200x630 por servicio:
- `src/app/[locale]/servicios/[slug]/page.js`
- `src/data/services.js`
- y/o crear assets dedicados en `public/`
- o crear `src/app/[locale]/servicios/[slug]/opengraph-image.*`

Riesgos o dependencias:
- Si usas assets manuales, hay que mantener 6 imagenes.
- Si usas `opengraph-image`, sube la complejidad pero escala mejor.

## 9. Metadata Del Blog

### Fuente del contenido

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\data\blogPosts.js`

```js
const postEntries = [
```

Eso confirma:
- No viene de CMS
- No viene de un objeto remoto
- Esta definido en codigo local

### Metadata del index

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\blogs\page.js`

```js
const title = t("pageTitle");
const description = t("pageDescription");
```

Keys:
- `messages/es.json` lineas 491-492
- `messages/en.json` lineas 494-495

### Metadata del detalle

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\blogs\[slug]\page.js`

```js
const title = t("detailPageTitle", { title: post.title });
const description = post.excerpt;
```

Templates:

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\messages\es.json`

```json
"detailPageTitle": "{title} | Blog Synttek"
```

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\messages\en.json`

```json
"detailPageTitle": "{title} | Synttek Blog"
```

### H1 visible

Ruta exacta: `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\blogs\[slug]\PostDetail.jsx`

```jsx
<motion.h1>
  {renderTitle(post.title, post.titleAccent)}
</motion.h1>
```

Conclusion:
- Index blog: metadata desacoplada del H1
- Detail blog:
  - suffix SEO se puede cambiar sin tocar H1
  - description se puede cambiar sin tocar H1
  - `post.title` no se puede cambiar sin tocar H1, porque alimenta ambos

### Articulos con titles > 65

- `necesito-una-web-para-mi-negocio`
- `diseno-para-redes-sociales`
- `como-automatizar-consultas-whatsapp-negocio` en ES
- `cuanto-sale-una-pagina-web-en-argentina-2026` queda muy al limite por suffix

### Articulos con descriptions > 160

- `cuanto-sale-una-pagina-web-en-argentina-2026`
- `necesito-una-web-para-mi-negocio`
- `diseno-para-redes-sociales`
- `como-automatizar-consultas-whatsapp-negocio`

Evidencia:

Ruta exacta: `src/data/blogPosts.js`

```js
slug: "cuanto-sale-una-pagina-web-en-argentina-2026",
title: localizedText(
  "Cuánto sale una página web en Argentina en 2026",
  "How much does a website cost in Argentina in 2026",
),
excerpt: localizedText(
  "Una guía clara para entender cuánto puede costar una página web profesional en Argentina...",
```

```js
slug: "necesito-una-web-para-mi-negocio",
title: localizedText(
  "Necesito una web para mi negocio: por dónde empezar y qué tipo de página conviene",
  "I need a website for my business: where to start and what type of site makes sense",
),
```

```js
slug: "diseno-para-redes-sociales",
title: localizedText(
  "Diseño para redes sociales: cómo hacer que tu marca se vea más profesional",
  "Social media design: how to make your brand look more professional",
),
```

```js
slug: "como-automatizar-consultas-whatsapp-negocio",
title: localizedText(
  "Cómo automatizar las consultas de WhatsApp de tu negocio",
  "How to automate your business's WhatsApp inquiries",
),
```

Caso interesante:

Ruta exacta: `src/data/blogPosts.js`

```js
slug: "que-es-una-landing-page",
title: localizedText("Qué es una landing page", "What is a landing page"),
titleAccent: localizedText(
  "y por qué convierte más que tu sitio web",
  "and why it converts better than your website",
),
```

Como funciona actualmente:
- El SEO title usa solo `post.title`
- El H1 visible usa `post.title + post.titleAccent`
- Ahi tenes desacople inverso: el H1 es mejor que el title SEO.

Que archivos habria que modificar para corregirlo:
- `src/data/blogPosts.js`
- `src/app/[locale]/blogs/[slug]/page.js`
- `messages/es.json`
- `messages/en.json`

Riesgos o dependencias del cambio:
- Si agregas `metaTitle` por post, tenes que mantenerlo bilingue y consistente con schema/OG.

## 10. Enlaces Y Rutas Antiguas

No encontre en el repo actual:
- redirect maps
- slugs legacy
- aliases explicitos
- rewrites
- route handlers SEO
- `vercel.json`

Si encontre:
- redirects del apex y root en `src/proxy.js`
- paginas indexables fuera del sitemap
- potencial duplicacion conocida por Google por host/root historicos
- mismatch schema URL ES en paginas EN de Cordoba/VCP

Paginas accesibles pero ausentes del sitemap:
- `/es/cordoba`
- `/en/cordoba`
- `/es/villa-carlos-paz`
- `/en/villa-carlos-paz`

Rutas que hoy podrian requerir decision posterior:
- `synttek.com/*`: mantener redirect 308 a `www`
- `/`: mantener redirect al locale default
- posibles URLs historicas que GSC conozca pero no existen ya en repo: definir luego si van a 308, 404 o 410
- no encontre evidencia suficiente en el codigo para incorporarlas al sitemap

## 11. Pruebas Existentes

Estado actual:
- No encontre `*.test.*`
- No encontre `*.spec.*`
- `package.json` no tiene script de tests

Tests SEO que faltan:
- metadata
- sitemap
- canonical
- hreflang
- rutas localizadas
- redirecciones
- structured data

Tests minimos recomendados, sin implementarlos todavia:

1. Test de `src/lib/seo.js`
2. Test de `src/app/sitemap.js`
3. Test de `src/proxy.js`
4. Test de `src/lib/jsonLd.js`
5. Test de metadata para services/blog/projects

Casos minimos a cubrir:
- EN de servicios nunca debe salir como `/en/servicios/*`
- canonical ES/EN correcto por ruta
- `x-default` consistente
- sitemap no debe incluir `/`
- sitemap debe incluir solo `www`
- sitemap debe decidir explicitamente si incluye o no `cordoba` y `villa-carlos-paz`
- home no deberia emitir `aggregateRating/review` si despues lo retiramos

## Tabla Final

| Problema | Causa encontrada | Archivo responsable | Cambio probable | Riesgo |
| -------- | ---------------- | ------------------- | --------------- | ------ |
| Riesgo de `| Synttek | Synttek` | Template global + `metaTitle` hijos ya brandizados | `src/app/[locale]/layout.js`, `src/data/services.js` | Unificar estrategia de titulos | Medio |
| Servicios EN podrian desalinearse | Fuente parcialmente centralizada y parcialmente hardcodeada | `src/data/services.js`, `src/app/sections/Services.jsx`, `src/app/[locale]/contacto/ContactPageContent.jsx`, `src/app/components/(common)/Navbar.jsx` | Centralizar generacion de links | Alto |
| No hay redirect explicito slash/no-slash | Solo normalizacion en helper SEO | `src/lib/seo.js`, `src/proxy.js`, `next.config.mjs` | Definir politica explicita | Medio |
| Sitemap incompleto | No incluye paginas `cordoba` y `villa-carlos-paz` | `src/app/sitemap.js` | Agregar o decidir exclusion explicita | Alto |
| `lastModified` hardcodeado | Sitemap no usa `updatedAt` en servicios ni `dateModified` en blog | `src/app/sitemap.js`, `src/data/services.js`, `src/data/blogPosts.js` | Usar fechas reales | Medio |
| Schema con URL ES en paginas EN | Builders locales hardcodean `/es/...` | `src/lib/jsonLd.js` | Hacer builders conscientes del locale | Alto |
| Reviews/rating en Organization | Home mergea `buildAggregateRatingReviewJsonLd()` | `src/app/[locale]/page.js`, `src/lib/jsonLd.js` | Quitar del JSON-LD sin tocar UI | Bajo |
| OG pobre en servicios | Usa `android-chrome-512x512.png` | `src/app/[locale]/servicios/page.js`, `src/app/[locale]/servicios/[slug]/page.js` | Definir OG 1200x630 por servicio | Medio |
| Blog con titles/descriptions largos | Metadata sale de `post.title` + `post.excerpt` sin limites | `src/data/blogPosts.js`, `src/app/[locale]/blogs/[slug]/page.js`, `messages/*.json` | Agregar `metaTitle`/`metaDescription` por post | Medio |
| Sin tests SEO | No existe suite de tests | `package.json` y futuros archivos de test | Agregar cobertura minima | Alto |

## Archivos Que Necesitaria Modificar En Una Primera Implementacion

- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\sitemap.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\seo.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\lib\jsonLd.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\page.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\layout.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\page.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\servicios\[slug]\page.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\data\services.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\sections\Services.jsx`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\contacto\ContactPageContent.jsx`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\components\(common)\Navbar.jsx`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\cordoba\page.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\villa-carlos-paz\page.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\data\blogPosts.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\src\app\[locale]\blogs\[slug]\page.js`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\messages\es.json`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\messages\en.json`
- `C:\Users\nikoe\OneDrive\Escritorio\proyects\Syntek\package.json`
