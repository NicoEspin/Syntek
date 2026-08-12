"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import MagneticButton from "@/app/components/MagneticButton";
import { getWhatsAppUrl } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

const AboutCta = () => {
  const tRoot = useTranslations("AboutPage");
  const t = useTranslations("AboutPage.cta");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const waHref = getWhatsAppUrl(tRoot("waMessage"));

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(161,226,51,0.06) 0%, transparent 65%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: prefersReduced ? 0.01 : 0.75, ease }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <h2
          id="about-cta-heading"
          className="text-display-md font-semibold leading-display tracking-display text-[color:var(--color-fg-1)]"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex justify-center">
          <MagneticButton
            as="a"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            hoverScale={1.03}
            className="group relative inline-flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("cta")}
          </MagneticButton>
        </div>

        <p className="mt-6 text-sm text-[color:var(--color-fg-3)]">{t("note")}</p>
      </motion.div>
    </section>
  );
};

export default AboutCta;
