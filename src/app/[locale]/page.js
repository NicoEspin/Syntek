import Hero from "@/app/sections/Hero";
import Navbar from "@/app/components/(common)/Navbar";
import CallToAction from "@/app/sections/CallToAction";
import OurTools from "@/app/sections/OurTools";
import Projects from "@/app/sections/Projects";
import Introduction from "@/app/sections/Introduction";
import Faqs from "@/app/sections/Faqs";
import Services from "@/app/sections/Services";
import Footer from "@/app/components/(common)/Footer";
import Contact from "@/app/sections/Contact";
import About from "@/app/sections/About";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ChatBot from "../components/ChatBot";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/business";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const baseUrl = SITE_URL;
  const title = isEs
    ? "Synttek - Desarrollo web, software y automatizaciones en Córdoba"
    : "Web development, software and automation agency in Cordoba";
  const description = isEs
    ? "Creamos sitios web, software a medida, ecommerce y automatizaciones para marcas, pymes y negocios que quieren crecer con tecnología."
    : "At Synttek we build websites, custom software, ecommerce and automations for brands and companies that want to grow with technology.";

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl(locale),
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: SITE_NAME,
      locale: isEs ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/android-chrome-512x512.png`,
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
      images: [`${baseUrl}/android-chrome-512x512.png`],
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const faqTranslations = await getTranslations({ locale, namespace: "Faqs" });

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: Array.from({ length: 10 }, (_, index) => ({
      "@type": "Question",
      name: faqTranslations(`question${index + 1}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: faqTranslations(`answer${index + 1}`),
      },
    })),
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/${locale}`,
        logo: `${SITE_URL}/android-chrome-512x512.png`,
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE_DISPLAY,
        sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
        description: isEs
          ? "Agencia de desarrollo web, software y automatizaciones en Córdoba, Argentina."
          : "Web development, software and automation agency in Cordoba, Argentina.",
        address: {
          "@type": "PostalAddress",
          addressLocality: BUSINESS_LOCATION.city,
          addressRegion: BUSINESS_LOCATION.region,
          addressCountry: BUSINESS_LOCATION.countryCode,
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: `${SITE_URL}/${locale}`,
        inLanguage: locale,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
      faqSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />
      <main className="bg-[#0a0a0a] text-[#ededed]">
        <Hero />
        <Introduction />
        <Services />
        <OurTools />
        <Projects />
        <About />
        <CallToAction />
        <Faqs />
        <Contact />
      </main>
      <Footer />
        <ChatBot />
      {/*
        WhatsAppButton va FUERA del <main> para evitar
        conflictos de z-index con secciones como Projects
        que tienen cursor custom z-[9999].
        Se renderiza como "use client" por lo que funciona
        correctamente desde un Server Component.
      */}
      <WhatsAppButton />
    </>
  );
}
