"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import Lightbox from "@/app/components/Lightbox";
import PostCarousel from "@/app/components/PostCarousel";
import ProjectCursor from "@/app/components/ProjectCursor";
import { getContrastTextColor } from "@/lib/utils";

import NextProjectTeaser from "./NextProjectTeaser";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

export default function SocialDesignProjectDetail({ project, nextProject }) {
  const t = useTranslations("Projects");
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-8% 0px" });
  const [lightbox, setLightbox] = useState(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  const openLightbox = (postIndex, imageIndex = 0) => setLightbox({ postIndex, imageIndex });
  const closeLightbox = () => setLightbox(null);
  const activePost = lightbox ? project.posts[lightbox.postIndex] : null;
  const categoryTextColor = getContrastTextColor(project.accentColor);

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ProjectCursor label={t("viewProject")} />

      <section ref={heroRef} className="relative flex min-h-[64vh] items-end overflow-hidden md:min-h-[72vh]">
        <motion.div className="absolute inset-0" style={{ y: heroY, opacity: heroOpacity }}>
          <Image
            src={project.heroImage}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.32),rgba(10,10,10,0.18)_36%,rgba(10,10,10,0.94))]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(circle at 72% 24%, ${project.accentColor}, transparent 32%)` }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 pb-12 pt-28 md:px-5 md:pb-16 lg:px-10 xl:px-24">
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
              transition={{ duration: 0.7, delay: 0.16, ease: EASE_PREMIUM }}
              className="rounded-full border border-white/12 bg-black/55 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/78 backdrop-blur-sm"
            >
              {project.client} · {project.year}
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: EASE_PREMIUM }}
              className="max-w-4xl text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.94] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: EASE_PREMIUM }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_PREMIUM }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-2 py-10 md:px-3 md:py-14 lg:px-4 xl:px-6">
        <div className="mb-8 flex items-center justify-between px-2 md:px-3">
          <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">
            {t("detail.overview")}
          </span>
          <span className="font-mono text-[11px] text-white/25">
            {project.posts.length.toString().padStart(2, "0")}
          </span>
        </div>

        <p className="mb-10 max-w-2xl px-2 text-base leading-relaxed text-white/60 md:px-3 md:text-lg">
          {project.description.long}
        </p>

        <motion.div
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="-mx-2 grid grid-cols-1 gap-1 md:mx-0 md:grid-cols-3"
        >
          {project.posts.map((post, index) => {
            const aspectClass = post.format === "4:5" ? "aspect-[4/5]" : "aspect-square";
            const isCarousel = post.type === "carousel" && post.images.length > 1;
            const number = (index + 1).toString().padStart(2, "0");
            const alts = post.images.map((_, i) =>
              t("detail.postAlt", { title: project.title, index: index + 1 }) +
              (post.images.length > 1 ? ` (${i + 1})` : "")
            );

            return (
              <motion.div
                key={post.id}
                variants={tileVariants}
                className={`group relative overflow-hidden ${aspectClass}`}
              >
                {isCarousel ? (
                  <PostCarousel
                    images={post.images}
                    alts={alts}
                    accentColor={project.accentColor}
                    carouselLabel={`${project.title} — ${t("detail.carouselBadge")} ${number}`}
                    hintText={t("detail.carouselHint")}
                    counterText={(current, total) => t("detail.slideCounter", { current, total })}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    onImageOpen={(imageIndex) => openLightbox(index, imageIndex)}
                  />
                ) : (
                  <motion.button
                    type="button"
                    onClick={() => openLightbox(index, 0)}
                    aria-label={t("detail.expandImage", { title: project.title })}
                    className="relative block h-full w-full cursor-zoom-in"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: EASE_PREMIUM }}
                  >
                    <Image
                      src={post.images[0]}
                      alt={alts[0]}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </motion.button>
                )}

                <span className="pointer-events-none absolute bottom-2.5 left-2.5 font-mono text-[10px] text-white/55 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {number}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <AnimatePresence>
        {activePost ? (
          <Lightbox
            key="lightbox"
            images={activePost.images}
            alts={activePost.images.map((_, i) =>
              t("detail.postAlt", { title: project.title, index: lightbox.postIndex + 1 }) +
              (activePost.images.length > 1 ? ` (${i + 1})` : "")
            )}
            index={lightbox.imageIndex}
            onIndexChange={(imageIndex) => setLightbox((prev) => (prev ? { ...prev, imageIndex } : prev))}
            onClose={closeLightbox}
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
