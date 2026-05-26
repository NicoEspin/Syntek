import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ChatBot from "@/app/components/ChatBot";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/business";

import AboutPageContent from "./AboutPageContent";

const PATH = "/sobre-nosotros";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Sobre Synttek | Estrategia, diseño y desarrollo"
    : "About Synttek | Strategy, design and development";
  const description = isEs
    ? "Conocé cómo piensa Synttek: una agencia que combina estrategia, diseño y desarrollo para construir activos digitales con criterio comercial y técnico."
    : "Learn how Synttek works: a studio combining strategy, design and development to build digital assets with commercial and technical judgment.";
  const socialImage = `${SITE_URL}/android-chrome-512x512.png`;

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, PATH),
      languages: getLanguageAlternates(PATH),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${PATH}`,
      siteName: SITE_NAME,
      locale: isEs ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name:
          locale === "es"
            ? "Sobre Synttek"
            : "About Synttek",
        url: `${SITE_URL}/${locale}${PATH}`,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          email: BUSINESS_EMAIL,
          sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
          address: {
            "@type": "PostalAddress",
            addressLocality: BUSINESS_LOCATION.city,
            addressRegion: BUSINESS_LOCATION.region,
            addressCountry: BUSINESS_LOCATION.countryCode,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: `${SITE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "es" ? "Sobre nosotros" : "About us",
            item: `${SITE_URL}/${locale}${PATH}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar floating />
      <AboutPageContent locale={locale} />
      <ChatBot />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
