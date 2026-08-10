"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

// Parallax suave para imágenes decorativas (renders 3D). Deshabilitado en
// mobile (< 768px) y con prefers-reduced-motion. Nunca usar sobre texto.
export default function ParallaxImage({ children, className, range = "-12%" }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const disabled = prefersReduced || isMobile;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], disabled ? ["0%", "0%"] : ["0%", range]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: "hidden", position: "relative", height: "100%", width: "100%" }}
    >
      <motion.div style={{ y, position: "relative", height: "100%", width: "100%" }}>{children}</motion.div>
    </div>
  );
}
