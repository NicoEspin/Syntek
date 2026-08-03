"use client";

import { motion, useTransform } from "framer-motion";
import { OUTCOME_THRESHOLDS } from "./constants";

function useOutcomeMotion(progress, threshold) {
  const opacity = useTransform(progress, [threshold - 18, threshold], [0.32, 1]);
  const lineScale = useTransform(progress, [threshold - 18, threshold], [0, 1]);
  return { opacity, lineScale };
}

export default function OutcomeRail({ outcomes, progress }) {
  const m0 = useOutcomeMotion(progress, OUTCOME_THRESHOLDS[0]);
  const m1 = useOutcomeMotion(progress, OUTCOME_THRESHOLDS[1]);
  const m2 = useOutcomeMotion(progress, OUTCOME_THRESHOLDS[2]);
  const motions = [m0, m1, m2];

  return (
    <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/8 pt-10 sm:grid-cols-3 lg:mt-16 lg:gap-12">
      {outcomes.map((outcome, i) => (
        <motion.div key={outcome.number} style={{ opacity: motions[i].opacity }} className="flex flex-col gap-3">
          <span className="relative h-px w-8 overflow-hidden bg-white/10" aria-hidden>
            <motion.span
              className="absolute inset-y-0 left-0 w-full origin-left bg-[#A1E233]"
              style={{ scaleX: motions[i].lineScale }}
            />
          </span>
          <span className="font-mono text-sm font-semibold text-[#A1E233]">{outcome.number}</span>
          <span className="text-base font-semibold tracking-tight text-white">{outcome.title}</span>
          <span className="text-[15px] leading-snug text-white/55">{outcome.description}</span>
        </motion.div>
      ))}
    </div>
  );
}
