"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import ActiveSystem from "./ActiveSystem";
import FragmentedSystem from "./FragmentedSystem";
import TransformationLedger from "./TransformationLedger";
import OutcomeRail from "./OutcomeRail";
import { EASE_PREMIUM } from "./constants";

// mobile (< 768px): sin drag — un segmented control de 2 estados. El mismo
// panel vertical reorganiza su contenido; el ledger y el riel de resultados
// reutilizan los mismos componentes que el canvas de desktop, alimentados por
// un progress "sintético" (0 o 100) que se anima brevemente al cambiar de
// estado en vez de saltar de golpe.
export default function MobileStateControl({ copy }) {
  const [active, setActive] = useState(false);
  const prefersReduced = useReducedMotion();
  const progress = useMotionValue(50);

  useEffect(() => {
    const target = active ? 100 : 0;
    if (prefersReduced) {
      progress.set(target);
      return;
    }
    const controls = animate(progress, target, { duration: 0.5, ease: EASE_PREMIUM });
    return () => controls.stop();
  }, [active, prefersReduced, progress]);

  return (
    <div>
      <div role="group" aria-label={copy.ariaLabel} className="grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
        <button
          type="button"
          aria-pressed={!active}
          onClick={() => setActive(false)}
          className={cn(
            "min-h-11 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A1E233]/60",
            !active ? "bg-white/10 text-white" : "text-white/40",
          )}
        >
          {copy.mobileControl.improvised}
        </button>
        <button
          type="button"
          aria-pressed={active}
          onClick={() => setActive(true)}
          className={cn(
            "min-h-11 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A1E233]/60",
            active ? "bg-[#A1E233] text-black" : "text-white/40",
          )}
        >
          {copy.mobileControl.active}
        </button>
      </div>

      <div className="relative mt-5 min-h-[360px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReduced ? 0 : -12 }}
              transition={{ duration: prefersReduced ? 0.01 : 0.4, ease: EASE_PREMIUM }}
              className="relative"
            >
              <ActiveSystem
                copy={copy.left}
                systemFlow={copy.systemFlow}
                nodeStatus={copy.nodeStatus}
                compact
                nodeLimit={5}
                reduceMotion={prefersReduced}
              />
            </motion.div>
          ) : (
            <motion.div
              key="fragmented"
              initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReduced ? 0 : -12 }}
              transition={{ duration: prefersReduced ? 0.01 : 0.4, ease: EASE_PREMIUM }}
              className="relative"
            >
              <FragmentedSystem copy={copy.right} compact moduleLimit={5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <output className="sr-only" aria-live="polite">
        {active ? copy.left.status : copy.right.status}
      </output>

      <TransformationLedger transformations={copy.transformations} progress={progress} />
      <OutcomeRail outcomes={copy.outcomes} progress={progress} />
    </div>
  );
}
