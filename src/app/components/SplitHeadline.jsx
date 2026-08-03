"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

export default function SplitHeadline({
  text,
  className,
  as: Tag = "h2",
  id,
  delay = 0,
  ariaHidden = false,
  highlightWords = [],
  highlightClassName = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");
  const stagger = prefersReduced ? 0 : 0.055;
  const highlightedWords = new Set(highlightWords.filter(Boolean));

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      aria-label={ariaHidden ? undefined : text}
      aria-hidden={ariaHidden || undefined}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
        >
            <motion.span
              className={highlightedWords.has(word) ? highlightClassName : undefined}
              style={{ display: "inline-block" }}
              initial={{ y: prefersReduced ? 0 : "105%" }}
              animate={isInView ? { y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0.01 : 0.65, delay: delay + i * stagger, ease: EASE_PREMIUM }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
