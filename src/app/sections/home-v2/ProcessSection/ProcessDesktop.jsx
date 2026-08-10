"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import Button from "@/app/components/Button";
import TitleSection from "@/app/components/(common)/TitleSection";
import { cn } from "@/lib/utils";
import { EASE as ease, getStepIndexFromProgress, getVisualProgress, TOTAL_STEPS } from "./constants";
import ProcessVisual from "./ProcessVisual";

function ProcessRail({ steps, activeIndex, onSelect, label }) {
  return (
    <div role="tablist" aria-label={label} className="mt-10 flex flex-col gap-3 lg:mt-12">
      {steps.map((step, i) => (
        <button
          key={step.number}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-current={i === activeIndex ? "step" : undefined}
          onClick={() => onSelect(i)}
          className="group flex min-h-11 items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A1E233]/60"
        >
          <span
            aria-hidden
            className="w-[3px] shrink-0 rounded-full transition-[height,background-color] duration-500 ease-out"
            style={{
              height: i === activeIndex ? "26px" : "8px",
              backgroundColor: i <= activeIndex ? "#A1E233" : "rgba(255,255,255,0.14)",
            }}
          />
          <span
            className={cn(
              "font-mono text-[11px] tabular-nums transition-colors duration-300",
              i === activeIndex ? "text-[#A1E233]" : "text-white/30 group-hover:text-white/55",
            )}
          >
            {step.number}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function ProcessDesktop({ copy, steps, waHref }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = getStepIndexFromProgress(v);
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  const handleRailSelect = useCallback((index) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const containerHeight = el.offsetHeight;
    const viewportH = window.innerHeight;
    const targetProgress = (index + 0.5) / TOTAL_STEPS;
    const targetY = containerTop + targetProgress * (containerHeight - viewportH);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  const activeStep = steps[activeIndex];
  const isLastStep = activeIndex === TOTAL_STEPS - 1;
  const visualProgress = useTransform(scrollYProgress, getVisualProgress);
  const [titlePre, titlePost] = copy.title.split(copy.titleHighlight);

  return (
    <div className={prefersReduced ? "hidden" : "hidden lg:block"}>
      <TitleSection title={copy.sectionLabel} />

      <div ref={containerRef} className="relative" style={{ height: `${TOTAL_STEPS * 115}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse 50% 45% at 85% 20%, rgba(134,79,254,0.04) 0%, transparent 60%)" }}
          />

          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] gap-16 px-4 md:px-5 lg:px-10 xl:px-24">
            {/* ── columna narrativa ── */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#A1E233]" aria-hidden />
     
              </div>

              <h2
                id="process-heading"
                className="mt-5 text-[clamp(1.7rem,2.6vw,2.6rem)] font-black leading-[1.1] tracking-tight text-white"
              >
                {titlePre}
                <span className="text-[#A1E233]">{copy.titleHighlight}</span>
                {titlePost}
              </h2>

              <div className="relative mt-10 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.55, ease }}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        aria-hidden
                        className="select-none font-mono text-4xl font-black leading-none tabular-nums text-[#A1E233] md:text-5xl"
                      >
                        {activeStep.number}
                      </span>
                      <div className="flex-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                          {activeStep.category}
                        </span>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-[1.75rem]">
                          {activeStep.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/50 md:text-[15px]">
                          {activeStep.description}
                        </p>
                        <div className="mt-5 flex items-center gap-2">
                          <span className="text-[#A1E233]" aria-hidden>
                            →
                          </span>
                          <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                            {activeStep.outcome}
                          </span>
                        </div>
                      </div>
                    </div>

                    {isLastStep && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35, ease }}
                        className="mt-8 border-t border-white/8 pt-6"
                      >
                        <p className="text-sm font-light leading-relaxed text-white/55">{copy.closing.phrase}</p>
                        <Button href={waHref} target="_blank" rel="noopener noreferrer" arrow className="mt-5">
                          {copy.closing.cta}
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <ProcessRail steps={steps} activeIndex={activeIndex} onSelect={handleRailSelect} label={copy.eyebrow} />
            </div>

            {/* ── motor visual ── */}
            <ProcessVisual progress={visualProgress} labels={copy.visual} className="relative mx-auto aspect-square w-full max-w-[560px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
