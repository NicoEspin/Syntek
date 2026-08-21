"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

// Typewriter de palabras rotantes usado en los headlines del hero.
export default function RotatingWord({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || words.length <= 1) return;

    let id;
    const tick = () => setIndex((i) => (i + 1) % words.length);
    const start = () => {
      if (!id) id = setInterval(tick, interval);
    };
    const stop = () => {
      clearInterval(id);
      id = undefined;
    };

    // Pausar mientras la pestaña está oculta: si el intervalo sigue avisando
    // índices con la pestaña en background, las animaciones de salida (rAF)
    // no llegan a completarse y AnimatePresence acumula palabras sin desmontar.
    const handleVisibility = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [words, interval, prefersReduced]);

  if (prefersReduced) {
    return <span className="inline-block">{words[0]}</span>;
  }

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
