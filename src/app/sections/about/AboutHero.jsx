"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const ease = [0.16, 1, 0.3, 1];

const AboutHero = () => {
  const t = useTranslations("AboutPage");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-x-clip px-4 pb-20 pt-32 md:px-5 md:pt-40 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(161,226,51,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <motion.span
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, ease }}
          className="block text-[11px] font-medium uppercase tracking-[var(--tracking-eyebrow)] text-[color:var(--color-fg-3)]"
        >
          {t("hero.eyebrow")}
        </motion.span>

        <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:items-end lg:gap-12">
          <motion.h1
            id="about-hero-heading"
            initial={{ y: prefersReduced ? 0 : 24 }}
            animate={mounted ? { y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0.01 : 0.85, ease }}
            className="whitespace-pre-line text-display-lg font-semibold leading-display tracking-display text-[color:var(--color-fg-1)] lg:col-span-2"
          >
            {t("hero.headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0.01 : 0.75, delay: 0.25, ease }}
            className="text-base font-light leading-relaxed text-[color:var(--color-fg-2)] lg:text-lg"
          >
            {t("hero.paragraph")}
          </motion.p>
        </div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: prefersReduced ? 0.01 : 0.8, delay: 0.5, ease }}
        style={{ transformOrigin: "left" }}
        className="relative mx-auto mt-16 h-px w-full max-w-screen-2xl bg-white/[0.06] md:mt-20"
      />
    </section>
  );
};

export default AboutHero;
