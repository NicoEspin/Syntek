"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";

const ease = [0.16, 1, 0.3, 1];

// Acento cromático por paso — misma familia que Soluciones
const STEP_ACCENTS = ["#A1E233", "#5B8DEF", "#FFB547", "#9B6DFF"];

function Step({ number, title, description, accent, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className="group relative border-t border-white/[0.08] pt-6"
    >
      {/* línea de acento en hover */}
      <div className="absolute left-0 right-0 top-0 h-px overflow-hidden">
        <div
          className="h-full w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
          style={{ backgroundColor: accent }}
        />
      </div>

      {/* número fantasma */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-1 select-none text-[4.5rem] font-black leading-none tabular-nums"
        style={{ color: `${accent}0d` }}
      >
        {number}
      </span>

      <span className="block font-mono text-xs" style={{ color: accent }}>
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm font-light leading-relaxed text-white/45">{description}</p>
    </motion.div>
  );
}

const ProcessSection = () => {
  const t = useTranslations("HomeV2.process");
  const steps = t.raw("steps");
  const [line1, line2] = t("title").split(". ");

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-5%" });

  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 45% at 85% 20%, rgba(134,79,254,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-screen-2xl">
        <TitleSection title={t("sectionLabel")} />

        <div ref={headerRef} className="mb-16 mt-14 max-w-2xl">
          <div className="overflow-hidden">
            <motion.h2
              id="process-heading"
              initial={{ y: "105%" }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.05, ease }}
              className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.98] tracking-tight text-white"
            >
              <span className="block">{line1}.</span>
              {line2 && <span className="block text-[#A1E233]">{line2}</span>}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Step
              key={step.number}
              index={i}
              number={step.number}
              title={step.title}
              description={step.description}
              accent={STEP_ACCENTS[i % STEP_ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
