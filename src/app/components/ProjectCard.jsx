"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export default function ProjectCard({
  project,
  variant = "grid",
  index = 0,
  locale: localeProp,
  accentMode = "default",
}) {
  const ref = useRef(null);
  const currentLocale = useLocale();
  const locale = localeProp || currentLocale;
  const t = useTranslations("Projects");
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReduced = useReducedMotion();
  const href = `/${locale}/projects/${project.id}`;
  const categoryLabel = t(`categories.${project.category}`);
  const isDesignProject =
    project.category === "Branding" ||
    project.category === "Diseño de Redes" ||
    project.services?.includes("Diseño Grafico");
  const useVioletAccent = accentMode === "projects-page" && isDesignProject;

  // tilt 3D en hover — sólo el card "featured" (el que se usa en la home),
  // JS puro para no pelear con el whileHover de framer en la imagen interna.
  const handleTiltMove = (e) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const py = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${py}deg) rotateY(${px}deg) scale(1.02)`;
    e.currentTarget.style.transition = "transform 0.1s ease-out";
  };
  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    e.currentTarget.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
  };

  if (variant === "featured") {
    return (
      <Link
        href={href}
        data-cursor-zone
        aria-label={`${project.title} - ${t("viewProject")}`}
        className="group block cursor-none"
      >
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 56 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ ...transition, delay: index * 0.12 }}
          onMouseMove={handleTiltMove}
          onMouseLeave={handleTiltLeave}
          className={cn(
            "relative overflow-hidden rounded-3xl border border-white/8 bg-neutral-900/70 backdrop-blur-sm transition-colors duration-500 hover:border-primary1/30",
            "flex flex-col md:min-h-[30rem] md:flex-row",
            index % 2 === 1 && "md:flex-row-reverse"
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-4 z-0 text-[5rem] font-semibold leading-none text-white/[0.05] md:right-8 md:top-6 md:text-[9rem]"
          >
            {project.index}
          </span>

          <div className="relative aspect-[5/4] overflow-hidden md:min-h-[30rem] md:w-[56%] md:shrink-0 md:aspect-auto">
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.035 }}
              transition={transition}
            >
              <Image
                src={project.coverImage}
                alt={`${project.title} - ${project.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, 56vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: project.accentColor }}
              />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-between gap-10 p-6 md:p-10 lg:p-12">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em]">
                <span className="font-semibold text-primary1">{categoryLabel}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span className="text-white/30">{project.year}</span>
              </div>

              <h3 className="max-w-md text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45 md:text-base">
                {project.description.short}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/50 transition-colors duration-300 group-hover:text-primary1">
                <span>{t("viewProject")}</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {"->"}
                </motion.span>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      data-cursor-zone
      data-cursor-accent={useVioletAccent ? "violet" : "primary"}
      aria-label={`${project.title} - ${t("viewProject")}`}
      className="group block cursor-none"
    >
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, delay: index * 0.08, ease: transition.ease }}
        className={cn(
          "overflow-hidden rounded-3xl border border-white/8 bg-neutral-900/60 backdrop-blur-sm transition-colors duration-500",
          useVioletAccent ? "hover:border-violet/35" : "hover:border-primary1/25"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.05 }}
            transition={transition}
          >
            <Image
              src={project.coverImage}
              alt={`${project.title} - ${project.subtitle}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <div
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-sm",
              useVioletAccent
                ? "border border-violet-hover/35 bg-violet-deep/92 text-on-violet"
                : "border border-primary1/20 bg-primary1/92 text-black"
            )}
          >
            {categoryLabel}
          </div>
          <span className="absolute bottom-4 right-4 text-xs tracking-[0.24em] text-white/25">
            {project.index}
          </span>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className={cn(
                  "text-xl font-semibold tracking-tight text-white transition-colors duration-300",
                  useVioletAccent ? "group-hover:text-violet" : "group-hover:text-primary1"
                )}
              >
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-white/40">{project.subtitle}</p>
            </div>
            <span className="shrink-0 text-xs uppercase tracking-[0.24em] text-white/25">
              {project.year}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-white/45">
            {project.description.short}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
