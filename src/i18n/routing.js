import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],

  // Used when no locale matches
  defaultLocale: 'es',

  // Keep `/` stable on the default locale instead of
  // negotiating with cookies or the Accept-Language header.
  localeDetection: false
});
