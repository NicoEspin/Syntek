import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates, getLocalizedPath } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildCreativeWorkJsonLd,
  buildGraphJsonLd,
  buildItemListJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/jsonLd";

import { getProjects } from "@/data/projects";

import ProjectsClient from "./ProjectsClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  const title = t("pageTitle");
  const description = t("pageDescription");
  const baseUrl = SITE_URL;
  const socialImage = `${baseUrl}/android-chrome-512x512.png`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, "/projects"),
      languages: getLanguageAlternates("/projects"),
    },
    openGraph: {
      title,
      description,
      url: getCanonicalUrl(locale, "/projects"),
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_AR" : "en_US",
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

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  const projects = getProjects(locale);
  const t = await getTranslations({ locale, namespace: "Projects" });
  const path = getLocalizedPath(locale, "/projects");

  const structuredData = buildGraphJsonLd([
    buildCollectionPageJsonLd({
      name: t("pageTitle"),
      path,
      description: t("pageDescription"),
      items: buildItemListJsonLd(
        projects.map((project) => ({
          url: getCanonicalUrl(locale, `/projects/${project.id}`),
          name: project.title,
        })),
      ),
    }),
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: getCanonicalUrl(locale) },
      { name: t("pageTitle"), item: getCanonicalUrl(locale, "/projects") },
    ]),
    buildOrganizationJsonLd(),
    buildWebsiteJsonLd(locale),
    ...projects.map((project) =>
      buildCreativeWorkJsonLd({
        name: project.title,
        description: project.description.short,
        url: getCanonicalUrl(locale, `/projects/${project.id}`),
        image: `${SITE_URL}${project.coverImage}`,
        dateModified: project.updatedAt,
        locale,
      }),
    ),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar />
      <ProjectsClient locale={locale} projects={projects} />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
