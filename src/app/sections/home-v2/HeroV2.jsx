"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Pointer from "@/app/components/Pointer";
import MagneticButton from "@/app/components/MagneticButton";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import RotatingWord from "@/app/components/RotatingWord";
import { getWhatsAppUrl } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

// ─── Card izquierda: fragmento de código (chrome de marca, mismo del home) ────
function CodeCard({ strings }) {
  const lines = [
    { indent: 0, tokens: [{ c: "#637777", t: "// Synttek · stack" }] },
    {
      indent: 0,
      tokens: [
        { c: "#c792ea", t: "const" },
        { c: "#fff", t: " solution = " },
        { c: "#82aaff", t: "await" },
      ],
    },
    { indent: 1, tokens: [{ c: "#82aaff", t: "build" }, { c: "#fff", t: "({" }] },
    {
      indent: 2,
      tokens: [
        { c: "#A1E233", t: "stack" },
        { c: "#fff", t: ": [" },
        { c: "#ecc48d", t: "'Next.js'" },
        { c: "#fff", t: "," },
      ],
    },
    {
      indent: 3,
      tokens: [
        { c: "#ecc48d", t: "'React'" },
        { c: "#fff", t: "," },
        { c: "#ecc48d", t: "'Node'" },
        { c: "#fff", t: "]," },
      ],
    },
    {
      indent: 2,
      tokens: [
        { c: "#A1E233", t: "goal" },
        { c: "#fff", t: ": " },
        { c: "#ecc48d", t: `'${strings.goal}'` },
        { c: "#fff", t: "," },
      ],
    },
    { indent: 2, tokens: [{ c: "#A1E233", t: "ai" }, { c: "#fff", t: ": " }, { c: "#c792ea", t: "true" }] },
    { indent: 1, tokens: [{ c: "#fff", t: "})" }] },
    { indent: 0, tokens: [{ c: "#637777", t: `// -> ${strings.readyInWeeks}` }] },
  ];

  return (
    <motion.div
      drag
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 280, bounceDamping: 22 }}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      className="cursor-grab select-none active:cursor-grabbing"
    >
      <div className="w-[290px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/95 shadow-float backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-white/6 bg-[#080808] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[10px] tracking-widest text-white/20">solution.ts</span>
        </div>
        <div className="space-y-0 px-4 py-4 font-mono text-[11.5px] leading-[1.85]">
          {lines.map((line, li) => (
            <motion.div
              key={li}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + li * 0.07, ease }}
              style={{ paddingLeft: `${line.indent * 14}px` }}
              className="flex flex-wrap"
            >
              {line.tokens.map((token, ti) => (
                <span key={ti} style={{ color: token.c }}>
                  {token.t}&nbsp;
                </span>
              ))}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 px-4 pb-4">
          <span className="font-mono text-[11px] text-[#A1E233]/50">{strings.compiledIn}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block h-3.5 w-1.5 rounded-[1px] bg-[#A1E233]"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Card derecha: dashboard de métricas ─────────────────────────────────────
function DashboardCard({ strings }) {
  const metrics = [
    { label: strings.conversionLabel, target: 147, prefix: "+", suffix: "%", decimals: 0, delta: strings.conversionDelta },
    { label: strings.loadTimeLabel, target: 0.8, suffix: "s", decimals: 1, delta: strings.loadTimeDelta },
    { label: strings.leadsLabel, target: 2.4, suffix: "k", decimals: 1, delta: strings.leadsDelta },
  ];
  const bars = [38, 52, 44, 70, 61, 85, 78, 92, 68, 95, 82, 100];

  return (
    <motion.div
      drag
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 280, bounceDamping: 22 }}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      className="cursor-grab select-none active:cursor-grabbing"
    >
      <div className="w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/95 shadow-float backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/6 px-5 pb-3 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/28">{strings.dashboardEyebrow}</p>
            <p className="mt-0.5 text-sm font-semibold text-white">{strings.dashboardTitle}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-[#A1E233]" />
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#A1E233]/70">{strings.liveLabel}</span>
          </div>
        </div>
        <div className="px-5 pb-3 pt-4">
          <div className="flex h-12 items-end gap-[3px]">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.04, ease }}
                style={{ originY: 1, height: `${h}%` }}
                className="flex-1 rounded-[2px] bg-[#A1E233]/25"
              >
                {i === bars.length - 1 && <div className="h-full w-full rounded-[2px] bg-[#A1E233]" />}
              </motion.div>
            ))}
          </div>
          <p className="mt-1.5 text-[9px] tracking-widest text-white/15">{strings.lastTwelveMonths}</p>
        </div>
        <div className="space-y-2.5 px-5 pb-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.8 + i * 0.1, ease }}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] tracking-wide text-white/30">{m.label}</p>
                <p className="text-xs font-semibold text-white">
                  <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                </p>
              </div>
              <span className="rounded-full border border-[#A1E233]/15 bg-[#A1E233]/8 px-2 py-0.5 text-[10px] font-medium text-[#A1E233]">
                {m.delta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
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

  useEffect(() => {
    if (prefersReduced) {
      leftDesignAnimate(leftDesignScope.current, { opacity: 1, x: 0, y: 0 }, { duration: 0 });
      leftPointerAnimate(leftPointerScope.current, { opacity: 1, x: 0, y: 0 }, { duration: 0 });
      rightDesignAnimate(rightDesignScope.current, { opacity: 1, x: 0, y: 0 }, { duration: 0 });
      rightPointerAnimate(rightPointerScope.current, { opacity: 1, x: 0, y: 0 }, { duration: 0 });
      return;
    }

    // entrada; el float idle infinito va aparte (una secuencia de useAnimate no
    // soporta repeat: Infinity en uno de sus pasos — framer tira "Repeat count
    // too high" porque intenta expandir el loop dentro de la secuencia misma).
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.7, ease }],
    ]).then(() => {
      leftDesignAnimate(leftDesignScope.current, { y: [0, -10, 0] }, { duration: 5, repeat: Infinity, ease: "easeInOut" });
    });
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.2 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.7, ease }],
    ]).then(() => {
      rightDesignAnimate(rightDesignScope.current, { y: [0, -8, 0] }, { duration: 4.5, repeat: Infinity, ease: "easeInOut" });
    });
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.2 }],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ]);
  }, [prefersReduced]);

  // glow radial del hero que sigue al mouse con lerp suave — desktop/puntero fino
  // únicamente, y desactivado con prefers-reduced-motion.
  useEffect(() => {
    if (prefersReduced) return;
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;

    let targetX = 50;
    let targetY = 50;
    let glowX = 50;
    let glowY = 50;
    let raf;

    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      glowX += (targetX - glowX) * 0.05;
      glowY += (targetY - glowY) * 0.05;
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(161,226,51,0.12) 0%, transparent 60%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [prefersReduced]);

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

      {/* CARD IZQUIERDA */}
      <motion.div
        ref={leftDesignScope}
        initial={{ opacity: 0, y: 80, x: -80 }}
        dragConstraints={heroRef}
        className="absolute left-8 top-1/2 hidden -translate-y-[55%] lg:block xl:left-16"
      >
        <CodeCard strings={codeCardStrings} />
      </motion.div>
      <motion.div
        ref={leftPointerScope}
        initial={{ opacity: 0, y: 80, x: -200 }}
        className="absolute left-[340px] top-[38%] hidden lg:block xl:left-[370px]"
      >
        <Pointer color={"bg-pink-500"} />
      </motion.div>

      {/* CARD DERECHA */}
      <motion.div
        ref={rightDesignScope}
        initial={{ opacity: 0, x: 80, y: 80 }}
        dragConstraints={heroRef}
        className="absolute right-8 top-1/2 hidden -translate-y-[45%] lg:block xl:right-16"
      >
        <DashboardCard strings={dashboardStrings} />
      </motion.div>
      <motion.div
        ref={rightPointerScope}
        initial={{ opacity: 0, x: 200, y: 80 }}
        className="absolute right-[340px] top-[35%] hidden lg:block xl:right-[370px]"
      >
        <Pointer color={"bg-blue-500"} />
      </motion.div>

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
              initial={false}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="block"
            >
              {t("hero.headlinePre")}
            </motion.span>
          </span>
          <span className="block overflow-hidden text-[#A1E233]">
            <motion.span
              initial={false}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="block"
            >
              <RotatingWord words={rotatingLocations} />
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={false}
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
