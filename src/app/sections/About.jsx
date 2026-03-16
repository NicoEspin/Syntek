"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

// ─── Constantes de animación ──────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, distance = 40) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  },
});

const lineReveal = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, delay, ease },
  },
});

// ─── Bloque de métrica ────────────────────────────────────────────────────────
function StatBlock({ value, label, suffix = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp(delay, 30)}
      className="flex flex-col gap-2 border-t border-white/8 pt-6"
    >
      <div className="flex items-end gap-1">
        <span className="text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-none tracking-tight text-white tabular-nums">
          {value}
        </span>
        {suffix && (
          <span className="text-[#A1E233] text-2xl font-bold leading-none mb-2">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-white/38 text-xs tracking-[0.18em] uppercase font-medium leading-snug max-w-[14ch]">
        {label}
      </p>
    </motion.div>
  );
}

// ─── Pilar filosófico ─────────────────────────────────────────────────────────
function Pillar({ number, title, accentWord, body, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Divide el título para resaltar accentWord
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp(delay, 36)}
      className="group relative"
    >
      {/* Número decorativo fantasma de fondo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 -left-1 select-none text-[7rem] font-black leading-none"
        style={{ color: "rgba(161,226,51,0.05)" }}
      >
        {number}
      </span>

      <div className="relative overflow-hidden rounded-2xl border border-white/6 bg-neutral-950/60 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-[#A1E233]/20 md:p-8">
        {/* Número como pill */}
        <span className="mb-5 inline-block rounded-full border border-[#A1E233]/25 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] uppercase text-[#A1E233]/70">
          {number}
        </span>

        <h3 className="mb-4 text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="text-[#A1E233]">{accentWord}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h3>

        <p className="text-sm font-light leading-relaxed text-white/42">{body}</p>

        {/* Línea de acento inferior en hover */}
        <div className="mt-6 h-px w-0 bg-gradient-to-r from-[#A1E233]/30 to-transparent transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function About() {
  const t = useTranslations("About");

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-5%" });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-10%" });

  const pillarsRef = useRef(null);
  const isPillarsInView = useInView(pillarsRef, { once: true, margin: "-8%" });

  // ── Datos — reemplazar los valores de t() con las claves de tu i18n ─────────
  const stats = [
    { value: "+50", label: t("stat1-label"), delay: 0 },
    { value: "3", suffix: "×", label: t("stat2-label"), delay: 0.1 },
    { value: "100%", label: t("stat3-label"), delay: 0.2 },
    { value: "+4", label: t("stat4-label"), delay: 0.3 },
  ];

  const pillars = [
    {
      number: "01",
      title: t("pillar1-title"),
      accentWord: t("pillar1-accent"),
      body: t("pillar1-body"),
      delay: 0,
    },
    {
      number: "02",
      title: t("pillar2-title"),
      accentWord: t("pillar2-accent"),
      body: t("pillar2-body"),
      delay: 0.1,
    },
    {
      number: "03",
      title: t("pillar3-title"),
      accentWord: t("pillar3-accent"),
      body: t("pillar3-body"),
      delay: 0.2,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-28 md:px-5 lg:px-10 xl:px-24"
    >
      {/* Gradiente radial de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 60%, rgba(161,226,51,0.035) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">

        {/* ── ACTO I: CLAIM FILOSÓFICO ───────────────────────────────────── */}
        <div ref={heroRef} className="mb-24 md:mb-32">

          {/* Eyebrow con línea */}
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeUp(0, 20)}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-6 bg-[#A1E233]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#A1E233]">
              {t("eyebrow")}
            </span>
          </motion.div>

          {/* Headline de dos líneas con clip reveal */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%", opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.05, delay: 0.1, ease }}
              className="mb-1 text-[clamp(2.4rem,6.5vw,6.5rem)] font-black leading-[0.95] tracking-[-0.02em] text-white"
            >
              {t("headline-line1")}
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%", opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.05, delay: 0.18, ease }}
              className="text-[clamp(2.4rem,6.5vw,6.5rem)] font-black leading-[0.95] tracking-[-0.02em] text-[#A1E233]"
            >
              {t("headline-line2")}
            </motion.h2>
          </div>

          {/* Divisor animado */}
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={lineReveal(0.5)}
            style={{ transformOrigin: "left" }}
            className="my-10 h-px w-full bg-white/8"
          />

          {/* Párrafo manifiesto + quote */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <motion.p
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeUp(0.55, 30)}
              className="text-base font-light leading-relaxed text-white/62 md:text-lg"
            >
              {t("manifesto")}
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeUp(0.65, 30)}
              className="flex flex-col justify-end"
            >
              <div className="border-l-2 border-[#A1E233]/50 pl-5">
                <p className="text-sm font-medium leading-relaxed text-white md:text-base">
                  {t("differentiator")}
                </p>
                <span className="mt-2 block text-[10px] tracking-[0.22em] uppercase text-white/30">
                  — Synttek
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── ACTO II: MÉTRICAS ───────────────────────────────────────────── */}
        <div
          ref={statsRef}
          className="mb-24 grid grid-cols-2 gap-8 md:mb-32 md:grid-cols-4 lg:gap-12"
        >
          {stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </div>

        {/* ── ACTO III: PILARES ───────────────────────────────────────────── */}
        <div ref={pillarsRef}>
          <motion.div
            initial="hidden"
            animate={isPillarsInView ? "visible" : "hidden"}
            variants={fadeUp(0, 24)}
            className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="mb-3 block text-[11px] font-semibold tracking-[0.28em] uppercase text-[#A1E233]">
                {t("pillars-label")}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {t("pillars-heading")}
              </h3>
            </div>
            <p className="max-w-xs text-xs leading-relaxed tracking-wide text-white/30">
              {t("pillars-caption")}
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Pillar key={pillar.number} {...pillar} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}