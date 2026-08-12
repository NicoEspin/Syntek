"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import TitleSection from "@/app/components/(common)/TitleSection";
import MagneticButton from "@/app/components/MagneticButton";
import { getWhatsAppUrl } from "@/lib/business";
import { getLocalizedPath } from "@/lib/seo";

const ease = [0.16, 1, 0.3, 1];

const EXPLORE_LINKS = [
  { key: "services", href: "/servicios" },
  { key: "projects", href: "/projects" },
  { key: "blog", href: "/blogs" },
  { key: "contact", href: "/contacto" },
];

const NotFoundHero = () => {
  const locale = useLocale();
  const t = useTranslations("NotFoundPage");
  const waHref = getWhatsAppUrl(t("waMessage"));
  const homeHref = getLocalizedPath(locale, "/");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0.01 : 0.75, delay: prefersReduced ? 0 : delay, ease },
    }),
  };

  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative flex min-h-[86vh] items-center justify-center overflow-x-clip px-4 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(161,226,51,0.07) 0%, transparent 65%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-0 right-0" style={{ top: "38%" }}>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.div variants={variants} custom={0.05} initial="hidden" animate={mounted ? "visible" : "hidden"}>
          <TitleSection title={t("eyebrow")} />
        </motion.div>

        <motion.span
          aria-hidden="true"
          data-text="404"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReduced ? 0.01 : 0.9, delay: 0.1, ease }}
          className="syn-404-glitch mt-6 block text-[clamp(5rem,18vw,11rem)] font-black leading-none tracking-tight text-white"
        >
          404
        </motion.span>

        <motion.h1
          id="not-found-heading"
          variants={variants}
          custom={0.25}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-display-sm leading-display tracking-display mt-6 font-black text-white"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          variants={variants}
          custom={0.35}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-5 max-w-lg text-base font-light leading-relaxed text-white/45 md:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          variants={variants}
          custom={0.5}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            as="a"
            href={homeHref}
            hoverScale={1.03}
            className="group relative inline-flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("ctaPrimary")}
            <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>

          <motion.a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
          >
            {t("ctaSecondary")}
          </motion.a>
        </motion.div>

        <motion.div
          variants={variants}
          custom={0.65}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.22em] text-white/18">{t("exploreLabel")}</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="rounded-full border border-white/6 px-3.5 py-1.5 text-[11px] text-white/45 transition-colors duration-300 hover:border-[#A1E233]/25 hover:text-[#A1E233]"
              >
                {t(`links.${link.key}`)}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundHero;
