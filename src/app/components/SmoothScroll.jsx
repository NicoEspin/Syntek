"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "@/i18n/navigation";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const isSmoothScrollActive = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarsePointer) return;

    isSmoothScrollActive.current = true;

    let raf;
    let timeoutId;
    let cancelled = false;

    const startLenis = () => {
      if (cancelled || lenisRef.current) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenisRef.current = lenis;

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
        isSmoothScrollActive.current = false;
        window.cancelIdleCallback(idleId);
        clearTimeout(timeoutId);
        cancelAnimationFrame(raf);
        lenisRef.current?.destroy();
        lenisRef.current = null;
      };
    }

    timeoutId = window.setTimeout(startLenis, 250);

    return () => {
      cancelled = true;
      isSmoothScrollActive.current = false;
      clearTimeout(timeoutId);
      cancelAnimationFrame(raf);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Lenis keeps its own scroll target in memory. On client-side navigation
  // (layout stays mounted, Lenis instance persists) it fights the browser's
  // scroll-to-top and animates back to the previous page's position. Only
  // relevant on desktop — Lenis is disabled entirely on coarse pointers, and
  // native scroll restoration already handles the reset there.
  useEffect(() => {
    if (!isSmoothScrollActive.current) return;

    window.scrollTo(0, 0);
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <>{children}</>;
}
