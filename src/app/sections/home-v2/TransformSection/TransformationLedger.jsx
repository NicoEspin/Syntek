"use client";

import { motion, useTransform } from "motion/react";

const SPAN = 16;

function useItemMotion(progress, threshold) {
  const afterOpacity = useTransform(progress, [threshold - SPAN, threshold], [0, 1]);
  const beforeOpacity = useTransform(progress, [threshold - SPAN, threshold], [1, 0]);
  const markScale = useTransform(progress, [threshold - SPAN, threshold], [1, 0]);
  const checkScale = useTransform(progress, [threshold - SPAN, threshold], [0, 1]);
  return { afterOpacity, beforeOpacity, markScale, checkScale };
}

function AnimatedLedgerItem({ item, progress, index, total }) {
  const threshold = ((index + 1) / (total + 1)) * 100;
  const { afterOpacity, beforeOpacity, markScale, checkScale } = useItemMotion(progress, threshold);

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

function StaticLedgerItem({ item }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-white/8 py-3 text-xs leading-snug">
      <span className="text-white/38 line-through decoration-white/20">{item.before}</span>
      <span aria-hidden className="text-[#A1E233]">→</span>
      <span className="font-medium text-white/80">{item.after}</span>
    </div>
  );
}

export default function TransformationLedger({ transformations, progress }) {
  if (!progress) {
    return (
      <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {transformations.map((item) => (
          <StaticLedgerItem key={item.before} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-1 max-sm:mt-5 max-sm:gap-x-2.5 max-sm:gap-y-2 lg:mt-10 lg:grid-cols-3">
      {transformations.map((item, i) => (
        <AnimatedLedgerItem
          key={item.before}
          item={item}
          progress={progress}
          index={i}
          total={transformations.length}
        />
      ))}
    </div>
  );
}
