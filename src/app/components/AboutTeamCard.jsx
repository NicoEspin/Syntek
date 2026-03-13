"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { getFadeUp, premiumEase, subtleEase } from "@/lib/animations";

export default function AboutTeamCard({
  name,
  role,
  imageSrc,
  icon,
  summary,
  highlights = [],
  quote,
  highlightsLabel,
  quoteLabel,
  inverted = false,
}) {
  const shouldReduceMotion = useReducedMotion();
  const highlightReveal = getFadeUp(shouldReduceMotion, { distance: 14, duration: 0.42 });

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : "hover"}
      initial="rest"
      animate="rest"
      className="rounded-[32px] border border-white/8 bg-[#0c0c0c] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-5"
    >
      <div className="grid gap-5 sm:grid-cols-[128px_minmax(0,1fr)] sm:items-start">
        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: shouldReduceMotion ? 0 : -3 } }}
          transition={{ duration: 0.38, ease: subtleEase }}
          className="overflow-hidden rounded-[26px] border border-white/8 bg-neutral-900"
        >
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: shouldReduceMotion ? 1 : 1.03 } }}
            transition={{ duration: 0.55, ease: premiumEase }}
          >
            <Image
              src={imageSrc}
              alt={name}
              width={320}
              height={380}
              className={`h-full w-full object-cover ${inverted ? "scale-x-[-1]" : ""}`}
              sizes="(max-width: 640px) 100vw, 128px"
            />
          </motion.div>
        </motion.div>

        <div className="flex h-full flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <motion.h3
                variants={{ rest: { y: 0 }, hover: { y: shouldReduceMotion ? 0 : -2 } }}
                transition={{ duration: 0.3, ease: premiumEase }}
                className="text-2xl font-semibold text-white md:text-[30px]"
              >
                {name}
              </motion.h3>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/42">
                {role}
              </p>
            </div>

            <motion.div
              variants={{
                rest: { rotate: 0, scale: 1, boxShadow: "0 0 0 rgba(161,226,51,0)" },
                hover: {
                  rotate: shouldReduceMotion ? 0 : inverted ? -4 : 4,
                  scale: shouldReduceMotion ? 1 : 1.03,
                  boxShadow: "0 14px 34px rgba(161,226,51,0.22)",
                },
              }}
              transition={{ duration: 0.34, ease: subtleEase }}
              className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary1/20 bg-primary1 text-black"
            >
              {icon}
            </motion.div>
          </div>

          <motion.p
            variants={{ rest: { opacity: 0.72 }, hover: { opacity: 0.9 } }}
            transition={{ duration: 0.28, ease: subtleEase }}
            className="max-w-xl text-sm leading-relaxed text-white/72 md:text-[15px]"
          >
            {summary}
          </motion.p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 border-t border-white/8 pt-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
            {highlightsLabel}
          </p>
          <div className="mt-3 grid gap-2">
            {highlights.map((highlight, index) => (
              <motion.p
                key={highlight}
                initial="hidden"
                whileInView="visible"
                variants={highlightReveal}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { x: 4, borderColor: "rgba(161,226,51,0.22)" }
                }
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-3 py-3 text-sm leading-relaxed text-white/68"
              >
                {highlight}
              </motion.p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
            {quoteLabel}
          </p>
          <motion.blockquote
            variants={{
              rest: {
                y: 0,
                borderColor: "rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.02)",
              },
              hover: {
                y: shouldReduceMotion ? 0 : -2,
                borderColor: "rgba(161,226,51,0.18)",
                backgroundColor: "rgba(255,255,255,0.03)",
              },
            }}
            transition={{ duration: 0.34, ease: subtleEase }}
            className="mt-3 rounded-2xl border border-white/8 px-4 py-4 text-sm leading-relaxed text-white/76 italic"
          >
            "{quote}"
          </motion.blockquote>
        </div>
      </div>
    </motion.article>
  );
}
