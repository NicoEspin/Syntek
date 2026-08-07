"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarsePointer) return;

    let lenis;
    let raf;
    let timeoutId;
    let cancelled = false;

    const startLenis = () => {
      if (cancelled || lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const loop = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };

      raf = requestAnimationFrame(loop);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(() => {
        startLenis();
      }, { timeout: 1200 });

      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        clearTimeout(timeoutId);
        cancelAnimationFrame(raf);
        lenis?.destroy();
      };
    }

    timeoutId = window.setTimeout(startLenis, 250);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
