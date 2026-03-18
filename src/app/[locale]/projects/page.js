import Footer from "@/app/components/(common)/Footer";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { projects } from "@/data/projects";

import ProjectsClient from "./ProjectsClient";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  const title = t("pageTitle");
  const description = t("pageDescription");
  const baseUrl = "https://synttek.com";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        es: "/es/projects",
        en: "/en/projects",
        "x-default": "/es/projects",
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/projects`,
      siteName: "Synttek",
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og/projects-og.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og/projects-og.jpg`],
    },
  };
}

export default async function ProjectsPage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <main>
        <ProjectsClient locale={locale} projects={projects} />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
