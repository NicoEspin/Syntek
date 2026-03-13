"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProjectCursor({ label }) {
  const t = useTranslations("Projects");
  const shouldReduceMotion = useReducedMotion();
  const [isCoarsePointer, setIsCoarsePointer] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
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

    const zones = document.querySelectorAll("[data-cursor-zone]");

    const handlePointerMove = (event) => {
      cursorX.set(event.clientX - 42);
      cursorY.set(event.clientY - 42);
    };

    const handlePointerEnter = () => {
      cursorScale.set(1);
    };

    const handlePointerLeave = () => {
      cursorScale.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove);

    zones.forEach((zone) => {
      zone.addEventListener("pointerenter", handlePointerEnter);
      zone.addEventListener("pointerleave", handlePointerLeave);
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      zones.forEach((zone) => {
        zone.removeEventListener("pointerenter", handlePointerEnter);
        zone.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, [cursorScale, cursorX, cursorY, isCoarsePointer]);

  if (!isMounted || isCoarsePointer) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, scale }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-[84px] w-[84px] items-center justify-center rounded-full border border-black/10 bg-primary1 text-black mix-blend-difference"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
        {label || t("viewProject")}
      </span>
    </motion.div>
  );
}
