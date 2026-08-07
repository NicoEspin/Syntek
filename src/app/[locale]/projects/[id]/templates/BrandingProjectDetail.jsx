"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useRef } from "react";

import ProjectCursor from "@/app/components/ProjectCursor";
import { getServiceBySlug } from "@/data/services";
import { getContrastTextColor } from "@/lib/utils";

import NextProjectTeaser from "./NextProjectTeaser";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];
const VIOLET = "#864FFE";
const transition = { duration: 0.9, ease: EASE_PREMIUM };

// Cada slice es un recorte contiguo de una misma "sábana" — se apilan sin gap,
// radio ni borde propios para que la imagen se reconstruya sin costuras al armarse.
function sabanaGroupVariants(prefersReduced) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.1,
        delayChildren: prefersReduced ? 0 : 0.05,
      },
    },
  };
}

function sabanaSliceVariants(index, prefersReduced) {
  const fromX = prefersReduced ? 0 : index % 2 === 0 ? -48 : 48;
  return {
    hidden: { opacity: 0, x: fromX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReduced ? 0.01 : 0.8, ease: EASE_PREMIUM },
    },
  };
}

export default function BrandingProjectDetail({ project, nextProject, locale }) {
  const t = useTranslations("Projects");
  const prefersReduced = useReducedMotion();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-10%" });
  const sabanaRef = useRef(null);
  const sabanaInView = useInView(sabanaRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.18]);

  const bannerImages = project.bannerGallery?.length ? project.bannerGallery : project.gallery;

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

  const relatedServiceCards = useMemo(
    () =>
      (project.relatedServiceSlugs || [])
        .map((slug) => getServiceBySlug(slug, locale))
        .filter(Boolean),
    [locale, project.relatedServiceSlugs],
  );

  const sidebarItems = [
    { label: t("detail.client"), value: project.client },
    { label: t("detail.year"), value: project.year },
  ];

  const paletteSwatches = [
    project.accentColor,
    `${project.accentColor}99`,
    `${project.accentColor}4D`,
  ];
  const categoryTextColor = getContrastTextColor(VIOLET);

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ProjectCursor label={t("viewProject")} />

      <section ref={heroRef} className="relative flex min-h-[88vh] items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, opacity: heroOpacity }}>
          <Image
            src={project.heroImage}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.3),rgba(10,10,10,0.22)_38%,rgba(10,10,10,0.94))]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{ background: `radial-gradient(circle at 72% 24%, ${VIOLET}, transparent 32%)` }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 pb-16 pt-28 md:px-5 md:pb-20 lg:px-10 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE_PREMIUM }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/78 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:text-white"
            >
              <span>{t("backToProjects")}</span>
            </Link>
          </motion.div>

          <div className="mb-6 flex flex-wrap items-center gap-3 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
              className="rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] backdrop-blur-sm"
              style={{
                backgroundColor: VIOLET,
                borderColor: VIOLET,
                color: categoryTextColor,
              }}
            >
              {t(`categories.${project.category}`)}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE_PREMIUM }}
              className="rounded-full border border-white/12 bg-black/55 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/78 backdrop-blur-sm"
            >
              {project.year}
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 72 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: EASE_PREMIUM }}
              className="max-w-5xl text-[clamp(3.2rem,10vw,8rem)] font-semibold leading-[0.92] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: EASE_PREMIUM }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: EASE_PREMIUM }}
            className="mt-8 flex items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
              {t("detail.brandPalette")}
            </span>
            <div className="flex items-center gap-1.5">
              {paletteSwatches.map((color, i) => (
                <span
                  key={`${color}-${i}`}
                  className="h-4 w-4 rounded-full border border-white/15"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </motion.div>
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
              <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-violet">
                {t("detail.overview")}
              </span>
              <p className="text-lg leading-relaxed text-white/72 md:text-[1.4rem] md:leading-relaxed">
                {project.description.long}
              </p>
            </motion.div>

            <div className="relative">
              <div
                className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-[0.12] blur-3xl"
                style={{ backgroundColor: VIOLET }}
                aria-hidden="true"
              />
              <motion.div
                ref={sabanaRef}
                variants={sabanaGroupVariants(prefersReduced)}
                initial="hidden"
                animate={sabanaInView ? "visible" : "hidden"}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-violet/20"
              >
                {bannerImages.map((image, index) => (
                  <motion.div
                    key={image}
                    variants={sabanaSliceVariants(index, prefersReduced)}
                    className="relative w-full"
                  >
                    <Image
                      src={image}
                      alt={t("detail.galleryImageAlt", {
                        title: project.title,
                        index: index + 1,
                      })}
                      width={1600}
                      height={1200}
                      sizes="(max-width: 1024px) 100vw, 90vw"
                      className="h-auto w-full object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <aside>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={contentInView ? { opacity: 1, x: 0 } : undefined}
              transition={{ ...transition, delay: 0.12 }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="rounded-3xl border border-violet/15 bg-neutral-900/65 p-6 backdrop-blur-sm">
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
                          className="rounded-full border border-violet/20 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-violet/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {relatedServiceCards.length > 0 ? (
                    <div>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/25">
                        {t("detail.relatedServices")}
                      </span>
                      <div className="flex flex-col gap-2">
                        {relatedServiceCards.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/servicios/${service.slug}`}
                            className="inline-flex items-center justify-between rounded-2xl border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:border-violet/30 hover:text-violet"
                          >
                            <span>{service.shortLabel}</span>
                            <span>{"->"}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-on-violet transition-colors duration-300 hover:bg-violet-hover"
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

      <NextProjectTeaser
        nextProject={nextProject}
        accentColor={VIOLET}
        accentClass="text-violet"
        hoverClass="group-hover:text-violet"
      />
    </main>
  );
}
