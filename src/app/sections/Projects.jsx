"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import TitleSection from "@/app/components/(common)/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <ProjectCursor />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,226,51,0.09),transparent_34%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.05),transparent_28%)]" />
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div ref={ref}>
            <TitleSection title={t("sectionLabel")} />
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 whitespace-pre-line text-4xl font-medium leading-[0.98] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t("sectionTitle")}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="max-w-md text-sm leading-relaxed text-white/45 md:text-base">
              {t("sectionSubtitle")}
            </p>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-xs uppercase tracking-[0.24em] text-white/65 transition-all duration-300 hover:border-primary1/40 hover:text-primary1"
            >
              <span>{t("viewAll")}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {"->"}
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
