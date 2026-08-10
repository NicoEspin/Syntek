"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Repeat } from "lucide-react";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];
const SWIPE_THRESHOLD_RATIO = 0.18;
const SWIPE_VELOCITY = 480;

export default function PostCarousel({
  images,
  alts = [],
  sizes = "(max-width: 768px) 50vw, 33vw",
  accentColor = "var(--color-accent)",
  counterText,
  hintText,
  carouselLabel,
  className,
  onImageOpen,
}) {
  const prefersReduced = useReducedMotion();
  const trackRef = useRef(null);
  const dragDistanceRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const total = images.length;
  const canDrag = total > 1 && !prefersReduced;

  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width;
      if (w) setWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!width) return;
    animate(x, -index * width, {
      type: prefersReduced ? "tween" : "spring",
      stiffness: 340,
      damping: 34,
      duration: prefersReduced ? 0.01 : undefined,
    });
  }, [index, width, prefersReduced, x]);

  const goTo = (next) => setIndex(Math.min(Math.max(next, 0), total - 1));

  const handleDragEnd = (_event, info) => {
    if (!width) return;
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -width * SWIPE_THRESHOLD_RATIO || velocity < -SWIPE_VELOCITY) {
      goTo(index + 1);
    } else if (offset > width * SWIPE_THRESHOLD_RATIO || velocity > SWIPE_VELOCITY) {
      goTo(index - 1);
    } else {
      animate(x, -index * width, { type: "spring", stiffness: 340, damping: 34 });
    }
  };

  return (
    <div
      className={cn("group/carousel relative h-full w-full overflow-hidden", className)}
      role="group"
      aria-label={carouselLabel}
    >
      <div ref={trackRef} className="relative h-full w-full overflow-hidden">
        <motion.div
          className="flex h-full cursor-zoom-in"
          style={{ x }}
          drag={canDrag ? "x" : false}
          dragConstraints={{ left: -Math.max(total - 1, 0) * width, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => {
            dragDistanceRef.current = 0;
          }}
          onDrag={(_event, info) => {
            dragDistanceRef.current = Math.max(dragDistanceRef.current, Math.abs(info.offset.x));
          }}
          onDragEnd={handleDragEnd}
          onTap={() => {
            if (dragDistanceRef.current > 5) return;
            onImageOpen?.(index);
          }}
        >
          {images.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={alts[i] || ""}
                fill
                sizes={sizes}
                draggable={false}
                className="pointer-events-none object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {total > 1 ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),transparent_22%,transparent_78%,rgba(0,0,0,0.5))]" />

          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <Repeat className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            <span>{counterText ? counterText(index + 1, total) : `${index + 1}/${total}`}</span>
          </div>

          {index > 0 ? (
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 flex h-9 w-9 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/carousel:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
          ) : null}

          {index < total - 1 ? (
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next"
              className="absolute right-2 top-1/2 flex h-9 w-9 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/carousel:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          ) : null}

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1}/${total}`}
                aria-current={i === index}
                className="flex h-4 w-4 items-center justify-center"
              >
                <motion.span
                  className="block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: i === index ? accentColor : "rgba(255,255,255,0.4)" }}
                  animate={{ scale: i === index ? 1.35 : 1 }}
                  transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                />
              </button>
            ))}
          </div>

          {hintText ? (
            <span className="sr-only">{hintText}</span>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
