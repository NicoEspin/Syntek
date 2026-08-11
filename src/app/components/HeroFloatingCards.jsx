"use client";

import { motion } from "motion/react";
import Pointer from "@/app/components/Pointer";
import AnimatedCounter from "@/app/components/AnimatedCounter";

const ease = [0.16, 1, 0.3, 1];

// ─── Card izquierda: fragmento de código (chrome de marca) ────────────────────
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

// ─── Par de cards flotantes y draggeables del hero (chrome de código a la
// izquierda, dashboard de métricas a la derecha) con sus punteros decorativos.
// Compartido entre HeroV2 (home) y VCPHero para que ambos heroes tengan
// exactamente el mismo efecto — sólo desktop, `heroRef` acota el drag al
// contenedor del hero.
export default function HeroFloatingCards({ heroRef, codeCardStrings, dashboardStrings, prefersReduced }) {
  return (
    <>
      {/* CARD IZQUIERDA */}
      <motion.div
        initial={{ opacity: 0, y: 80, x: -80 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          opacity: { duration: 0.5 },
          x: { duration: 0.7, ease },
          y: { duration: 0.7, ease },
        }}
        dragConstraints={heroRef}
        className="absolute left-8 top-1/2 hidden -translate-y-[55%] lg:block xl:left-16"
      >
        <motion.div
          animate={prefersReduced ? undefined : { y: [0, -10, 0] }}
          transition={
            prefersReduced ? undefined : { duration: 5, delay: 0.7, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <CodeCard strings={codeCardStrings} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80, x: -200 }}
        animate={{ opacity: 1, x: -100, y: 0 }}
        transition={{
          opacity: { duration: 0.5 },
          x: { duration: 0.5, ease },
          y: { duration: 0.5, ease },
        }}
        className="absolute left-[340px] top-[38%] hidden lg:block xl:left-[370px]"
      >
        <motion.div
          animate={prefersReduced ? undefined : { x: [0, 100], y: [0, 16, 0] }}
          transition={
            prefersReduced
              ? undefined
              : {
                  x: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
                  y: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
                }
          }
        >
          <Pointer color={"bg-pink-500"} />
        </motion.div>
      </motion.div>

      {/* CARD DERECHA */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 80 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          x: { duration: 0.7, delay: 1.2, ease },
          y: { duration: 0.7, delay: 1.2, ease },
        }}
        dragConstraints={heroRef}
        className="absolute right-8 top-1/2 hidden -translate-y-[45%] lg:block xl:right-16"
      >
        <motion.div
          animate={prefersReduced ? undefined : { y: [0, -8, 0] }}
          transition={
            prefersReduced ? undefined : { duration: 4.5, delay: 1.9, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <DashboardCard strings={dashboardStrings} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200, y: 80 }}
        animate={{ opacity: 1, x: 175, y: 0 }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          x: { duration: 0.5, delay: 1.2, ease },
          y: { duration: 0.5, delay: 1.2, ease },
        }}
        className="absolute right-[340px] top-[35%] hidden lg:block xl:right-[370px]"
      >
        <motion.div
          animate={prefersReduced ? undefined : { x: [0, -175], y: [0, 20, 0] }}
          transition={
            prefersReduced
              ? undefined
              : {
                  x: { duration: 0.5, delay: 1.7, ease: "easeInOut" },
                  y: { duration: 0.5, delay: 1.7, ease: "easeInOut" },
                }
          }
        >
          <Pointer color={"bg-blue-500"} />
        </motion.div>
      </motion.div>
    </>
  );
}
