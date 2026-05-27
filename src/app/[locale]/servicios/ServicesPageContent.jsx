"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Breadcrumbs from "@/app/components/(common)/Breadcrumbs";
import TitleSection from "@/app/components/(common)/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";

const ease = [0.16, 1, 0.3, 1];

export default function ServicesPageContent({ locale, services, featuredProjects }) {
  const t = useTranslations("ServicesIndexPage");
  const shouldReduceMotion = useReducedMotion();
  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: `/${locale}` },
    { label: t("breadcrumbCurrent") },
  ];

  return (
    <main className="overflow-hidden bg-[#0a0a0a] text-white">
      <ProjectCursor />

      <section className="relative px-4 pb-28 pt-32 md:px-5 md:pt-36 lg:px-10 xl:px-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_14%_16%,rgba(161,226,51,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,rgba(6,6,6,0.08),rgba(10,10,10,0.96))]" />
          <div className="absolute left-[7%] top-24 h-64 w-64 rounded-full bg-primary1/12 blur-[150px]" />
          <div className="absolute right-[10%] top-40 h-52 w-52 rounded-full bg-white/7 blur-[150px]" />
          <div className="absolute inset-x-0 top-[28rem] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl">
          <Breadcrumbs items={breadcrumbItems} />
          <TitleSection title={t("eyebrow")} />

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.56fr)] lg:items-start xl:gap-20">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-[#A1E233]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A1E233]">
                  {t("heroLabel")}
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.95, delay: 0.06, ease }}
                className="max-w-6xl text-[clamp(3.35rem,8.6vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.03em]"
              >
                <span className="block">{t("titleLine1")}</span>
                <span className="block text-[#A1E233]">{t("titleLine2")}</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.9, delay: 0.14, ease }}
                style={{ transformOrigin: "left" }}
                className="mt-10 h-px w-full max-w-3xl bg-white/8"
              />

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.85, delay: 0.16, ease }}
                className="mt-8 max-w-3xl text-base font-light leading-relaxed text-white/56 md:text-[1.22rem] md:leading-relaxed"
              >
                {t("description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.24, ease }}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {t.raw("heroPoints").map((point, index) => (
                  <div
                    key={point}
                    className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-neutral-950/72 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-colors duration-500 hover:border-primary1/14"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 top-0 text-[4.5rem] font-black leading-none text-white/[0.04]"
                    >
                      0{index + 1}
                    </span>
                    <div className="mb-4 h-px w-10 bg-gradient-to-r from-[#A1E233]/45 to-transparent" />
                    <p className="max-w-[22ch] text-[11px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-white/72">
                      {point}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.85, delay: 0.14, ease }}
              className="relative overflow-hidden rounded-[32px] border border-white/6 bg-neutral-950/82 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-md lg:sticky lg:top-28 lg:translate-y-10"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A1E233]/35 to-transparent" />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 top-2 text-[6rem] font-black leading-none text-white/[0.04]"
              >
                01
              </span>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-[#A1E233]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A1E233]">
                  {t("sidebarLabel")}
                </span>
              </div>

              <div className="space-y-4">
                {t.raw("sidebarPoints").map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary1" />
                    <p className="text-sm leading-relaxed text-white/62">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href={`/${locale}/contacto`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary1 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-[#b7ff1f]"
                >
                  <span>{t("primaryCta")}</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72 transition-colors duration-300 hover:border-primary1/20 hover:text-white"
                >
                  <span>{t("secondaryCta")}</span>
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16">
            <TitleSection title={t("servicesLabel")} />
            <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: shouldReduceMotion ? 0 : "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 1, delay: 0.05, ease }}
                  className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white"
                >
                  <span className="block">{t("servicesHeadingLine1")}</span>
                  <span className="block text-[#A1E233]">{t("servicesHeadingLine2")}</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.22, ease }}
                className="max-w-xs text-sm font-light leading-relaxed text-white/40 md:text-right"
              >
                {t("servicesHeading")}
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 1.05, delay: 0.28, ease }}
              style={{ transformOrigin: "left" }}
              className="mt-10 h-px w-full bg-white/[0.06]"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.78, delay: index * 0.06, ease }}
              >
                <Link
                  href={`/${locale}/servicios/${service.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/8 bg-neutral-950/72 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition-colors duration-500 hover:border-primary1/18"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 text-[5rem] font-black leading-none text-white/[0.04]"
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-white/22">
                      {service.shortLabel}
                    </span>
                    <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#A1E233]/40 to-transparent" />
                    <p className="mt-5 text-[1.7rem] font-semibold leading-[1.02] tracking-tight text-white transition-colors duration-300 group-hover:text-primary1">
                      {service.title}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white/48">
                      {service.description}
                    </p>
                  </div>

                  <span className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52 transition-colors duration-300 group-hover:text-primary1">
                    {t("exploreService")}
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16">
            <TitleSection title={t("projectsLabel")} />
            <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: shouldReduceMotion ? 0 : "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 1, delay: 0.05, ease }}
                  className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white"
                >
                  <span className="block">{t("projectsHeadingLine1")}</span>
                  <span className="block text-[#A1E233]">{t("projectsHeadingLine2")}</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.22, ease }}
                className="max-w-xs text-sm font-light leading-relaxed text-white/40 md:text-right"
              >
                {t("projectsHeading")}
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 1.05, delay: 0.28, ease }}
              style={{ transformOrigin: "left" }}
              className="mt-10 h-px w-full bg-white/[0.06]"
            />
          </div>

          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: index * 0.08, ease }}
              >
                <ProjectCard
                  project={project}
                  variant="featured"
                  index={index}
                  locale={locale}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
