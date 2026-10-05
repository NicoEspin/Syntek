"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import Breadcrumbs from "@/app/components/(common)/Breadcrumbs";
import Contact from "@/app/sections/Contact";
import TitleSection from "@/app/components/(common)/TitleSection";

const ease = [0.16, 1, 0.3, 1];

export default function ContactPageContent({ locale }) {
  const t = useTranslations("ContactPage");
  const shouldReduceMotion = useReducedMotion();
  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: "/" },
    { label: t("breadcrumbCurrent") },
  ];

  return (
    <main className="overflow-hidden bg-[#0a0a0a] text-white">
  

      <Contact />

      <section className="px-4 pb-28 pt-4 md:px-5 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <TitleSection title={t("cardsLabel")} />

          <div className="grid gap-4 md:grid-cols-3 pt-6">
            {t.raw("cards").map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.75,
                  delay: index * 0.08,
                  ease,
                }}
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
