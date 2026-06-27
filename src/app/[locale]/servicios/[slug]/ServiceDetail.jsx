"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";
import Breadcrumbs from "@/app/components/(common)/Breadcrumbs";
import TitleSection from "@/app/components/(common)/TitleSection";

const ease = [0.16, 1, 0.3, 1];

const SERVICE_ACCENT_MAP = {
  "desarrollo-web": "#A1E233",
  "landing-pages": "#5B8DEF",
  "software-a-medida": "#9B6DFF",
  "automatizaciones": "#FFB547",
  "ecommerce": "#E8593C",
  "branding": "#F0E06A",
};

const RELATED_ACCENTS = ["#A1E233", "#5B8DEF", "#9B6DFF", "#FFB547", "#E8593C", "#F0E06A"];

function EditorialEyebrow({ children, className = "mb-8" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-6 bg-[#A1E233]" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A1E233]">
        {children}
      </span>
    </div>
  );
}

function FaqItem({ faq, index, shouldReduceMotion }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, delay: index * 0.08, ease }}
      onClick={() => setOpen((current) => !current)}
      className="w-full rounded-[28px] border border-white/8 bg-white/[0.02] p-6 text-left backdrop-blur-sm transition-colors duration-300 hover:border-primary1/20"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="text-lg font-medium leading-tight text-white md:text-xl">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="mt-1 inline-flex shrink-0 rounded-full border border-white/10 p-2 text-primary1"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.32, ease }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-sm leading-relaxed text-white/55 md:text-base">
          {faq.answer}
        </p>
      </motion.div>
    </motion.button>
  );
}

function SectionHeading({ title, subtitle, refProp, isInView, shouldReduceMotion }) {
  return (
    <div ref={refProp} className="mb-10 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease }}
      >
        <div className="mb-6 h-px w-full max-w-24 bg-gradient-to-r from-[#A1E233] to-transparent" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease }}
        className="text-[clamp(2rem,4.6vw,4rem)] font-semibold leading-[0.95] tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, delay: 0.08, ease }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

