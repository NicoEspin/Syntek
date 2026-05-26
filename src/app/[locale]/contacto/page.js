import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ChatBot from "@/app/components/ChatBot";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/business";

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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: locale === "es" ? "Contacto Synttek" : "Synttek Contact",
        url: `${SITE_URL}/${locale}${PATH}`,
        mainEntity: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          email: BUSINESS_EMAIL,
          telephone: BUSINESS_PHONE_DISPLAY,
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
            name: locale === "es" ? "Contacto" : "Contact",
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
      <ContactPageContent locale={locale} />
      <ChatBot />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
