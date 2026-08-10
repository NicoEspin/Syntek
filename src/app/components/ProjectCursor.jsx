"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export default function ProjectCursor({ label = "View project" }) {
  const shouldReduceMotion = useReducedMotion();
  const [isCoarsePointer, setIsCoarsePointer] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [accent, setAccent] = useState("primary");
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const cursorScale = useMotionValue(0);

  const x = useSpring(cursorX, {
    stiffness: shouldReduceMotion ? 1000 : 360,
    damping: shouldReduceMotion ? 90 : 28,
    mass: 0.45,
  });
  const y = useSpring(cursorY, {
    stiffness: shouldReduceMotion ? 1000 : 360,
    damping: shouldReduceMotion ? 90 : 28,
    mass: 0.45,
  });
  const scale = useSpring(cursorScale, {
    stiffness: shouldReduceMotion ? 1000 : 280,
    damping: shouldReduceMotion ? 90 : 24,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updatePointerMode = (event) => {
      setIsCoarsePointer(event.matches);
      setIsMounted(true);
    };

    updatePointerMode(mediaQuery);
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => mediaQuery.removeEventListener("change", updatePointerMode);
  }, []);

  useEffect(() => {
    if (isCoarsePointer) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      cursorX.set(event.clientX - 42);
      cursorY.set(event.clientY - 42);
    };

    const handlePointerOver = (event) => {
      const zone =
        event.target instanceof Element
          ? event.target.closest("[data-cursor-zone]")
          : null;

      if (!zone) {
        return;
      }

      setAccent(zone.dataset.cursorAccent === "violet" ? "violet" : "primary");
      cursorScale.set(1);
    };

    const handlePointerOut = (event) => {
      const zone =
        event.target instanceof Element
          ? event.target.closest("[data-cursor-zone]")
          : null;

      if (!zone) {
        return;
      }

      const nextZone =
        event.relatedTarget instanceof Element
          ? event.relatedTarget.closest("[data-cursor-zone]")
          : null;

      if (event.relatedTarget instanceof Element && nextZone && zone.contains(event.relatedTarget)) {
        return;
      }

      if (nextZone) {
        setAccent(nextZone.dataset.cursorAccent === "violet" ? "violet" : "primary");
        return;
      }

      setAccent("primary");
      cursorScale.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [cursorScale, cursorX, cursorY, isCoarsePointer]);

  if (!isMounted || isCoarsePointer) {
    return null;
  }

  const accentClassName =
    accent === "violet"
      ? "border-violet-deep/60 bg-violet text-on-violet"
      : "border-black/10 bg-primary1 text-black";

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, scale }}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] flex h-[84px] w-[84px] items-center justify-center rounded-full border mix-blend-difference transition-colors duration-300 ${accentClassName}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
        {label}
      </span>
    </motion.div>
  );
}