export default function ServiceDetail({ locale, service, relatedProjects, relatedServices }) {
  const t = useTranslations("ServicePages");
  const shouldReduceMotion = useReducedMotion();
  const accent = SERVICE_ACCENT_MAP[service.slug] ?? "#A1E233";
  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: `/${locale}` },
    { label: t("breadcrumbsServices"), href: `/${locale}/servicios` },
    { label: service.shortLabel },
  ];
  const heroRef = useRef(null);
  const problemsRef = useRef(null);
  const processRef = useRef(null);
  const projectsRef = useRef(null);
  const problemsInView = useInView(problemsRef, { once: true, margin: "-10%" });
  const processInView = useInView(processRef, { once: true, margin: "-10%" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-10%" });

  return (
    <main className="overflow-hidden bg-[#0a0a0a] text-white">
      <ProjectCursor label={t("viewProject")} />

      <section ref={heroRef} className="relative px-4 pb-28 pt-32 md:px-5 md:pt-36 lg:px-10 xl:px-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
              maskImage: "radial-gradient(ellipse 90% 55% at 50% 0%, black 20%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 55% at 50% 0%, black 20%, transparent 100%)",
            }}
          />
          {/* Accent-tinted radial atmosphere */}
          <div
            className="absolute inset-x-0 top-0 h-[52rem]"
            style={{
              background: `radial-gradient(ellipse 58% 42% at 10% 0%, ${accent}28, transparent 52%), radial-gradient(ellipse 42% 32% at 90% 8%, rgba(255,255,255,0.05), transparent 55%), linear-gradient(180deg, rgba(6,6,6,0.0), rgba(10,10,10,1.0) 82%)`,
            }}
          />
          <div
            className="absolute left-[3%] top-12 h-[22rem] w-[22rem] rounded-full blur-[160px]"
            style={{ backgroundColor: `${accent}0E` }}
          />
          <div className="absolute right-[6%] top-28 h-[16rem] w-[16rem] rounded-full bg-white/4 blur-[160px]" />
          {/* Ghost number tinted with accent */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-[4%] top-[6%] select-none font-black leading-none tabular-nums"
            style={{ fontSize: "clamp(14rem, 22vw, 28rem)", lineHeight: 1, color: `${accent}07` }}
          >
            01
          </span>
        </div>

        <div className="relative mx-auto max-w-screen-2xl">
          <Breadcrumbs items={breadcrumbItems} />
          <TitleSection title={t("eyebrow")} />

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.56fr)] lg:items-start xl:gap-20">
            <div>
              {/* Eyebrow — slides from left */}
              <motion.div
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.72, delay: 0.05, ease }}
              >
                <EditorialEyebrow>{service.shortLabel}</EditorialEyebrow>
              </motion.div>

              {/* Service badge — clip reveal */}
              <div className="mb-6 overflow-hidden">
                <motion.span
                  initial={{ y: shouldReduceMotion ? 0 : "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, delay: 0.1, ease }}
                  className="inline-flex rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em]"
                  style={{
                    borderColor: `${accent}22`,
                    backgroundColor: `${accent}0B`,
                    color: `${accent}CC`,
                  }}
                >
                  {service.eyebrow}
                </motion.span>
              </div>

              {/* H1 — clip reveal */}
              <div className="overflow-hidden pb-[0.1em]">
                <motion.h1
                  initial={{ y: shouldReduceMotion ? 0 : "105%", skewY: shouldReduceMotion ? 0 : 0.8 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 1.1, delay: 0.18, ease }}
                  className="max-w-6xl text-[clamp(3.35rem,8.6vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.03em]"
                >
                  {service.title}
                </motion.h1>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 1.0, delay: 0.4, ease }}
                style={{ transformOrigin: "left" }}
                className="mt-10 h-px w-full max-w-3xl bg-white/8"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.85, delay: 0.5, ease }}
                className="mt-8 max-w-3xl text-base font-light leading-relaxed text-white/56 md:text-[1.22rem] md:leading-relaxed"
              >
                {service.description}
              </motion.p>

              {/* Hero points — individually staggered with accent bar */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {service.heroPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, delay: 0.58 + index * 0.1, ease }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-neutral-950/72 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-colors duration-500 hover:border-white/14"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 top-0 text-[4.5rem] font-black leading-none text-white/[0.04]"
                    >
                      0{index + 1}
                    </span>
                    <div
                      className="mb-4 h-px w-10 to-transparent"
                      style={{ backgroundImage: `linear-gradient(to right, ${accent}55, transparent)` }}
                    />
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
              {/* Accent highlight line at top of sidebar */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px"
                style={{ backgroundImage: `linear-gradient(to right, transparent, ${accent}40, transparent)` }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 top-2 text-[6rem] font-black leading-none text-white/[0.04]"
              >
                01
              </span>
              <EditorialEyebrow className="mb-5">{t("idealFor")}</EditorialEyebrow>
              <div className="mt-5 space-y-4">
                {service.idealFor.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: 0.4 + i * 0.08, ease }}
                    className="flex gap-3"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <p className="text-sm leading-relaxed text-white/62">{item}</p>
                  </motion.div>
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
          <SectionHeading
            title={t("problemsTitle")}
            subtitle={t("problemsSubtitle")}
            refProp={problemsRef}
            isInView={problemsInView}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="space-y-3">
            {service.problems.map((problem, index) => (
              <motion.article
                key={problem.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.78, delay: index * 0.1, ease }}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-neutral-950/80 backdrop-blur-sm transition-colors duration-500 hover:border-white/[0.13]"
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse 55% 80% at 4% 50%, ${accent}09, transparent 60%)` }}
                />

                <div className="relative z-10 flex items-start gap-6 p-7 md:gap-12 md:p-10">
                  {/* Large decorative number */}
                  <span
                    aria-hidden
                    className="shrink-0 select-none text-[4.5rem] font-black leading-none tracking-[-0.04em] md:text-[7rem]"
                    style={{ color: `${accent}14` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[1.45rem] font-medium leading-tight text-white md:text-[1.9rem]">
                      {problem.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/48 md:text-base">
                      {problem.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
            <div>
              <SectionHeading
                title={t("includesTitle")}
                subtitle={service.approachBody}
                refProp={processRef}
                isInView={processInView}
                shouldReduceMotion={shouldReduceMotion}
              />

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                animate={processInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.1, ease }}
                className="rounded-[34px] border border-primary1/12 bg-[linear-gradient(180deg,rgba(161,226,51,0.09),rgba(255,255,255,0.02))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
              >
                <span className="text-[10px] uppercase tracking-[0.28em] text-primary1">
                  {t("approachTitle")}
                </span>
                <p className="mt-5 text-2xl font-medium leading-tight text-white md:text-[2rem]">
                  {service.approachTitle}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/58"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {service.includes.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.72, delay: 0.08 + index * 0.08, ease }}
                  className="group rounded-[32px] border border-white/8 bg-neutral-950/72 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition-colors duration-500 hover:border-primary1/14"
                >
                  <div className="mb-4 h-px w-12 bg-gradient-to-r from-[#A1E233]/45 to-transparent" />
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/52 md:text-base">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <SectionHeading
            title={t("processTitle")}
            subtitle={t("processSubtitle")}
            refProp={projectsRef}
            isInView={projectsInView}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="relative">
            {/* Horizontal connector line — desktop only */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={projectsInView ? { scaleX: 1 } : undefined}
              transition={{ duration: shouldReduceMotion ? 0.2 : 1.4, delay: 0.1, ease }}
              style={{ transformOrigin: "left" }}
              className="absolute left-7 right-7 top-[27px] hidden h-px bg-white/[0.06] lg:block"
            />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.72, delay: 0.1 + index * 0.12, ease }}
                  className="group relative"
                >
                  {/* Step circle — sits on top of the connecting line */}
                  <motion.div
                    initial={{ scale: shouldReduceMotion ? 1 : 0.6, opacity: 0 }}
                    animate={projectsInView ? { scale: 1, opacity: 1 } : undefined}
                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: 0.2 + index * 0.12, ease: "easeOut" }}
                    className="relative z-10 mb-7 flex h-[54px] w-[54px] items-center justify-center rounded-full border bg-[#0a0a0a] font-mono text-[11px] font-semibold tracking-[0.18em] transition-all duration-400 group-hover:scale-110"
                    style={{
                      borderColor: index === 0 ? accent : "rgba(255,255,255,0.1)",
                      color: index === 0 ? accent : "rgba(255,255,255,0.35)",
                      boxShadow: index === 0 ? `0 0 20px ${accent}20` : "none",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <h3 className="text-lg font-medium leading-tight text-white transition-colors duration-300 group-hover:text-white/90">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/42 md:text-base">
                    {step.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16">
            <TitleSection title={t("projectsTitle")} />

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
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.25, ease }}
                className="max-w-xs text-sm font-light leading-relaxed text-white/40 md:text-right"
              >
                {t("projectsHeading")}
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 1.05, delay: 0.3, ease }}
              style={{ transformOrigin: "left" }}
              className="mt-10 h-px w-full bg-white/[0.06]"
            />
          </div>

          <div className="space-y-6">
            {relatedProjects.map((project, index) => (
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

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.28em] text-primary1">
              {t("faqsTitle")}
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4.6vw,4rem)] font-semibold leading-[0.95] tracking-tight text-white">
              {t("faqsHeading")}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16">
            <TitleSection title={t("relatedServicesTitle")} />

            <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: shouldReduceMotion ? 0 : "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 1, delay: 0.05, ease }}
                  className="text-[clamp(2.2rem,5.2vw,5rem)] font-black leading-[0.95] tracking-tight text-white"
                >
                  <span className="block">{t("relatedServicesHeadingLine1")}</span>
                  <span className="block text-[#A1E233]">{t("relatedServicesHeadingLine2")}</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.22, ease }}
                className="max-w-xs text-sm font-light leading-relaxed text-white/40 md:text-right"
              >
                {t("relatedServicesHeading")}
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

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((relatedService, index) => {
              const relatedAccent = RELATED_ACCENTS[index % RELATED_ACCENTS.length];
              return (
                <motion.div
                  key={relatedService.slug}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.78, delay: index * 0.06, ease }}
                >
                  <Link
                    href={`/${locale}/servicios/${relatedService.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-neutral-950/80 p-7 shadow-[0_16px_48px_rgba(0,0,0,0.28)] transition-colors duration-500 hover:border-white/[0.13]"
                  >
                    {/* Accent top bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 + index * 0.09, ease }}
                      style={{ backgroundColor: relatedAccent, transformOrigin: "left" }}
                      className="absolute inset-x-0 top-0 h-[2px]"
                    />

                    {/* Hover glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse 70% 45% at 10% 0%, ${relatedAccent}0C, transparent 65%)` }}
                    />

                    {/* Number + label */}
                    <div className="relative z-10 mb-6 flex items-center justify-between">
                      <span
                        className="font-mono text-[11px] font-semibold tracking-[0.22em]"
                        style={{ color: relatedAccent }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.26em] text-white/16">
                        {relatedService.shortLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 flex-1 text-[1.5rem] font-semibold leading-[1.07] tracking-tight text-white">
                      {relatedService.title}
                    </h3>

                    {/* CTA */}
                    <div className="relative z-10 mt-8 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28 transition-colors duration-300 group-hover:text-white/60">
                        {t("exploreService")}
                      </span>
                      <span
                        className="inline-flex size-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: `${relatedAccent}28`, color: relatedAccent }}
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

      <section className="relative overflow-hidden px-4 pb-32 pt-24 md:px-5 lg:px-10 xl:px-24">
        {/* Background atmospheric effects */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 20% 60%, ${accent}07, transparent 60%), radial-gradient(ellipse 45% 50% at 85% 20%, rgba(255,255,255,0.025), transparent 55%)`,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}22, transparent)` }}
          />
        </div>

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <EditorialEyebrow className="mb-7">{t("closingEyebrow")}</EditorialEyebrow>
              <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-white">
                {t("closingTitle")}
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/48 md:text-base">
                {t("closingBody")}
              </p>
            </div>

            <Link
              href={`/${locale}/contacto`}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-primary1 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-[#b7ff1f] hover:shadow-[0_8px_32px_rgba(161,226,51,0.28)]"
            >
              <span>{t("primaryCta")}</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
