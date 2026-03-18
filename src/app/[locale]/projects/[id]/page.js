import Footer from "@/app/components/(common)/Footer";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { getProjectById, projects } from "@/data/projects";

import ProjectDetail from "./ProjectDetail";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, id: project.id })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Projects" });
  const baseUrl = "https://synttek.com";

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
      canonical: `/${locale}/projects/${id}`,
      languages: {
        es: `/es/projects/${id}`,
        en: `/en/projects/${id}`,
        "x-default": `/es/projects/${id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/projects/${id}`,
      siteName: "Synttek",
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "article",
      images: [
        {
          url: `${baseUrl}/og/projects/${id}.jpg`,
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
      images: [`${baseUrl}/og/projects/${id}.jpg`],
    },
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

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `https://synttek.com/${locale}/projects/${project.id}`,
    author: {
      "@type": "Organization",
      name: "Synttek",
      url: "https://synttek.com",
    },
    description:
      project?.description?.short ||
      (locale === "es"
        ? "Proyecto desarrollado por Synttek."
        : "Project built by Synttek."),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
      <main>
        <ProjectDetail
          locale={locale}
          nextProject={nextProject}
          project={project}
        />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
