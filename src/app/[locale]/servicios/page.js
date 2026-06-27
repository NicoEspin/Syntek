import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getFeaturedProjects } from "@/data/projects";
import { getPrimaryServices } from "@/data/services";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildGraphJsonLd,
  buildOrganizationJsonLd,
  buildProfessionalServiceJsonLd,
} from "@/lib/jsonLd";

import ServicesPageContent from "./ServicesPageContent";

const PATH = "/servicios";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Servicios de desarrollo, branding y automatización | Synttek"
    : "Development, branding and automation services | Synttek";
  const description = isEs
    ? "Explorá los servicios de Synttek: desarrollo web, landing pages, software a medida, automatizaciones, ecommerce y branding."
    : "Explore Synttek services across web development, landing pages, custom software, automations, ecommerce and branding.";
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

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const services = getPrimaryServices(locale);
  const featuredProjects = getFeaturedProjects(locale);

  const structuredData = buildGraphJsonLd([
    buildCollectionPageJsonLd({
      name: locale === "es" ? "Servicios Synttek" : "Synttek Services",
      path: `/${locale}${PATH}`,
      description:
        locale === "es"
          ? "Hub comercial de servicios de Synttek."
          : "Commercial services hub for Synttek.",
      items: services.map((service) => ({
        "@type": "Service",
        name: service.shortLabel,
        serviceType: service.title,
        url: `${SITE_URL}/${locale}/servicios/${service.slug}`,
      })),
    }),
    buildOrganizationJsonLd(),
    buildProfessionalServiceJsonLd(),
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      {
        name: locale === "es" ? "Servicios" : "Services",
        item: `${SITE_URL}/${locale}${PATH}`,
      },
    ]),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar floating />
      <ServicesPageContent
        locale={locale}
        services={services}
        featuredProjects={featuredProjects}
      />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
