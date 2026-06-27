import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  buildBreadcrumbJsonLd,
  buildGraphJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/jsonLd";

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
      url: getCanonicalUrl(locale, PATH),
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

  const structuredData = buildGraphJsonLd([
    {
      "@type": "AboutPage",
      name: locale === "es" ? "Sobre Synttek" : "About Synttek",
      url: getCanonicalUrl(locale, PATH),
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: buildOrganizationJsonLd(),
    },
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      {
        name: locale === "es" ? "Sobre nosotros" : "About us",
        item: getCanonicalUrl(locale, PATH),
      },
    ]),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar floating />
      <AboutPageContent locale={locale} />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
