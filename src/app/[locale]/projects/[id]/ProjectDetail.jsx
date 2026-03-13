"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useRef } from "react";

import ProjectCursor from "@/app/components/ProjectCursor";

const transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

export default function ProjectDetail({ project, nextProject, locale }) {
  const t = useTranslations("Projects");
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.18]);

  const translatedServices = useMemo(
    () =>
      project.services.map((service) => {
        try {
          return t(`categories.${service}`);
        } catch {
          return service;
        }
      }),
    [project.services, t]
  );

  const sidebarItems = [
    { label: t("detail.client"), value: project.client },
    { label: t("detail.year"), value: project.year },
  ];

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ProjectCursor />

      <section ref={heroRef} className="relative flex min-h-[88vh] items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, opacity: heroOpacity }}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.28),rgba(10,10,10,0.2)_38%,rgba(10,10,10,0.92))]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(circle at 70% 25%, ${project.accentColor}, transparent 30%)` }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 pb-16 pt-28 md:px-5 md:pb-20 lg:px-10 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: transition.ease }}
            className="mb-8"
          >
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/45 transition-colors duration-300 hover:text-primary1"
            >
              <span>{t("backToProjects")}</span>
            </Link>
          </motion.div>

          <div className="mb-6 flex flex-wrap items-center gap-3 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: transition.ease }}
              className="rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em]"
              style={{ color: project.accentColor, borderColor: `${project.accentColor}55` }}
            >
              {t(`categories.${project.category}`)}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: transition.ease }}
              className="text-[11px] uppercase tracking-[0.28em] text-white/35"
            >
              {project.year}
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 72 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: transition.ease }}
              className="max-w-5xl text-[clamp(3.2rem,10vw,8rem)] font-semibold leading-[0.92] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: transition.ease }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      <section ref={contentRef} className="mx-auto max-w-screen-2xl px-4 py-20 md:px-5 lg:px-10 xl:px-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={contentInView ? { opacity: 1, y: 0 } : undefined}
              transition={transition}
              className="mb-14 max-w-3xl"
            >
              <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-primary1">
                {t("detail.overview")}
              </span>
              <p className="text-lg leading-relaxed text-white/72 md:text-[1.4rem] md:leading-relaxed">
                {project.description.long}
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 40 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ ...transition, delay: index * 0.08 }}
                  className={index === 0 ? "relative overflow-hidden rounded-3xl md:col-span-2" : "relative overflow-hidden rounded-3xl"}
                >
                  <div className={index === 0 ? "relative aspect-[16/9]" : "relative aspect-[4/5] md:aspect-[4/3]"}>
                    <Image
                      src={image}
                      alt={t("detail.galleryImageAlt", {
                        title: project.title,
                        index: index + 1,
                      })}
                      fill
                      sizes={index === 0 ? "(max-width: 1024px) 100vw, 70vw" : "(max-width: 768px) 100vw, 35vw"}
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <aside>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={contentInView ? { opacity: 1, x: 0 } : undefined}
              transition={{ ...transition, delay: 0.12 }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="rounded-3xl border border-white/8 bg-neutral-900/65 p-6 backdrop-blur-sm">
                <div className="space-y-6">
                  {sidebarItems.map((item) => (
                    <div key={item.label}>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/25">
                        {item.label}
                      </span>
                      <p className="text-sm text-white/78">{item.value}</p>
                    </div>
                  ))}

                  <div>
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/25">
                      {t("detail.services")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {translatedServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/55"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/25">
                      {t("detail.technologies")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary1/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-primary1/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary1 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition-colors duration-300 hover:bg-[#b7ff1f]"
                  >
                    <span>{t("detail.visitSite")}</span>
                    <span>{"->"}</span>
                  </a>
                ) : null}
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      <Link
        href={`/${locale}/projects/${nextProject.id}`}
        data-cursor-zone
        className="group relative block cursor-none overflow-hidden border-t border-white/8"
      >
        <div className="absolute inset-0">
          <Image
            src={nextProject.coverImage}
            alt={nextProject.title}
            fill
            sizes="100vw"
            className="object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.9),rgba(10,10,10,0.72))]" />
          <div
            className="absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-30"
            style={{ background: `radial-gradient(circle at 70% 45%, ${nextProject.accentColor}, transparent 26%)` }}
          />
        </div>

        <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 py-20 md:px-5 lg:flex-row lg:items-end lg:justify-between lg:px-10 xl:px-24">
          <div>
            <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-white/28">
              {t("detail.nextProject")}
            </span>
            <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-white transition-colors duration-500 group-hover:text-primary1">
              {nextProject.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
              {nextProject.description.short}
            </p>
          </div>

          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-primary1">
            <span>{t("viewProject")}</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {"->"}
            </motion.span>
          </div>
        </div>
      </Link>
    </main>
  );
}
