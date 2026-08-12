import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_PHONE_DISPLAY,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  SORTLIST_URL,
} from "@/lib/business";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const buildOrganizationJsonLd = () => ({
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_DISPLAY,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
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
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.countryCode,
  },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "AdministrativeArea", name: BUSINESS_LOCATION.region },
    {
      "@type": "City",
      name: "Villa Carlos Paz",
      containedInPlace: { "@type": "State", name: "Córdoba" },
    },
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

export const buildLocalBusinessJsonLd = () => ({
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/android-chrome-512x512.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_DISPLAY,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.countryCode,
  },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "AdministrativeArea", name: BUSINESS_LOCATION.region },
    {
      "@type": "City",
      name: "Villa Carlos Paz",
      containedInPlace: { "@type": "State", name: "Córdoba" },
    },
  ],
});

export const buildVillaCarlosPazJsonLd = () => ({
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE_NAME,
  description:
    "Agencia de desarrollo web y software a medida en Villa Carlos Paz, Córdoba.",
  url: `${SITE_URL}/es/villa-carlos-paz`,
  image: `${SITE_URL}/android-chrome-512x512.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_DISPLAY,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.countryCode,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Villa Carlos Paz",
      containedInPlace: { "@type": "State", name: "Córdoba" },
    },
    { "@type": "State", name: "Córdoba" },
    { "@type": "Country", name: "Argentina" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: -31.4235, longitude: -64.5003 },
    geoRadius: "80000",
  },
});

export const buildCordobaJsonLd = () => ({
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE_NAME,
  description:
    "Agencia de desarrollo web y software a medida para negocios y pymes de Córdoba, Argentina.",
  url: `${SITE_URL}/es/cordoba`,
  image: `${SITE_URL}/android-chrome-512x512.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_DISPLAY,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.countryCode,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Córdoba",
      containedInPlace: { "@type": "State", name: "Córdoba" },
    },
    {
      "@type": "City",
      name: "Villa Carlos Paz",
      containedInPlace: { "@type": "State", name: "Córdoba" },
    },
    { "@type": "State", name: "Córdoba" },
    { "@type": "Country", name: "Argentina" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: -31.4201, longitude: -64.1888 },
    geoRadius: "100000",
  },
});

export const buildPublisherJsonLd = () => ({
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
});

export const buildWebsiteJsonLd = (options) => {
  const locale = typeof options === "string" ? options : options?.locale;
  const url = typeof options === "string" ? `${SITE_URL}/${options}` : options?.url ?? SITE_URL;

  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url,
    ...(locale ? { inLanguage: locale } : {}),
    publisher: buildPublisherJsonLd(),
    ...(options?.potentialAction ? { potentialAction: options.potentialAction } : {}),
  };
};

export const buildWebPageJsonLd = ({
  type = "WebPage",
  name,
  description,
  url,
  locale,
  about,
  mainEntity,
}) => ({
  "@type": type,
  name,
  description,
  url,
  inLanguage: locale,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    publisher: buildPublisherJsonLd(),
  },
  about,
  mainEntity,
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
});

export const buildAggregateRatingReviewJsonLd = () => ({
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Enrique Callejon" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Excelente servicio.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Vale Sosa" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Excelente servicio, gracias por ayudarnos con la estética completa de la inmobiliaria, hasta el logo nos ofrecieron... la página un lujo.",
    },
  ],
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
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
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

export const buildItemListJsonLd = (items) => ({
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    ...item,
  })),
});

export const buildArticleJsonLd = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  articleSection,
  keywords,
  locale,
  timeRequired,
}) => ({
  "@type": "Article",
  headline: title,
  description,
  url,
  image,
  datePublished,
  dateModified: dateModified ?? datePublished,
  articleSection,
  keywords,
  timeRequired,
  author: {
    "@type": "Person",
    name: authorName,
  },
  publisher: buildPublisherJsonLd(),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  inLanguage: locale,
});

export const buildCreativeWorkJsonLd = ({
  name,
  description,
  url,
  image,
  dateModified,
  locale,
}) => ({
  "@type": "CreativeWork",
  name,
  description,
  url,
  image,
  dateModified,
  author: buildPublisherJsonLd(),
  publisher: buildPublisherJsonLd(),
  inLanguage: locale,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
});

export const buildGraphJsonLd = (nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
