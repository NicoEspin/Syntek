import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";

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
      url: `${baseUrl}/${locale}/projects`,
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

  return (
    <>
      <Navbar />
      <ProjectsClient locale={locale} projects={projects} />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
