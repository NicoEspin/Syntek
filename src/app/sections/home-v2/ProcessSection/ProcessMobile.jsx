"use client";

import { useCallback, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Button from "@/app/components/Button";
import TitleSection from "@/app/components/(common)/TitleSection";
import RevealBlock from "@/app/components/RevealBlock";
import { EASE as ease, SETTLED_POINTS, TOTAL_STEPS } from "./constants";
import ProcessVisual from "./ProcessVisual";

// rail de puntos — misma lógica que el rail de desktop (click = scrollea al
// tramo del paso), en versión horizontal compacta para mobile.
function ProcessDots({ steps, activeIndex, onSelect, label }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="mt-3 flex items-center justify-center gap-2.5 [@media(min-height:760px)]:mt-6"
    >
      {steps.map((step, i) => (
        <button
          key={step.number}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-current={i === activeIndex ? "step" : undefined}
          aria-label={step.number}
          onClick={() => onSelect(i)}
          className="flex min-h-11 min-w-11 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A1E233]/60"
        >
          <span
            aria-hidden
            className="h-[3px] rounded-full transition-[width,background-color] duration-500 ease-out"
            style={{
              width: i === activeIndex ? "22px" : "8px",
              backgroundColor: i === activeIndex ? "#A1E233" : "rgba(255,255,255,0.16)",
            }}
          />
        </button>
      ))}
    </div>
  );
}

// un paso de la versión estática — el motor visual necesita un MotionValue
// (aunque no anime), de ahí el useMotionValue en vez de pasar un número.
function ProcessStaticStep({ step, index, visualLabels }) {
  const progress = useMotionValue(SETTLED_POINTS[index] ?? 0.95);

  return (
    <RevealBlock className="flex flex-col items-center text-center">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#A1E233] font-mono text-[11px] tabular-nums text-[#A1E233]">
        {step.number}
      </span>
      <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
        {step.category}
      </span>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{step.title}</h3>
      <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/50">{step.description}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[#A1E233]" aria-hidden>
          →
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">{step.outcome}</span>
      </div>
      <ProcessVisual
        progress={progress}
        labels={visualLabels}
        animated={false}
        className="relative mt-6 aspect-square w-full max-w-[360px]"
      />
    </RevealBlock>
  );
}

// versión estática (prefers-reduced-motion): mismo contenido, sin scroll
// pinning — cada paso entra con un fade simple al llegar a viewport.
function ProcessStaticList({ steps, visualLabels }) {
  return (
    <div className="mt-14 flex flex-col gap-14">
      {steps.map((step, i) => (
        <ProcessStaticStep key={step.number} step={step} index={i} visualLabels={visualLabels} />
      ))}
    </div>
  );
}

export default function ProcessMobile({ copy, steps, waHref }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const isSectionInView = useInView(containerRef, { margin: "20% 0px 20% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!isSectionInView) {
      return;
    }

    const idx = Math.min(TOTAL_STEPS - 1, Math.max(0, Math.floor(v * TOTAL_STEPS)));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  const handleDotSelect = useCallback((index) => {
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
  const [titlePre, titlePost] = copy.title.split(copy.titleHighlight);

  return (
    <div className={prefersReduced ? "block lg:hidden" : "lg:hidden"}>
      <TitleSection title={copy.sectionLabel} />

      <div className="mt-10">
        <div className="flex items-center gap-2">
          <span className="h-px w-5 bg-[#A1E233]" aria-hidden />
       
        </div>
        <h2
          id="process-heading-mobile"
          className="mt-5 text-[clamp(1.6rem,6vw,2.2rem)] font-black leading-[1.1] tracking-tight text-white"
        >
          {titlePre}
          <span className="text-[#A1E233]">{copy.titleHighlight}</span>
          {titlePost}
        </h2>
      </div>

      {prefersReduced ? (
        <ProcessStaticList steps={steps} visualLabels={copy.visual} />
      ) : (
        // mismo mecanismo que desktop: contenedor alto + viewport sticky, el
        // scroll real mueve el progreso (0–1) que anima visual + crossfade de
        // texto — no hay que "scrollear cada parte", el paso avanza solo.
        <div ref={containerRef} className="relative mt-14" style={{ height: `${TOTAL_STEPS * 100}vh` }}>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden pb-[110px] pt-20">
            {isSectionInView ? (
              <ProcessVisual
                progress={scrollYProgress}
                labels={copy.visual}
                compact
                className="relative mx-auto aspect-square w-full max-w-[min(80vw,30vh,280px)] [@media(min-height:760px)]:max-w-[min(92vw,38vh,400px)]"
              />
            ) : (
              <div className="relative mx-auto aspect-square w-full max-w-[min(80vw,30vh,280px)] [@media(min-height:760px)]:max-w-[min(92vw,38vh,400px)]" />
            )}

            <div className="relative mt-3 min-h-[150px] w-full max-w-sm text-center [@media(min-height:760px)]:mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease }}
                >
                  <div className="flex flex-col items-center">
                    <span
                      aria-hidden
                      className="select-none font-mono text-2xl font-black leading-none tabular-nums text-[#A1E233] [@media(min-height:760px)]:text-3xl"
                    >
                      {activeStep.number}
                    </span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 [@media(min-height:760px)]:mt-3">
                      {activeStep.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-white [@media(min-height:760px)]:text-xl">
                      {activeStep.title}
                    </h3>
                    <p className="mt-2 text-xs font-light leading-snug text-white/50 [@media(min-height:760px)]:mt-3 [@media(min-height:760px)]:text-sm [@media(min-height:760px)]:leading-relaxed">
                      {activeStep.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2 [@media(min-height:760px)]:mt-4">
                      <span className="text-[#A1E233]" aria-hidden>
                        →
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                        {activeStep.outcome}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <ProcessDots steps={steps} activeIndex={activeIndex} onSelect={handleDotSelect} label={copy.eyebrow} />
          </div>
        </div>
      )}

      <RevealBlock className="mt-4 border-t border-white/8 pt-8">
        <p className="text-sm font-light leading-relaxed text-white/55">{copy.closing.phrase}</p>
        <Button href={waHref} target="_blank" rel="noopener noreferrer" arrow className="mt-5 w-full sm:w-auto">
          {copy.closing.cta}
        </Button>
      </RevealBlock>
    </div>
  );
}
