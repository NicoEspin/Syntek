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
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import {
  buildFaqPageJsonLd,
  buildGraphJsonLd,
  buildOrganizationJsonLd,
  buildProfessionalServiceJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/jsonLd";

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

  const faqs = Array.from({ length: 10 }, (_, index) => ({
    question: faqTranslations(`question${index + 1}`),
    answer: faqTranslations(`answer${index + 1}`),
  }));

  const structuredData = buildGraphJsonLd([
    buildOrganizationJsonLd(),
    buildProfessionalServiceJsonLd(),
    buildWebsiteJsonLd(locale),
    buildFaqPageJsonLd(faqs),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />

      <Navbar />
      <main className="bg-[#0a0a0a] text-[#ededed]">
        <Hero />
        <Introduction />
        <Services />
        <OurTools />
        <Projects locale={locale} />
        <About />
        <CallToAction />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
