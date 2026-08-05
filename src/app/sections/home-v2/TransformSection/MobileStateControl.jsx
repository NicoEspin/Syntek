"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import ActiveSystem from "./ActiveSystem";
import FragmentedSystem from "./FragmentedSystem";
import ComparatorHandle from "./ComparatorHandle";
import TransformationLedger from "./TransformationLedger";
import { PHASE_BREAKPOINTS, PULSE_THRESHOLD } from "./constants";

// mobile/tablet (< 768px): mismo modelo que SystemComparator — el progress
// (0-100) se sincroniza con el scroll de un wrapper "story" más alto que la
// card (scrollytelling con pin), sin tabs ni botones: la card queda sticky
// mientras se recorre ese alto extra, dando tiempo real a ver la
// transformación completa antes de que la página siga bajando. El progress se
// controla ÚNICAMENTE por scroll — no hay drag ni tap.
export default function MobileStateControl({ copy }) {
  const storyRef = useRef(null);
  const lastValueRef = useRef(0);

  const prefersReduced = useReducedMotion();
  const progress = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });

  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("fragmented");
  const [pulseKey, setPulseKey] = useState(0);

  const left = useTransform(progress, (v) => `${v}%`);
  const fragmentedOpacity = useTransform(progress, [35, 65], [1, 0]);
  const activeOpacity = useTransform(progress, [35, 65], [0, 1]);
  const glowOpacity = useTransform(progress, [0, 100], [0.15, 0.4]);

  useMotionValueEvent(progress, "change", (v) => {
    const nextActive = v >= 50;
    setActive((prev) => (prev === nextActive ? prev : nextActive));
    const nextPhase =
      v < PHASE_BREAKPOINTS.fragmented ? "fragmented" : v > PHASE_BREAKPOINTS.transitioning ? "active" : "transitioning";
    setPhase((prev) => (prev === nextPhase ? prev : nextPhase));
    if (v >= PULSE_THRESHOLD && lastValueRef.current < PULSE_THRESHOLD && !prefersReduced) {
      setPulseKey((k) => k + 1);
    }
    lastValueRef.current = v;
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (prefersReduced) return;
    progress.set(v * 100);
  });

  useEffect(() => {
    if (!prefersReduced) return;
    progress.set(100);
  }, [prefersReduced, progress]);

  const phaseText = phase === "fragmented" ? copy.phaseFragmented : phase === "active" ? copy.phaseActive : copy.phaseTransitioning;

  return (
    <div>
      <div ref={storyRef} className={cn("relative", prefersReduced ? "h-auto" : "h-[170vh]")}>
        <div className={cn(prefersReduced ? "" : "sticky top-24 flex flex-col justify-center")}>
          <div className="relative min-h-[440px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 90% 55% at 50% 25%, rgba(161,226,51,1) 0%, transparent 70%)",
                opacity: glowOpacity,
              }}
            />

            <motion.div aria-hidden={active} className="absolute inset-0" style={{ opacity: fragmentedOpacity }}>
              <FragmentedSystem copy={copy.right} compact moduleLimit={5} />
            </motion.div>
            <motion.div aria-hidden={!active} className="absolute inset-0" style={{ opacity: activeOpacity }}>
              <ActiveSystem
                copy={copy.left}
                systemFlow={copy.systemFlow}
                nodeStatus={copy.nodeStatus}
                compact
                nodeLimit={5}
                reduceMotion={prefersReduced}
              />
            </motion.div>

            {pulseKey > 0 && <div key={pulseKey} aria-hidden className="syn-transform-pulse pointer-events-none absolute inset-0" />}

            <ComparatorHandle variant="track" left={left} />
          </div>

          <TransformationLedger transformations={copy.transformations} progress={progress} />
        </div>
      </div>

      <output className="sr-only" aria-live="polite">
        {phaseText}
      </output>
    </div>
  );
}
