"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import About from "@/app/sections/About";
import Breadcrumbs from "@/app/components/(common)/Breadcrumbs";
import TitleSection from "@/app/components/(common)/TitleSection";

const ease = [0.16, 1, 0.3, 1];

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

function SectionHeader({
  title,
  accent,
  subtitle,
  shouldReduceMotion,
}) {
  return (
    <div className="mb-16">
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: shouldReduceMotion ? 0 : "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 1, delay: 0.05, ease }}
            className="text-[clamp(2.2rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white"
          >
            <span className="block">{title}</span>
            <span className="block text-[#A1E233]">{accent}</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.22, ease }}
          className="max-w-xs text-sm font-light leading-relaxed text-white/40 md:text-right"
        >
          {subtitle}
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
  );
}

export default function AboutPageContent({ locale }) {
  const t = useTranslations("AboutPage");
  const shouldReduceMotion = useReducedMotion();
  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: `/${locale}` },
    { label: t("breadcrumbCurrent") },
  ];

  return (
    <main className="overflow-hidden bg-[#0a0a0a] text-white">
      <section className="relative px-4 pb-24 pt-32 md:px-5 md:pt-36 lg:px-10 xl:px-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_14%_18%,rgba(161,226,51,0.18),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(8,8,8,0.2),rgba(10,10,10,0.96))]" />
          <div className="absolute left-[9%] top-28 h-56 w-56 rounded-full bg-primary1/12 blur-[120px]" />
          <div className="absolute right-[12%] top-44 h-44 w-44 rounded-full bg-white/6 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl">
          <Breadcrumbs items={breadcrumbItems} />
          <TitleSection title={t("eyebrow")} />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end xl:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.68, ease }}
              >
                <EditorialEyebrow>{t("eyebrow")}</EditorialEyebrow>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.9, ease }}
                className="max-w-5xl text-[clamp(3.1rem,8vw,7rem)] font-semibold leading-[0.9] tracking-tight"
              >
                {t("title")}
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.9, delay: 0.12, ease }}
                style={{ transformOrigin: "left" }}
                className="mt-10 h-px w-full max-w-3xl bg-white/8"
              />

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.82, delay: 0.08, ease }}
                className="mt-8 max-w-3xl text-base font-light leading-relaxed text-white/58 md:text-[1.18rem] md:leading-relaxed"
              >
                {t("description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.16, ease }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {t.raw("signals").map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-white/8 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70"
                  >
                    {signal}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.82, delay: 0.14, ease }}
              className="rounded-[30px] border border-white/6 bg-neutral-950/78 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-md"
            >
              <EditorialEyebrow className="mb-5">{t("sidebarLabel")}</EditorialEyebrow>
              <p className="mt-5 text-base leading-relaxed text-white/62">
                {t("sidebarBody")}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href={`/${locale}/contacto`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary1 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-[#b7ff1f]"
                >
                  <span>{t("primaryCta")}</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href={`/${locale}/servicios/desarrollo-web`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72 transition-colors duration-300 hover:border-primary1/20 hover:text-white"
                >
                  <span>{t("secondaryCta")}</span>
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <About />

      <section className="px-4 pb-28 pt-4 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <TitleSection title={t("cardsLabel")} />
          <SectionHeader
            title={t("cardsHeadingLine1")}
            accent={t("cardsHeadingLine2")}
            subtitle={t("cardsTitle")}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {t.raw("cards").map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, delay: index * 0.08, ease }}
                className="group relative overflow-hidden rounded-[32px] border border-white/8 bg-neutral-950/72 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-colors duration-500 hover:border-primary1/16"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 top-0 text-[5rem] font-black leading-none text-white/[0.04]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-primary1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#A1E233]/40 to-transparent" />
                <h3 className="mt-5 text-[1.7rem] font-semibold leading-[1.02] tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/52 md:text-base">
                  {card.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
