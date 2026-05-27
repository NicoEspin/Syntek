import { projects } from "@/data/projects";
import { getPrimaryServiceSlugs } from "@/data/services";
import { routing } from "@/i18n/routing";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";

const staticRoutes = {
  home: "2026-04-09T20:36:11.080Z",
  projects: "2026-04-09T20:36:11.080Z",
  services: "2026-05-25T00:00:00.000Z",
  servicesIndex: "2026-05-26T00:00:00.000Z",
  about: "2026-05-25T00:00:00.000Z",
  contact: "2026-05-25T00:00:00.000Z",
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

    routes.push({
      url: getCanonicalUrl(locale, "/servicios"),
      lastModified: staticRoutes.servicesIndex,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: getLanguageAlternates("/servicios"),
      },
    });

    routes.push({
      url: getCanonicalUrl(locale, "/sobre-nosotros"),
      lastModified: staticRoutes.about,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: getLanguageAlternates("/sobre-nosotros"),
      },
    });

    routes.push({
      url: getCanonicalUrl(locale, "/contacto"),
      lastModified: staticRoutes.contact,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: getLanguageAlternates("/contacto"),
      },
    });

    for (const slug of getPrimaryServiceSlugs()) {
      const path = `/servicios/${slug}`;

      routes.push({
        url: getCanonicalUrl(locale, path),
        lastModified: staticRoutes.services,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: {
          languages: getLanguageAlternates(path),
        },
      });
    }

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
