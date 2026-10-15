"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import ActiveSystem from "./ActiveSystem";
import FragmentedSystem from "./FragmentedSystem";
import TransformationLedger from "./TransformationLedger";
import { FEATHER, PHASE_BREAKPOINTS } from "./constants";

// ── canvas de tablet/desktop (>= 768px) ─────────────────────────────────────
// Un único progress (0-100, MotionValue) maneja TODO: posición del indicador y
// la línea divisoria, las máscaras de revelado de ambas capas, el brillo
// verde de fondo y el ledger de transformaciones. El progress se controla
// ÚNICAMENTE por scroll — no hay drag ni tap — sincronizado con el scroll de
// un wrapper "story" más alto que la card (scrollytelling con pin): la card
// queda sticky mientras se recorre ese alto extra, dando tiempo real a que la
// transformación se vea completa antes de que la página siga bajando.
export default function SystemComparator({ copy }) {
  const storyRef = useRef(null);
  const phaseRef = useRef("fragmented");
  const prefersReduced = useReducedMotion();
  const progress = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });

  const [phase, setPhase] = useState("fragmented");

  const maskActive = useTransform(
    progress,
    (v) => `linear-gradient(to right, black 0%, black ${Math.max(v - FEATHER, 0)}%, transparent ${v}%)`,
  );
  const maskFragmented = useTransform(
    progress,
    (v) => `linear-gradient(to right, transparent ${v}%, black ${Math.min(v + FEATHER, 100)}%, black 100%)`,
  );
  const glowOpacity = useTransform(progress, [0, 100], [0.2, 0.55]);

  useMotionValueEvent(progress, "change", (v) => {
    const next = v < PHASE_BREAKPOINTS.fragmented ? "fragmented" : v > PHASE_BREAKPOINTS.transitioning ? "active" : "transitioning";
    if (next !== phaseRef.current) {
      phaseRef.current = next;
      setPhase(next);
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (prefersReduced) return;
    progress.set(v * 100);
  });

  const phaseText = phase === "fragmented" ? copy.phaseFragmented : phase === "active" ? copy.phaseActive : copy.phaseTransitioning;

  return (
    <div>
      <div ref={storyRef} className="relative h-[155vh] motion-reduce:h-auto">
        <div className="sticky top-28 flex flex-col justify-center motion-reduce:hidden">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-neutral-950 lg:aspect-[16/7]"
          >
            {/* grilla técnica casi imperceptible */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(161,226,51,1) 0%, transparent 70%)", opacity: glowOpacity }}
            />
            <motion.div className="absolute inset-0" style={{ WebkitMaskImage: maskActive, maskImage: maskActive }}>
              <ActiveSystem copy={copy.left} systemFlow={copy.systemFlow} nodeStatus={copy.nodeStatus} />
            </motion.div>
            <motion.div className="absolute inset-0" style={{ WebkitMaskImage: maskFragmented, maskImage: maskFragmented }}>
              <FragmentedSystem copy={copy.right} moduleLimit={6} />
            </motion.div>

          </div>

          <TransformationLedger transformations={copy.transformations} progress={progress} />
        </div>

        <div className="hidden grid-cols-2 gap-4 motion-reduce:grid">
          <article className="relative min-h-[480px] overflow-hidden rounded-3xl border border-white/8 bg-neutral-950">
            <FragmentedSystem copy={copy.right} />
          </article>
          <article className="relative min-h-[480px] overflow-hidden rounded-3xl border border-[#A1E233]/20 bg-neutral-950">
            <ActiveSystem copy={copy.left} systemFlow={copy.systemFlow} nodeStatus={copy.nodeStatus} compact />
          </article>
          <div className="col-span-2">
            <TransformationLedger transformations={copy.transformations} />
          </div>
        </div>
      </div>

      <output className="sr-only" aria-live="polite">
        {phaseText}
      </output>
    </div>
  );
}
