import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";

const staticRoutes = {
  home: "2026-04-09T20:36:11.080Z",
  projects: "2026-04-09T20:36:11.080Z",
};

export default function sitemap() {
  const routes = [];

  for (const locale of routing.locales) {
    routes.push({
      url: getCanonicalUrl(locale),
      lastModified: staticRoutes.home,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: getLanguageAlternates(),
      },
    });

    routes.push({
      url: getCanonicalUrl(locale, "/projects"),
      lastModified: staticRoutes.projects,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: getLanguageAlternates("/projects"),
      },
    });

    for (const project of projects) {
      routes.push({
        url: getCanonicalUrl(locale, `/projects/${project.id}`),
        lastModified: project.updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: getLanguageAlternates(`/projects/${project.id}`),
        },
      });
    }
  }

  return routes;
}
