import dynamic from "next/dynamic";
import Navbar from "@/app/components/(common)/Navbar";
import Footer from "@/app/components/(common)/Footer";
import JsonLd from "@/components/JsonLd";
import HeroV2 from "@/app/sections/home-v2/HeroV2";
import Projects from "@/app/sections/Projects";
import ProcessSection from "@/app/sections/home-v2/ProcessSection";
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

const FloatingWidgets = dynamic(() => import("@/app/components/FloatingWidgets"));
const Introduction = dynamic(() => import("@/app/sections/Introduction"));
const TransformSection = dynamic(() => import("@/app/sections/home-v2/TransformSection"));
const SolutionsSection = dynamic(() => import("@/app/sections/home-v2/SolutionsSection"));
const Services = dynamic(() => import("@/app/sections/Services"));
const FaqV2 = dynamic(() => import("@/app/sections/home-v2/FaqV2"));
const CtaFinalV2 = dynamic(() => import("@/app/sections/home-v2/CtaFinalV2"));
const Contact = dynamic(() => import("@/app/sections/Contact"));

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
  const faqTranslations = await getTranslations({ locale, namespace: "HomeV2.faq" });
  const faqs = faqTranslations.raw("items");

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
        <HeroV2 />
        <Introduction />
        <TransformSection />
        <SolutionsSection />
        <Services />
        <Projects locale={locale} />
        <ProcessSection />
        <FaqV2 />
        <CtaFinalV2 />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
