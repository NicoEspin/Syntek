import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/business";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const buildOrganizationJsonLd = () => ({
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_DISPLAY,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: BUSINESS_EMAIL,
      availableLanguage: ["es", "en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.countryCode,
  },
});

export const buildProfessionalServiceJsonLd = () => ({
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/android-chrome-512x512.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_DISPLAY,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.countryCode,
  },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "AdministrativeArea", name: BUSINESS_LOCATION.region },
  ],
  knowsAbout: [
    "desarrollo web",
    "landing pages",
    "software a medida",
    "automatizaciones con IA",
    "ecommerce",
    "diseño UX/UI",
    "branding",
  ],
});

export const buildWebsiteJsonLd = (locale) => ({
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/${locale}`,
  inLanguage: locale,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
});

export const buildFaqPageJsonLd = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildServiceJsonLd = ({ name, title, description, path }) => ({
  "@type": "Service",
  name,
  serviceType: title,
  description,
  url: `${SITE_URL}${path}`,
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: BUSINESS_EMAIL,
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "AdministrativeArea", name: BUSINESS_LOCATION.region },
  ],
});

export const buildBreadcrumbJsonLd = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});

export const buildCollectionPageJsonLd = ({ name, path, description, items }) => ({
  "@type": "CollectionPage",
  name,
  url: `${SITE_URL}${path}`,
  description,
  mainEntity: items,
});

export const buildGraphJsonLd = (nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
