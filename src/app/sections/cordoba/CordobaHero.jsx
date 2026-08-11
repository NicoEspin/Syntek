"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import MagneticButton from "@/app/components/MagneticButton";
import HeroFloatingCards from "@/app/components/HeroFloatingCards";
import useMediaQuery from "@/app/components/useMediaQuery";
import useHeroGlow from "@/app/components/useHeroGlow";
import { getWhatsAppUrl } from "@/lib/business";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

// H1 partido por palabra — visible en SSR (sólo transform, nunca opacity 0 en
// el elemento LCP). Stagger más lento en desktop, más rápido en mobile para
// que el H1 termine de entrar antes en pantallas donde el usuario scrollea rápido.
function HeroHeadline({ text, highlightWords = [] }) {
  const prefersReduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const words = text.split(" ");
  const stagger = prefersReduced ? 0 : isDesktop ? 0.055 : 0.035;
  const highlighted = new Set(highlightWords);

  return (
    <h1
      id="cordoba-hero-heading"
      aria-label={text}
      className="text-display-xl leading-display tracking-display font-black text-white"
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.28em" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            className={highlighted.has(word) ? "text-[#A1E233]" : undefined}
            initial={{ y: prefersReduced ? 0 : "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: prefersReduced ? 0.01 : 0.75, delay: i * stagger, ease: EASE_PREMIUM }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

const CordobaHero = () => {
  const t = useTranslations("Cordoba");
  const tc = useTranslations("Homepage");
  const prefersReduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const waHref = getWhatsAppUrl(t("waMessage"));
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useHeroGlow(glowRef, prefersReduced);

  const codeCardStrings = {
    goal: tc("heroCards.code.goal"),
    readyInWeeks: tc("heroCards.code.readyInWeeks"),
    compiledIn: tc("heroCards.code.compiledIn"),
  };
  const dashboardStrings = {
    dashboardEyebrow: tc("heroCards.dashboard.eyebrow"),
    dashboardTitle: tc("heroCards.dashboard.title"),
    liveLabel: tc("heroCards.dashboard.live"),
    lastTwelveMonths: tc("heroCards.dashboard.lastTwelveMonths"),
    conversionLabel: tc("heroCards.dashboard.metrics.conversion.label"),
    conversionDelta: tc("heroCards.dashboard.metrics.conversion.delta"),
    loadTimeLabel: tc("heroCards.dashboard.metrics.loadTime.label"),
    loadTimeDelta: tc("heroCards.dashboard.metrics.loadTime.delta"),
    leadsLabel: tc("heroCards.dashboard.metrics.leads.label"),
    leadsDelta: tc("heroCards.dashboard.metrics.leads.delta"),
  };

  return (
    <section
      aria-labelledby="cordoba-hero-heading"
      className="relative flex min-h-[88vh] items-center justify-center overflow-x-clip px-4 py-24"
      ref={heroRef}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(161,226,51,0.07) 0%, transparent 65%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-0 right-0" style={{ top: "42%" }}>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>
      <div ref={glowRef} aria-hidden className="pointer-events-none absolute inset-0" />

      {isDesktop ? (
        <HeroFloatingCards
          heroRef={heroRef}
          prefersReduced={prefersReduced}
          codeCardStrings={codeCardStrings}
          dashboardStrings={dashboardStrings}
        />
      ) : null}

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.7, delay: 0.3, ease: EASE_PREMIUM }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-50" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-eyebrow text-white/45">
            {t("hero.eyebrow")}
          </span>
        </motion.div>

        <HeroHeadline text={t("hero.headline")} highlightWords={t.raw("hero.headlineHighlight")} />

        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.7, delay: 0.3, ease: EASE_PREMIUM }}
          className="mb-10 mt-8 max-w-xl text-base font-light leading-relaxed text-white/42 md:text-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.7, delay: 0.45, ease: EASE_PREMIUM }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            as="a"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            hoverScale={1.03}
            className="group relative inline-flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("hero.ctaPrimary")}
            <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>

          <Link
            href="/projects"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.7, delay: 0.6, ease: EASE_PREMIUM }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.22em] text-white/18">Stack</span>
          {["Next.js", "React", "Node", "AI/ML", "Shopify", "Figma"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/6 px-2.5 py-1 text-[10px] tracking-widest text-white/25"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CordobaHero;
