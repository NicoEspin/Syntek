"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useMemo, useRef, useState } from "react";

import Lightbox from "@/app/components/Lightbox";
import ProjectCursor from "@/app/components/ProjectCursor";
import { getServiceBySlug } from "@/data/services";
import { getContrastTextColor } from "@/lib/utils";

import NextProjectTeaser from "./NextProjectTeaser";

const transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

export default function DefaultProjectDetail({ project, nextProject, locale }) {
  const t = useTranslations("Projects");
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-10%" });
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
  const categoryTextColor = getContrastTextColor(project.accentColor);

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
              transition={{ duration: 0.7, delay: 0.1, ease: transition.ease }}
              className="rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] backdrop-blur-sm"
              style={{
                backgroundColor: project.accentColor,
                borderColor: project.accentColor,
                color: categoryTextColor,
              }}
            >
              {t(`categories.${project.category}`)}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: transition.ease }}
              className="rounded-full border border-white/12 bg-black/55 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/78 backdrop-blur-sm"
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

            {project.demoVideo ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={contentInView ? { opacity: 1, y: 0 } : undefined}
                transition={transition}
                className="relative mb-8 overflow-hidden rounded-3xl border border-white/8 bg-black md:mb-10"
              >
                <div className="relative aspect-video">
                  <video
                    src={project.demoVideo}
                    poster={project.heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={t("detail.demoVideoAlt", { title: project.title })}
                    className="h-full w-full object-cover"
                  />

                  <span className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white/78 backdrop-blur-sm">
                    {t("detail.demoVideo")}
                  </span>
                </div>
              </motion.div>
            ) : null}

            <div className="space-y-8 md:space-y-10">
              {project.gallery.map((image, index) => (
                <motion.button
                  key={image}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={t("detail.expandImage", { title: project.title })}
                  initial={{ opacity: 0, y: 40 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ ...transition, delay: index * 0.08 }}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-white/8"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={image}
                      alt={t("detail.galleryImageAlt", {
                        title: project.title,
                        index: index + 1,
                      })}
                      fill
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                </motion.button>
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
                            className="inline-flex items-center justify-between rounded-2xl border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:border-primary1/20 hover:text-primary1"
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

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <Lightbox
            key="lightbox"
            images={project.gallery}
            alts={project.gallery.map((_, i) =>
              t("detail.galleryImageAlt", { title: project.title, index: i + 1 })
            )}
            index={lightboxIndex}
            onIndexChange={setLightboxIndex}
            onClose={() => setLightboxIndex(null)}
            closeLabel={t("detail.closeLightbox")}
            prevLabel={t("detail.previousImage")}
            nextLabel={t("detail.nextImage")}
            counterText={(current, total) => t("detail.slideCounter", { current, total })}
          />
        ) : null}
      </AnimatePresence>

      <NextProjectTeaser nextProject={nextProject} />
    </main>
  );
}
