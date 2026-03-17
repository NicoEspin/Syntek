import { projects } from "@/data/projects";

const locales = ["es", "en"];
const baseUrl = "https://synttek.com";

export default function sitemap() {
  const routes = [];

  for (const locale of locales) {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    routes.push({
      url: `${baseUrl}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const project of projects) {
      routes.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}