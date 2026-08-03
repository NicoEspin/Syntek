"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { REVEAL_DEFAULT, REVEAL_MAX, REVEAL_MIN } from "./constants";

// input real (mouse + touch + teclado nativos) superpuesto al canvas. Queda
// visualmente oculto (opacity-0) — el handle y la línea que sí se ven usan la
// MISMA motion value `left`, así nunca se desincronizan del valor real.
export default function ComparatorHandle({
  left,
  inputRef,
  onChange,
  onInteract,
  ariaLabel,
  valueText,
  dragHint,
  hintVisible,
  id,
}) {
  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type="range"
        min={REVEAL_MIN}
        max={REVEAL_MAX}
        step={1}
        defaultValue={REVEAL_DEFAULT}
        onChange={onChange}
        onPointerDown={onInteract}
        onKeyDown={onInteract}
        onTouchStart={onInteract}
        aria-label={ariaLabel}
        aria-valuetext={valueText}
        className="peer absolute inset-0 z-30 h-full w-full cursor-ew-resize touch-pan-y opacity-0"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-20 w-px bg-[#A1E233]/70"
        style={{ left }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#A1E233] bg-[#0a0a0a] shadow-[0_0_0_6px_rgba(161,226,51,0.08)] transition-shadow duration-200 peer-focus-visible:shadow-[0_0_0_6px_rgba(161,226,51,0.28)] lg:size-12"
        style={{ left, x: "-50%" }}
      >
        <ChevronLeft size={13} strokeWidth={2.5} className="text-[#A1E233]" />
        <ChevronRight size={13} strokeWidth={2.5} className="text-[#A1E233]" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 z-20 mt-9 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white/60 transition-opacity duration-300 lg:mt-10"
        style={{ left, x: "-50%", opacity: hintVisible ? 1 : 0 }}
      >
        {dragHint}
      </motion.div>
    </>
  );
}
