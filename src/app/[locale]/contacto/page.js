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

import ContactPageContent from "./ContactPageContent";

const PATH = "/contacto";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Contacto | Hablemos de tu proyecto con Synttek"
    : "Contact | Talk to Synttek about your project";
  const description = isEs
    ? "Contactanos para hablar sobre desarrollo web, software a medida, automatizaciones, ecommerce o la próxima etapa digital de tu negocio."
    : "Get in touch to talk about web development, custom software, automations, ecommerce or the next digital step for your business.";
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

export default async function ContactPage({ params }) {
  const { locale } = await params;

  const structuredData = buildGraphJsonLd([
    {
      "@type": "ContactPage",
      name: locale === "es" ? "Contacto Synttek" : "Synttek Contact",
      url: `${SITE_URL}/${locale}${PATH}`,
      mainEntity: buildOrganizationJsonLd(),
    },
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      {
        name: locale === "es" ? "Contacto" : "Contact",
        item: `${SITE_URL}/${locale}${PATH}`,
      },
    ]),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar floating />
      <ContactPageContent locale={locale} />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
