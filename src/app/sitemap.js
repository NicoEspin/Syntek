import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

const baseUrl = SITE_URL;
const staticRoutes = {
  home: "2026-04-09T20:36:11.080Z",
  projects: "2026-04-09T20:36:11.080Z",
};

export default function sitemap() {
  const routes = [];

  for (const locale of routing.locales) {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: staticRoutes.home,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    });

    routes.push({
      url: `${baseUrl}/${locale}/projects`,
      lastModified: staticRoutes.projects,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/projects`,
          en: `${baseUrl}/en/projects`,
        },
      },
    });

    for (const project of projects) {
      routes.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: project.updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            es: `${baseUrl}/es/projects/${project.id}`,
            en: `${baseUrl}/en/projects/${project.id}`,
          },
        },
      });
    }
  }

  return routes;
}
