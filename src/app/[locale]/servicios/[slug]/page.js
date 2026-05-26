import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ChatBot from "@/app/components/ChatBot";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/business";
import { getProjects } from "@/data/projects";
import {
  getPrimaryServiceSlugs,
  getPrimaryServices,
  getServiceBySlug,
} from "@/data/services";

import ServiceDetail from "./ServiceDetail";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPrimaryServiceSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    return {};
  }

  const socialImage = `${SITE_URL}/android-chrome-512x512.png`;
  const path = `/servicios/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: getCanonicalUrl(locale, path),
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 512,
          height: 512,
          alt: service.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [socialImage],
    },
  };
}

export default async function ServicePage({ params }) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  setRequestLocale(locale);

  const projects = getProjects(locale);
  const relatedProjects = projects.filter((project) =>
    service.relatedProjectIds.includes(project.id),
  );
  const relatedServices = getPrimaryServices(locale).filter(
    (entry) =>
      entry.slug !== service.slug &&
      service.relatedServiceSlugs.includes(entry.slug),
  );

  const t = await getTranslations({ locale, namespace: "ServicePages" });
  const path = `/servicios/${slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.shortLabel,
        serviceType: service.title,
        description: service.description,
        url: `${SITE_URL}/${locale}${path}`,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          email: BUSINESS_EMAIL,
          sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Argentina",
          },
          {
            "@type": "AdministrativeArea",
            name: BUSINESS_LOCATION.region,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
            name: t("breadcrumbsServices"),
            item: `${SITE_URL}/${locale}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortLabel,
            item: `${SITE_URL}/${locale}${path}`,
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
      <ServiceDetail
        locale={locale}
        service={service}
        relatedProjects={relatedProjects}
        relatedServices={relatedServices}
      />
      <ChatBot />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
