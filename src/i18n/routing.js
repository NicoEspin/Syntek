import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],

  // Used when no locale matches
  defaultLocale: 'es',

  pathnames: {
    '/': '/',
    '/blogs': '/blogs',
    '/blogs/[slug]': '/blogs/[slug]',
    '/projects': '/projects',
    '/projects/[id]': '/projects/[id]',
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

  // Keep `/` stable on the default locale instead of
  // negotiating with cookies or the Accept-Language header.
  localeDetection: false
});
