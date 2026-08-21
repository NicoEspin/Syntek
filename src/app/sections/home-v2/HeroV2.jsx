"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import MagneticButton from "@/app/components/MagneticButton";
import HeroFloatingCards from "@/app/components/HeroFloatingCards";
import RotatingWord from "@/app/components/RotatingWord";
import useMediaQuery from "@/app/components/useMediaQuery";
import useHeroGlow from "@/app/components/useHeroGlow";
import { getWhatsAppUrl } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

// entrada escalonada de los elementos centrales del hero. `initial` queda fijo
// en "hidden" (SSR-safe, no es el LCP) y sólo `animate` cambia de "hidden" a
// "visible" tras el mount — así el entrance realmente se reproduce en cliente
// en vez de quedar "pegado" al primer render como pasa si se alterna `initial`.
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease },
  }),
};

// ─── Componente principal ─────────────────────────────────────────────────────
const HeroV2 = () => {
  const t = useTranslations("HomeV2");
  const tc = useTranslations("Homepage");
  const waHref = getWhatsAppUrl(t("waMessage"));
  const rotatingLocations = t.raw("hero.rotatingLocations");
  const prefersReduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroRef = useRef(null);
  const glowRef = useRef(null);

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

  useHeroGlow(glowRef, prefersReduced);

  return (
    <section
      aria-labelledby="hero-v2-heading"
      className="relative flex min-h-[88vh] items-center justify-center overflow-x-clip px-4 py-24"
      ref={heroRef}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(161,226,51,0.07) 0%, transparent 65%)",
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

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          variants={heroVariants}
          custom={0.1}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-50" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
            {t("hero.eyebrow")}
          </span>
        </motion.div>

        <h1
          id="hero-v2-heading"
          className="mb-8 text-[clamp(2rem,4.6vw,3.7rem)] font-black leading-[1.02] tracking-tight text-white"
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="block"
            >
              {t("hero.headlinePre")}
            </motion.span>
          </span>{" "}
          <span className="block overflow-hidden text-[#A1E233]">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="block"
            >
              <RotatingWord words={rotatingLocations} />
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease }}
          className="mb-10 max-w-xl text-base font-light leading-relaxed text-white/42 md:text-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          variants={heroVariants}
          custom={0.7}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            as="a"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            hoverScale={1.03}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("hero.ctaPrimary")}
            <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>

          <motion.a
            href="#soluciones"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
          >
            {t("hero.ctaSecondary")}
          </motion.a>
        </motion.div>

        <motion.div
          variants={heroVariants}
          custom={1.1}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
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

export default HeroV2;
