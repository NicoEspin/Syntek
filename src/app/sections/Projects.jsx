import { getTranslations } from "next-intl/server";

import ProjectsClient from "@/app/sections/ProjectsClient";
import { getFeaturedProjects } from "@/data/projects";

export default async function Projects({ locale }) {
  const t = await getTranslations({ locale, namespace: "Projects" });

  return (
    <ProjectsClient
      locale={locale}
      featuredProjects={getFeaturedProjects(locale)}
      copy={{
        sectionLabel: t("sectionLabel"),
        headlineLine1: t("headline-line1"),
        headlineLine2: t("headline-line2"),
        sectionSubtitle: t("sectionSubtitle"),
        viewAll: t("viewAll"),
        viewProject: t("viewProject"),
      }}
    />
  );
}
