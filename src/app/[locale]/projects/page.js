import Footer from "@/app/components/(common)/Footer";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { projects } from "@/data/projects";

import ProjectsClient from "./ProjectsClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function ProjectsPage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <ProjectsClient locale={locale} projects={projects} />
      <Footer />
    </>
  );
}
