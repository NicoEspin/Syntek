"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";

// Botón magnético — sigue sutilmente al cursor. JS puro (sin framer) para
// evitar overhead de estado en cada mousemove. Factor 0.2 = movimiento sutil.
export default function MagneticButton({ as: Tag = "a", className, children, hoverScale = 1, ...rest }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(${hoverScale})`;
    ref.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0) scale(1)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  };

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
