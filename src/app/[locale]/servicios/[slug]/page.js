import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
  buildGraphJsonLd,
  buildServiceJsonLd,
} from "@/lib/jsonLd";
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
      url: getCanonicalUrl(locale, path),
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

  const structuredData = buildGraphJsonLd([
    buildServiceJsonLd({
      name: service.shortLabel,
      title: service.title,
      description: service.description,
      path: `/${locale}${path}`,
    }),
    buildFaqPageJsonLd(service.faqs),
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      {
        name: t("breadcrumbsServices"),
        item: getCanonicalUrl(locale, "/servicios"),
      },
      { name: service.shortLabel, item: getCanonicalUrl(locale, path) },
    ]),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar floating />
      <ServiceDetail
        locale={locale}
        service={service}
        relatedProjects={relatedProjects}
        relatedServices={relatedServices}
      />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
