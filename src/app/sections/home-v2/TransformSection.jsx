"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import SpotlightCard from "@/app/components/SpotlightCard";
import StarBorder from "@/app/components/StarBorder";
import SplitHeadline from "@/app/components/SplitHeadline";
import RevealBlock from "@/app/components/RevealBlock";

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const TransformSection = () => {
  const t = useTranslations("HomeV2.transform");
  const antesItems = t.raw("antesItems");
  const despuesItems = t.raw("despuesItems");
  const indicators = t.raw("indicators");
  const titleHighlight = t("titleHighlight");

  return (
    <section
      aria-labelledby="transform-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(161,226,51,0.035) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 90% 90%, rgba(134,79,254,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <TitleSection title={t("sectionLabel")} />

        {/* Header */}
        <div className="mx-auto mb-10 mt-14 max-w-3xl text-center">
          <SplitHeadline
            id="transform-heading"
            text={t("title")}
            delay={0.05}
            highlightWords={titleHighlight.split(" ")}
            highlightClassName="text-[#A1E233]"
            className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-black leading-[1.02] tracking-tight text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/40 md:text-base"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* motor de la transformación */}
        <RevealBlock
          delay={0.15}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[#A1E233]/25 bg-[#A1E233]/[0.04] px-4 py-2"
        >
          <span aria-hidden className="text-[11px] text-[#A1E233]">✸</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
            {t("connectorLabel")}
          </span>
        </RevealBlock>

        {/* Antes → conducto → Después */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 lg:flex-nowrap lg:gap-0">
          {/* ── ANTES (degradado) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease }}
            className="flex-1 basis-[340px] lg:max-w-[460px]"
          >
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-neutral-900/40 p-8">
              {/* textura tenue de "estado roto" */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.6]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 7px)",
                  maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black, transparent 90%)",
                  WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black, transparent 90%)",
                }}
              />
              <div className="relative flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-white/25" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  {t("antesLabel")}
                </span>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="relative mt-6 flex flex-col gap-4"
              >
                {antesItems.map((item, i) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className={`flex items-center gap-3 ${i < antesItems.length - 1 ? "border-b border-white/[0.05] pb-4" : ""}`}
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-white/12 text-[10px] font-light text-white/30">
                      ✕
                    </span>
                    <span className="text-[15px] leading-snug text-white/45">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── CONDUCTO ── */}
          <div className="relative flex w-full items-center justify-center py-3 lg:w-[130px] lg:shrink-0 lg:py-0">
            {/* línea + haz de energía (horizontal desktop / vertical mobile) */}
            <div
              aria-hidden
              className="syn-flow-beam absolute left-1/2 top-1/2 hidden h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(161,226,51,0.55) 45%, #A1E233 50%, rgba(161,226,51,0.55) 55%, rgba(255,255,255,0.05) 100%)",
                backgroundSize: "200% 100%",
                animation: "syn-flow-x 2.6s linear infinite",
              }}
            />
            <div
              aria-hidden
              className="syn-flow-beam absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:hidden"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(161,226,51,0.55) 45%, #A1E233 50%, rgba(161,226,51,0.55) 55%, rgba(255,255,255,0.05) 100%)",
                backgroundSize: "100% 200%",
                animation: "syn-flow-y 2.6s linear infinite",
              }}
            />
            {/* partículas de energía viajando hacia Después (desktop) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="syn-flow-dot absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#A1E233]"
                  style={{
                    boxShadow: "0 0 8px rgba(161,226,51,0.9)",
                    animation: `syn-flow-dot 2.6s linear infinite`,
                    animationDelay: `${i * 0.85}s`,
                  }}
                />
              ))}
            </div>
            {/* flecha */}
            <span
              aria-hidden
              className="relative z-[2] flex size-8 items-center justify-center rounded-full border border-[#A1E233]/30 bg-[#0a0a0a] text-[#A1E233]"
            >
              <span className="hidden lg:inline">→</span>
              <span className="lg:hidden">↓</span>
            </span>
          </div>

          {/* ── DESPUÉS (vivo) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="flex-1 basis-[340px] lg:max-w-[460px]"
          >
           <StarBorder color="#A1E233" thickness={2} className="h-full w-full">
            <SpotlightCard spotlightColor="rgba(161, 226, 51, 0.22)" className="h-full !border-white/[0.08]">
              {/* glow de esquina */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[#A1E233]/10 blur-3xl"
              />
              <div className="relative flex items-center gap-2">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A1E233]">
                  {t("despuesStatus")}
                </span>
              </div>
              <span className="relative mt-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                {t("despuesLabel")}
              </span>
              <div className="relative mt-6 flex flex-col gap-4">
                {despuesItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease, delay: 0.15 + 0.1 * i }}
                    className={`flex items-center gap-3 ${i < despuesItems.length - 1 ? "border-b border-white/[0.05] pb-4" : ""}`}
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#A1E233] text-[11px] font-bold text-black shadow-[0_0_10px_rgba(161,226,51,0.4)]">
                      ✓
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
           </StarBorder>
          </motion.div>
        </div>

        {/* Indicadores */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {indicators.map((indicator, i) => (
            <RevealBlock
              key={indicator.number}
              delay={i * 0.1}
              className="flex flex-col gap-3 border-t border-white/8 pt-6"
            >
              <span className="font-mono text-sm font-semibold text-[#A1E233]">{indicator.number}</span>
              <span className="text-[15px] font-medium leading-snug text-white/80">{indicator.label}</span>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
