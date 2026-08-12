import dynamic from "next/dynamic";
import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ScopedIntlProvider from "@/app/components/ScopedIntlProvider";
import JsonLd from "@/components/JsonLd";
import AboutHero from "@/app/sections/about/AboutHero";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  SORTLIST_URL,
} from "@/lib/business";
import { buildBreadcrumbJsonLd, buildGraphJsonLd } from "@/lib/jsonLd";

const FloatingWidgets = dynamic(() => import("@/app/components/FloatingWidgets"));
const GrowthSystem = dynamic(() => import("@/app/sections/about/GrowthSystem"));
const AboutPhilosophy = dynamic(() => import("@/app/sections/about/AboutPhilosophy"));
const AboutTeam = dynamic(() => import("@/app/sections/about/AboutTeam"));
const TestimonialsSection = dynamic(() => import("@/app/sections/home-v2/TestimonialsSection"));
const AboutCta = dynamic(() => import("@/app/sections/about/AboutCta"));

const PATH = "/sobre-nosotros";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Sobre nosotros | Synttek — Villa Carlos Paz, Córdoba"
    : "About us | Synttek — Villa Carlos Paz, Córdoba";
  const description = isEs
    ? "Somos el equipo que diagnostica qué necesita tu negocio y lo construye: web, software a medida, agentes de IA y contenido, todo conectado."
    : "We're the team that diagnoses what your business needs and builds it: websites, custom software, AI agents and content, all connected.";
  const socialImage = `${SITE_URL}/android-chrome-512x512.png`;

  return {
    title: { absolute: title },
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
  const isEs = locale === "es";

  const structuredData = buildGraphJsonLd([
    {
      "@type": ["Organization", "ProfessionalService"],
      name: SITE_NAME,
      foundingDate: "2025",
      description: isEs
        ? "Agencia boutique de desarrollo web, diseño y automatizaciones fundada en Villa Carlos Paz, Córdoba, Argentina."
        : "Boutique web development, design and automation agency founded in Villa Carlos Paz, Córdoba, Argentina.",
      url: SITE_URL,
      email: BUSINESS_EMAIL,
      areaServed: [
        { "@type": "City", name: "Villa Carlos Paz" },
        { "@type": "State", name: BUSINESS_LOCATION.region },
        { "@type": "Country", name: "Argentina" },
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
      knowsAbout: [
        "Desarrollo web con Next.js y React",
        "Landing pages de alta conversión",
        "Automatizaciones con n8n",
        "Agentes de inteligencia artificial para negocios",
        "Ecommerce",
        "Branding digital",
        "Software a medida",
      ],
      employee: [
        { "@type": "Person", name: "Nicolás Espín", jobTitle: "Fundador, Desarrollo y Estrategia" },
        { "@type": "Person", name: "Antto Cattalano", jobTitle: "Diseño y Contenido" },
      ],
      sameAs: [INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, SORTLIST_URL],
    },
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      {
        name: isEs ? "Sobre nosotros" : "About us",
        item: getCanonicalUrl(locale, PATH),
      },
    ]),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <ScopedIntlProvider
        locale={locale}
        namespaces={["Navbar", "AboutPage", "HomeV2.testimonials", "ChatBot"]}
      >
        <Navbar floating />
        <main className="overflow-hidden bg-[#0a0a0a] text-[#ededed]">
          <AboutHero />
          <GrowthSystem />
          <AboutPhilosophy />
          <AboutTeam />
          <TestimonialsSection />
          <AboutCta />
        </main>
        <FloatingWidgets />
      </ScopedIntlProvider>
      <Footer />
    </>
  );
}
