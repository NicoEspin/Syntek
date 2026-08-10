"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// indicador visual pasivo — el progress se controla únicamente por scroll
// (scrollytelling con pin), no hay drag ni tap: este handle solo marca dónde
// va el recorrido, usando la misma motion value `left` que maneja las
// máscaras/crossfade y el ledger. Sin chevrons ni cursor de arrastre para no
// sugerir una interacción que ya no existe.
// variant "canvas" (desktop/tablet ≥768px): línea vertical + marca centrada.
// variant "track" (mobile): sin línea — la marca queda anclada abajo.
export default function ComparatorHandle({ left, variant = "canvas" }) {
  const isTrack = variant === "track";

  return (
    <>
      {!isTrack && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 z-20 w-px bg-[#A1E233]/70"
          style={{ left }}
        />
      )}

      <motion.div
        aria-hidden
        className={cn(
          "pointer-events-none absolute z-20 flex size-5 items-center justify-center rounded-full border-2 border-[#A1E233] bg-[#0a0a0a] shadow-[0_0_0_6px_rgba(161,226,51,0.08)]",
          isTrack ? "bottom-5" : "top-1/2 -translate-y-1/2",
        )}
        style={{ left, x: "-50%" }}
      >
        <span className="size-1.5 rounded-full bg-[#A1E233]" />
      </motion.div>
    </>
  );
}
