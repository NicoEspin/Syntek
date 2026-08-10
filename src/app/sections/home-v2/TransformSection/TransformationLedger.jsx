"use client";

import { motion, useTransform } from "motion/react";

// umbrales repartidos a lo largo del recorrido (0-100) — cada transformación
// "ocurre" en su propio tramo, así el usuario ve el cambio ítem por ítem en
// vez de un crossfade global de toda la lista a la vez.
const THRESHOLDS = [14, 28, 43, 57, 71, 86];
const SPAN = 16;

function useItemMotion(progress, threshold) {
  const afterOpacity = useTransform(progress, [threshold - SPAN, threshold], [0, 1]);
  const beforeOpacity = useTransform(progress, [threshold - SPAN, threshold], [1, 0]);
  const markScale = useTransform(progress, [threshold - SPAN, threshold], [1, 0]);
  const checkScale = useTransform(progress, [threshold - SPAN, threshold], [0, 1]);
  return { afterOpacity, beforeOpacity, markScale, checkScale };
}

function LedgerItem({ item, motionValues }) {
  const { afterOpacity, beforeOpacity, markScale, checkScale } = motionValues;
  return (
    <div className="relative flex items-start gap-3 overflow-hidden border-t border-white/8 pt-4 max-sm:gap-2 max-sm:rounded-xl max-sm:border-t-0 max-sm:bg-white/[0.025] max-sm:px-2.5 max-sm:py-2">
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 h-full w-[2px] origin-top bg-[#A1E233] sm:hidden"
        style={{ scaleY: checkScale }}
      />
      <span className="relative mt-0.5 flex size-5 shrink-0 items-center justify-center">
        <motion.span
          aria-hidden
          className="absolute flex size-5 items-center justify-center rounded-full border border-white/12 text-[10px] font-light text-white/35"
          style={{ opacity: beforeOpacity, scale: markScale }}
        >
          ✕
        </motion.span>
        <motion.span
          aria-hidden
          className="absolute flex size-5 items-center justify-center rounded-full bg-[#A1E233] text-[10px] font-bold text-black"
          style={{ opacity: afterOpacity, scale: checkScale }}
        >
          ✓
        </motion.span>
      </span>
      <span className="relative block min-h-[2.6em] flex-1 text-[13px] leading-snug max-sm:min-h-[3.9em] max-sm:text-[12px]">
        <motion.span className="absolute inset-0 text-white/40 line-through decoration-white/20" style={{ opacity: beforeOpacity }}>
          {item.before}
        </motion.span>
        <motion.span className="absolute inset-0 font-medium text-white" style={{ opacity: afterOpacity }}>
          {item.after}
        </motion.span>
      </span>
    </div>
  );
}

export default function TransformationLedger({ transformations, progress }) {
  const m0 = useItemMotion(progress, THRESHOLDS[0]);
  const m1 = useItemMotion(progress, THRESHOLDS[1]);
  const m2 = useItemMotion(progress, THRESHOLDS[2]);
  const m3 = useItemMotion(progress, THRESHOLDS[3]);
  const m4 = useItemMotion(progress, THRESHOLDS[4]);
  const m5 = useItemMotion(progress, THRESHOLDS[5]);
  const motions = [m0, m1, m2, m3, m4, m5];

  return (
    <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-1 max-sm:mt-5 max-sm:gap-x-2.5 max-sm:gap-y-2 lg:mt-10 lg:grid-cols-3">
      {transformations.map((item, i) => (
        <LedgerItem key={item.before} item={item} motionValues={motions[i]} />
      ))}
    </div>
  );
}
