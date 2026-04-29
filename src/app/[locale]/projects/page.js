import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ChatBot from "@/app/components/ChatBot";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";

import { getProjects } from "@/data/projects";

import ProjectsClient from "./ProjectsClient";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  const title = t("pageTitle");
  const description = t("pageDescription");
  const baseUrl = SITE_URL;
  const socialImage = `${baseUrl}/android-chrome-512x512.png`;

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

  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <ProjectsClient locale={locale} projects={projects} />
      <ChatBot />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
