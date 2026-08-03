"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion, useTransform, motion } from "framer-motion";

// Contador animado — anima solo el valor numérico (transform-free, es texto),
// prefix/suffix se renderizan estáticos alrededor.
export default function AnimatedCounter({ target, prefix = "", suffix = "", decimals = 0, duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, target, prefersReduced]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
