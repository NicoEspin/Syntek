import dynamic from "next/dynamic";
import Navbar from "@/app/components/(common)/Navbar";
import Footer from "@/app/components/(common)/Footer";
import ScopedIntlProvider from "@/app/components/ScopedIntlProvider";
import JsonLd from "@/components/JsonLd";
import VCPHero from "@/app/sections/vcp/VCPHero";
import ProcessSection from "@/app/sections/home-v2/ProcessSection";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_OG_IMAGE_ALT, SITE_OG_IMAGE_HEIGHT, SITE_OG_IMAGE_TYPE, SITE_OG_IMAGE_URL, SITE_OG_IMAGE_WIDTH, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { buildFaqPageJsonLd, buildGraphJsonLd, buildVillaCarlosPazJsonLd } from "@/lib/jsonLd";

const FloatingWidgets = dynamic(() => import("@/app/components/FloatingWidgets"));
const VCPServices = dynamic(() => import("@/app/sections/vcp/VCPServices"));
const VCPProof = dynamic(() => import("@/app/sections/vcp/VCPProof"));
const FaqV2 = dynamic(() => import("@/app/sections/home-v2/FaqV2"));
const VCPCta = dynamic(() => import("@/app/sections/vcp/VCPCta"));

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const path = "/villa-carlos-paz";
  const title = isEs
    ? "Agencia Web en Villa Carlos Paz | Synttek"
    : "Web Agency in Villa Carlos Paz | Synttek";
  const description = isEs
    ? "Desarrollamos sitios web, landing pages y software a medida para negocios de Villa Carlos Paz y la región. Presencia digital profesional que convierte visitas en consultas."
    : "We build websites, landing pages and custom software for businesses in Villa Carlos Paz and the region. A professional online presence that turns visits into inquiries.";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, path),
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      locale: isEs ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: SITE_OG_IMAGE_URL,
          secureUrl: SITE_OG_IMAGE_URL,
          width: SITE_OG_IMAGE_WIDTH,
          height: SITE_OG_IMAGE_HEIGHT,
          alt: SITE_OG_IMAGE_ALT,
          type: SITE_OG_IMAGE_TYPE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE_URL],
    },
  };
}

export default async function VillaCarlosPazPage({ params }) {
  const { locale } = await params;
  const faqTranslations = await getTranslations({ locale, namespace: "HomeV2.faq" });
  const faqs = faqTranslations.raw("items");

  const structuredData = buildGraphJsonLd([
    buildVillaCarlosPazJsonLd(),
    buildFaqPageJsonLd(faqs),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />

      <ScopedIntlProvider
        locale={locale}
        namespaces={[
          "Navbar",
          "VCP.waMessage",
          "VCP.hero",
          "VCP.services",
          "VCP.proof",
          "VCP.cta",
          "Homepage.heroCards",
          "Projects",
          "HomeV2.faq",
          "HomeV2.waMessage",
          "ChatBot",
        ]}
      >
        <Navbar />
        <main className="bg-[#0a0a0a] text-[#ededed]">
          <VCPHero />
          <VCPServices />
          <ProcessSection />
          <VCPProof />
          <FaqV2 />
          <VCPCta />
        </main>
        <FloatingWidgets />
      </ScopedIntlProvider>
      <Footer />
    </>
  );
}
