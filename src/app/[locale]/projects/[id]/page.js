import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ChatBot from "@/app/components/ChatBot";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";

import { getProjectById, getProjects, projects } from "@/data/projects";

import ProjectDetail from "./ProjectDetail";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, id: project.id })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const project = getProjectById(id, locale);

  if (!project) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Projects" });
  const baseUrl = SITE_URL;

  const title = t("detailPageTitle", { title: project.title });
  const description =
    project?.description?.short ||
    (locale === "es"
      ? "Proyecto desarrollado por Synttek."
      : "Project built by Synttek.");

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, `/projects/${id}`),
      languages: getLanguageAlternates(`/projects/${id}`),
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/projects/${id}`,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "article",
      images: [
        {
          url: `${baseUrl}${project.coverImage}`,
          width: 1600,
          height: 1000,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${project.coverImage}`],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { locale, id } = await params;
  const localizedProjects = getProjects(locale);

  setRequestLocale(locale);

  const project = getProjectById(id, locale);

  if (!project) {
    notFound();
  }

  const currentIndex = localizedProjects.findIndex((entry) => entry.id === project.id);
  const nextProject = localizedProjects[(currentIndex + 1) % localizedProjects.length];

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${SITE_URL}/${locale}/projects/${project.id}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description:
      project?.description?.short ||
      (locale === "es"
        ? "Proyecto desarrollado por Synttek."
        : "Project built by Synttek."),
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
      <Navbar floating />
      <ProjectDetail
        locale={locale}
        nextProject={nextProject}
        project={project}
      />
      <ChatBot />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
