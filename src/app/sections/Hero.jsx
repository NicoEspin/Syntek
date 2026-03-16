"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Pointer from "@/app/components/Pointer";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

// ─── Constantes ───────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// Las palabras que rotan en el typewriter
const ROTATING_WORDS = ["Web.", "Software.", "Automatizaciones."];

// ─── Componente: Typewriter de palabras rotantes ──────────────────────────────
function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="inline-block text-[#A1E233]"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── Card izquierda: fragmento de código ─────────────────────────────────────
function CodeCard() {
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
    {
      indent: 1,
      tokens: [
        { c: "#82aaff", t: "build" },
        { c: "#fff", t: "({" },
      ],
    },
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
        { c: "#ecc48d", t: "'scale'" },
        { c: "#fff", t: "," },
      ],
    },
    {
      indent: 2,
      tokens: [
        { c: "#A1E233", t: "ai" },
        { c: "#fff", t: ": " },
        { c: "#c792ea", t: "true" },
      ],
    },
    { indent: 1, tokens: [{ c: "#fff", t: "})" }] },
    { indent: 0, tokens: [{ c: "#637777", t: "// → listo en semanas" }] },
  ];

  return (
    <motion.div
      drag
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 280, bounceDamping: 22 }}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      className="cursor-grab active:cursor-grabbing select-none"
    >
      <div className="w-[290px] rounded-2xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden">
        {/* Barra de título de editor */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6 bg-[#080808]">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[10px] tracking-widest text-white/20 font-mono">
            solution.ts
          </span>
        </div>
        {/* Código */}
        <div className="px-4 py-4 font-mono text-[11.5px] leading-[1.85] space-y-0">
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
        {/* Línea de cursor parpadeante */}
        <div className="px-4 pb-4 flex items-center gap-1.5">
          <span className="text-[11px] font-mono text-[#A1E233]/50">
            ▸ compiled in 1.2s
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block w-1.5 h-3.5 bg-[#A1E233] rounded-[1px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Card derecha: dashboard de métricas ─────────────────────────────────────
function DashboardCard() {
  const metrics = [
    {
      label: "Conversión",
      value: "+147%",
      delta: "+12% este mes",
      positive: true,
    },
    {
      label: "Tiempo carga",
      value: "0.8s",
      delta: "−62% vs anterior",
      positive: true,
    },
    {
      label: "Leads capturados",
      value: "2.4k",
      delta: "+890 este mes",
      positive: true,
    },
  ];

  // Barras de gráfico simuladas
  const bars = [38, 52, 44, 70, 61, 85, 78, 92, 68, 95, 82, 100];

  return (
    <motion.div
      drag
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 280, bounceDamping: 22 }}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      className="cursor-grab active:cursor-grabbing select-none"
    >
      <div className="w-[300px] rounded-2xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-white/6 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-white/28">
              Dashboard
            </p>
            <p className="text-sm font-semibold text-white mt-0.5">
              Performance
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-[#A1E233]" />
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#A1E233]/70">
              Live
            </span>
          </div>
        </div>

        {/* Mini gráfico de barras */}
        <div className="px-5 pt-4 pb-3">
          <div className="flex items-end gap-[3px] h-12">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.04, ease }}
                style={{ originY: 1, height: `${h}%` }}
                className="flex-1 rounded-[2px] bg-[#A1E233]/25"
              >
                {i === bars.length - 1 && (
                  <div className="w-full h-full rounded-[2px] bg-[#A1E233]" />
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-[9px] text-white/15 mt-1.5 tracking-widest">
            últimos 12 meses
          </p>
        </div>

        {/* Métricas */}
        <div className="px-5 pb-5 space-y-2.5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.8 + i * 0.1, ease }}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] text-white/30 tracking-wide">
                  {m.label}
                </p>
                <p className="text-xs font-semibold text-white">{m.value}</p>
              </div>
              <span className="text-[10px] font-medium text-[#A1E233] bg-[#A1E233]/8 border border-[#A1E233]/15 px-2 py-0.5 rounded-full">
                {m.delta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  const heroRef = useRef(null);
  const t = useTranslations("Homepage");

  useEffect(() => {
    // Card izquierda entra desde abajo-izquierda
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [
        leftDesignScope.current,
        { y: 0, x: 0 },
        { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      ],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    // Card derecha entra desde abajo-derecha con delay
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.2 }],
      [
        rightDesignScope.current,
        { x: 0, y: 0 },
        { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      ],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.2 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="relative min-h-[88vh] flex items-center justify-center py-24 px-4 overflow-x-clip"
      ref={heroRef}
    >
      {/* Gradiente radial de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(161,226,51,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Línea horizontal de acento */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0"
        style={{ top: "42%" }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* ── CARD IZQUIERDA: código ──────────────────────────────────────────── */}
      <motion.div
        ref={leftDesignScope}
        initial={{ opacity: 0, y: 80, x: -80 }}
        dragConstraints={heroRef}
        className="hidden lg:block absolute left-8 xl:left-16 top-1/2 -translate-y-[55%]"
      >
        <CodeCard />
      </motion.div>

      {/* Pointer Antto */}
      <motion.div
        ref={leftPointerScope}
        initial={{ opacity: 0, y: 80, x: -200 }}
        className="hidden lg:block absolute left-[340px] xl:left-[370px] top-[38%]"
      >
        <Pointer  color={"bg-pink-500"} />
      </motion.div>

      {/* ── CARD DERECHA: dashboard ─────────────────────────────────────────── */}
      <motion.div
        ref={rightDesignScope}
        initial={{ opacity: 0, x: 80, y: 80 }}
        dragConstraints={heroRef}
        className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-[45%]"
      >
        <DashboardCard />
      </motion.div>

      {/* Pointer Nico */}
      <motion.div
        ref={rightPointerScope}
        initial={{ opacity: 0, x: 200, y: 80 }}
        className="hidden lg:block absolute right-[340px] xl:right-[370px] top-[35%]"
      >
        <Pointer  color={"bg-blue-500"} />
      </motion.div>

      {/* ── CONTENIDO CENTRAL ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-50" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
          </span>
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/45">
            {t("eyebrow")}
          </span>
        </motion.div>

        {/* Headline principal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white"
          >
            {t("headline-line1")}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight"
          >
            <RotatingWord />
          </motion.h1>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="text-base md:text-lg text-white/42 font-light leading-relaxed max-w-xl mb-10"
        >
          {t("subtitle")}{" "}
          <span className="text-white/70 font-medium">Synttek</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease }}
          className="flex items-center gap-3"
        >
          {/* CTA principal */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            {/* Shimmer */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("cta")}
            <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
              <path
                d="M1 7L7 1M7 1H2M7 1V6"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          {/* CTA secundario */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/55 hover:text-white transition-colors duration-300"
          >
            {t("cta-secondary")}
          </motion.a>
        </motion.div>

        {/* Stack de tecnologías */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex items-center gap-3 flex-wrap justify-center"
        >
          <span className="text-[9px] tracking-[0.22em] uppercase text-white/18">
            Stack
          </span>
          {["Next.js", "React", "Node", "AI/ML", "Shopify", "Figma"].map(
            (tech, i) => (
              <span
                key={tech}
                className="text-[10px] tracking-widest text-white/25 border border-white/6 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
