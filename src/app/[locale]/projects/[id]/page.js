import Footer from "@/app/components/(common)/Footer";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { getProjectById, projects } from "@/data/projects";

import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, id: project.id }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Projects" });

  return {
    title: t("detailPageTitle", { title: project.title }),
    description: project.description.short,
  };
}

export default async function ProjectPage({ params }) {
  const { locale, id } = await params;

  setRequestLocale(locale);

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((entry) => entry.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <ProjectDetail locale={locale} nextProject={nextProject} project={project} />
      <Footer />
    </>
  );
}
