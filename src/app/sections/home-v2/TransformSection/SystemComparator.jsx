"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useTransform } from "framer-motion";
import ActiveSystem from "./ActiveSystem";
import FragmentedSystem from "./FragmentedSystem";
import ComparatorHandle from "./ComparatorHandle";
import TransformationLedger from "./TransformationLedger";
import OutcomeRail from "./OutcomeRail";
import {
  DEMO_DURATION,
  DEMO_END,
  DEMO_START,
  EASE_PREMIUM,
  FEATHER,
  PHASE_BREAKPOINTS,
  PULSE_THRESHOLD,
  REVEAL_DEFAULT,
} from "./constants";

// ── canvas draggable de tablet/desktop (>= 768px) ───────────────────────────
// Un único progress (0-100, MotionValue) maneja TODO: posición del handle y la
// línea divisoria, las máscaras de revelado de ambas capas, el brillo verde de
// fondo, el ledger de transformaciones y el riel de resultados. Nada de esto
// pasa por setState en cada frame — sólo tres cosas de bajo cambio (fase
// semántica, pulso, hint) usan estado de React, y ambas están "guardadas"
// para no re-renderizar salvo que realmente cambien de valor.
export default function SystemComparator({ copy, id }) {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const hasAutoPlayedRef = useRef(false);
  const hasInteractedRef = useRef(false);
  const lastValueRef = useRef(REVEAL_DEFAULT);

  const prefersReduced = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const progress = useMotionValue(REVEAL_DEFAULT);

  const [phase, setPhase] = useState("transitioning");
  const [hintVisible, setHintVisible] = useState(true);
  const [pulseKey, setPulseKey] = useState(0);

  const left = useTransform(progress, (v) => `${v}%`);
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
    setPhase((prev) => (prev === next ? prev : next));
    if (v >= PULSE_THRESHOLD && lastValueRef.current < PULSE_THRESHOLD && !prefersReduced) {
      setPulseKey((k) => k + 1);
    }
    lastValueRef.current = v;
  });

  useEffect(() => {
    if (!isInView || hasAutoPlayedRef.current || hasInteractedRef.current) return;
    hasAutoPlayedRef.current = true;

    if (prefersReduced) {
      progress.set(REVEAL_DEFAULT);
      return;
    }

    progress.set(DEMO_START);
    if (inputRef.current) inputRef.current.value = String(DEMO_START);

    const controls = animate(progress, DEMO_END, {
      duration: DEMO_DURATION,
      delay: 0.4,
      ease: EASE_PREMIUM,
      onUpdate: (v) => {
        if (inputRef.current && !hasInteractedRef.current) inputRef.current.value = String(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReduced, progress]);

  const handleInteract = useCallback(() => {
    if (hasInteractedRef.current) return;
    hasInteractedRef.current = true;
    setHintVisible(false);
  }, []);

  const handleChange = useCallback(
    (e) => {
      progress.set(Number(e.target.value));
    },
    [progress],
  );

  const phaseText = phase === "fragmented" ? copy.phaseFragmented : phase === "active" ? copy.phaseActive : copy.phaseTransitioning;

  return (
    <div>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0a0a] md:aspect-[16/9] lg:aspect-[16/7]"
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
          <ActiveSystem copy={copy.left} systemFlow={copy.systemFlow} nodeStatus={copy.nodeStatus} reduceMotion={prefersReduced} />
        </motion.div>
        <motion.div className="absolute inset-0" style={{ WebkitMaskImage: maskFragmented, maskImage: maskFragmented }}>
          <FragmentedSystem copy={copy.right} moduleLimit={6} />
        </motion.div>

        {pulseKey > 0 && (
          <div
            key={pulseKey}
            aria-hidden
            className="syn-transform-pulse pointer-events-none absolute inset-0"
          />
        )}

        <ComparatorHandle
          id={id}
          left={left}
          inputRef={inputRef}
          onChange={handleChange}
          onInteract={handleInteract}
          ariaLabel={copy.ariaLabel}
          valueText={phaseText}
          dragHint={copy.dragHint}
          hintVisible={hintVisible}
        />
      </div>

      <output htmlFor={id} className="sr-only" aria-live="polite">
        {phaseText}
      </output>

      <TransformationLedger transformations={copy.transformations} progress={progress} />
      <OutcomeRail outcomes={copy.outcomes} progress={progress} />
    </div>
  );
}
