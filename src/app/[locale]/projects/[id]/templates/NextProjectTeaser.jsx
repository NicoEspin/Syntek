"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function NextProjectTeaser({
  nextProject,
  accentColor,
  accentClass = "text-primary1",
  hoverClass = "group-hover:text-primary1",
}) {
  const t = useTranslations("Projects");
  const glowColor = accentColor || nextProject.accentColor;

  return (
    <Link
      href={`/projects/${nextProject.id}`}
      data-cursor-zone
      className="group relative block cursor-none overflow-hidden border-t border-white/8"
    >
      <div className="absolute inset-0">
        <Image
          src={nextProject.coverImage}
          alt={`${nextProject.title} - ${nextProject.subtitle}`}
          fill
          sizes="100vw"
          className="object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.9),rgba(10,10,10,0.72))]" />
        <div
          className="absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: `radial-gradient(circle at 70% 45%, ${glowColor}, transparent 26%)` }}
        />
      </div>

      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 py-20 md:px-5 lg:flex-row lg:items-end lg:justify-between lg:px-10 xl:px-24">
        <div>
          <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-white/28">
            {t("detail.nextProject")}
          </span>
          <h2
            className={`text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-white transition-colors duration-500 ${hoverClass}`}
          >
            {nextProject.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
            {nextProject.description.short}
          </p>
        </div>

        <div className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] ${accentClass}`}>
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
  );
}
