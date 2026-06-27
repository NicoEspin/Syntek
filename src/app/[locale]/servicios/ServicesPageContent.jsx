"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import Breadcrumbs from "@/app/components/(common)/Breadcrumbs";
import TitleSection from "@/app/components/(common)/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";

const ease = [0.16, 1, 0.3, 1];

const ACCENT_COLORS = [
  "#A1E233", // desarrollo-web — lima (marca)
  "#5B8DEF", // landing-pages — azul eléctrico
  "#9B6DFF", // software-a-medida — violeta
  "#FFB547", // automatizaciones — ámbar
  "#E8593C", // ecommerce — coral
  "#F0E06A", // branding — dorado
];

export default function ServicesPageContent({ locale, services, featuredProjects }) {
  const t = useTranslations("ServicesIndexPage");
  const shouldReduceMotion = useReducedMotion();
  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: "/" },
    { label: t("breadcrumbCurrent") },
  ];

  return (
    <main className="overflow-hidden bg-[#0a0a0a] text-white">
      <ProjectCursor label={t("viewProject")} />

      <section className="relative px-4 pb-28 pt-32 md:px-5 md:pt-36 lg:px-10 xl:px-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
              maskImage: "radial-gradient(ellipse 90% 55% at 50% 0%, black 20%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 55% at 50% 0%, black 20%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[52rem] bg-[radial-gradient(ellipse_58%_42%_at_10%_0%,rgba(161,226,51,0.22),transparent_52%),radial-gradient(ellipse_42%_32%_at_90%_8%,rgba(255,255,255,0.06),transparent_55%),linear-gradient(180deg,rgba(6,6,6,0.0),rgba(10,10,10,1.0)_82%)]" />
          <div className="absolute left-[3%] top-12 h-[22rem] w-[22rem] rounded-full bg-primary1/8 blur-[160px]" />
          <div className="absolute right-[6%] top-28 h-[16rem] w-[16rem] rounded-full bg-white/4 blur-[160px]" />
          {/* Ghost number */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-[4%] top-[6%] select-none font-black leading-none tabular-nums text-white/[0.025]"
            style={{ fontSize: "clamp(14rem, 22vw, 28rem)", lineHeight: 1 }}
          >
            01
          </span>
        </div>

        <div className="relative mx-auto max-w-screen-2xl">
          <Breadcrumbs items={breadcrumbItems} />
          <TitleSection title={t("eyebrow")} />

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.56fr)] lg:items-start xl:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.72, delay: 0.05, ease }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-px w-6 bg-[#A1E233]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A1E233]">
                  {t("heroLabel")}
                </span>
              </motion.div>

              {/* H1 — line clip reveal per line */}
              <h1 className="max-w-6xl text-[clamp(3.35rem,8.6vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.03em]">
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: shouldReduceMotion ? 0 : "108%", skewY: shouldReduceMotion ? 0 : 1.2 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 1.05, delay: 0.14, ease }}
                    className="block"
                  >
                    {t("titleLine1")}
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: shouldReduceMotion ? 0 : "108%", skewY: shouldReduceMotion ? 0 : 1.2 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 1.05, delay: 0.27, ease }}
                    className="block text-[#A1E233]"
                  >
                    {t("titleLine2")}
                  </motion.span>
                </span>
              </h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 1.0, delay: 0.42, ease }}
                style={{ transformOrigin: "left" }}
                className="mt-10 h-px w-full max-w-3xl bg-white/8"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.85, delay: 0.52, ease }}
                className="mt-8 max-w-3xl text-base font-light leading-relaxed text-white/56 md:text-[1.22rem] md:leading-relaxed"
              >
                {t("description")}
              </motion.p>

              {/* Hero points — individually staggered */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {t.raw("heroPoints").map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, delay: 0.58 + index * 0.1, ease }}
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
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar — diagonal entry */}
            <motion.aside
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 36, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.95, delay: 0.26, ease }}
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
                {t.raw("sidebarPoints").map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: 0.4 + i * 0.08, ease }}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary1" />
                    <p className="text-sm leading-relaxed text-white/62">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href="/contacto"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary1 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-[#b7ff1f]"
                >
                  <span>{t("primaryCta")}</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/projects"
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
            {services.map((service, index) => {
              const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.78, delay: index * 0.06, ease }}
                >
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-neutral-950/80 p-7 shadow-[0_16px_48px_rgba(0,0,0,0.28)] transition-colors duration-500 hover:border-white/[0.13]"
                  >
                    {/* Accent top bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: shouldReduceMotion ? 0.2 : 1, delay: 0.12 + index * 0.09, ease }}
                      style={{ backgroundColor: accent, transformOrigin: "left" }}
                      className="absolute inset-x-0 top-0 h-[2px]"
                    />

                    {/* Hover glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse 70% 45% at 10% 0%, ${accent}0C, transparent 65%)` }}
                    />

                    {/* Number + label */}
                    <div className="relative z-10 mb-6 flex items-center justify-between">
                      <span
                        className="font-mono text-[11px] font-semibold tracking-[0.22em]"
                        style={{ color: accent }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.26em] text-white/16">
                        {service.shortLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mb-4 flex-1 text-[1.6rem] font-semibold leading-[1.07] tracking-tight text-white">
                      {service.title}
                    </h3>

                    {/* Divider */}
                    <div className="relative z-10 mb-5 h-px w-full bg-white/[0.05]" />

                    {/* Description */}
                    <p className="relative z-10 mb-8 text-sm leading-relaxed text-white/38">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28 transition-colors duration-300 group-hover:text-white/60">
                        {t("exploreService")}
                      </span>
                      <span
                        className="inline-flex size-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: `${accent}28`, color: accent }}
                      >
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
