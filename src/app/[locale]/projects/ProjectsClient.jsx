"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";
import ProjectsFilterBar from "@/app/components/ProjectsFilterBar";

export default function ProjectsClient({ projects, locale }) {
  const t = useTranslations("Projects");
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10%" });

  const categories = useMemo(
    () => [...new Set(projects.map((project) => project.category))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] pb-24 pt-28 md:pt-32">
      <ProjectCursor />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(161,226,51,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_26%)]" />

      <div className="relative mx-auto max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/35 transition-colors duration-300 hover:text-primary1"
          >
            <span>{"<-"}</span>
            <span>{t("backHome")}</span>
          </Link>
        </motion.div>

        <div ref={headerRef} className="mb-14 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div className="overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 block text-[11px] uppercase tracking-[0.3em] text-primary1"
            >
              {t("pageEyebrow")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-white"
            >
              {t("pageHeading")}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-sm leading-relaxed text-white/45 md:text-base"
          >
            {t("pageIntro")}
          </motion.p>
        </div>

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <ProjectsFilterBar
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <span className="text-xs uppercase tracking-[0.24em] text-white/30">
            {filteredProjects.length.toString().padStart(2, "0")} {t("resultsLabel")}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="grid"
                index={index}
                locale={locale}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/8 bg-neutral-900/50 px-6 py-12 text-center"
          >
            <h2 className="text-xl font-semibold text-white">{t("emptyTitle")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              {t("emptyDescription")}
            </p>
          </motion.div>
        ) : null}
      </div>
    </main>
  );
}
