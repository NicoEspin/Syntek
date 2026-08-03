"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

export default function RevealBlock({ children, delay = 0, className, as = "div" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReduced ? 0.01 : 0.7, delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
