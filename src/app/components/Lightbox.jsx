"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

export default function Lightbox({
  images,
  alts = [],
  index,
  onIndexChange,
  onClose,
  closeLabel = "Close",
  prevLabel = "Previous",
  nextLabel = "Next",
  counterText,
}) {
  const prefersReduced = useReducedMotion();
  const total = images.length;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && index < total - 1) onIndexChange(index + 1);
      if (event.key === "ArrowLeft" && index > 0) onIndexChange(index - 1);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, total, onClose, onIndexChange]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReduced ? 0.01 : 0.35, ease: EASE_PREMIUM }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/30 md:right-8 md:top-8"
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>

      <div className="relative flex w-fit max-w-full items-center justify-center">
        <Image
          src={images[index]}
          alt={alts[index] || ""}
          width={1600}
          height={2000}
          sizes="100vw"
          className="max-h-[85vh] w-auto max-w-full rounded-lg"
        />

        {total > 1 ? (
          <>
            {index > 0 ? (
              <button
                type="button"
                onClick={() => onIndexChange(index - 1)}
                aria-label={prevLabel}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-black/70"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
              </button>
            ) : null}

            {index < total - 1 ? (
              <button
                type="button"
                onClick={() => onIndexChange(index + 1)}
                aria-label={nextLabel}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-black/70"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
              </button>
            ) : null}
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {counterText ? counterText(index + 1, total) : `${index + 1}/${total}`}
        </div>
      ) : null}
    </motion.div>
  );
}
