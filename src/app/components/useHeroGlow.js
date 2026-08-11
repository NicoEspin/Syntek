"use client";

import { useEffect } from "react";

// glow radial que sigue al mouse con lerp suave — desktop/puntero fino
// únicamente, y desactivado con prefers-reduced-motion. Compartido entre
// HeroV2 (home) y VCPHero.
export default function useHeroGlow(glowRef, prefersReduced) {
  useEffect(() => {
    if (prefersReduced) return;
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;

    let targetX = 50;
    let targetY = 50;
    let glowX = 50;
    let glowY = 50;
    let raf;

    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      glowX += (targetX - glowX) * 0.05;
      glowY += (targetY - glowY) * 0.05;
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(161,226,51,0.12) 0%, transparent 60%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [glowRef, prefersReduced]);
}
