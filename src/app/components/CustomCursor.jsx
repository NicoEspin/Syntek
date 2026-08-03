"use client";

import { useEffect, useRef, useState } from "react";

// Cursor custom (punto + anillo magnético) — vive en el layout, así que no
// remonta entre navegaciones. Por eso usa delegación de eventos sobre
// document en vez de querySelectorAll una sola vez: los targets hover
// (a, button, [data-cursor-hover]) cambian con cada página.
// [data-cursor-zone] (Projects) ya tiene su propio cursor grande con label —
// el anillo se ignora ahí para no duplicar el indicador.
export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    document.documentElement.classList.add("has-custom-cursor");
    setEnabled(true);

    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onOver = (e) => {
      if (e.target.closest?.("[data-cursor-zone]")) return;
      if (!e.target.closest?.("a, button, [data-cursor-hover]")) return;
      if (!ring.current) return;
      ring.current.style.width = "56px";
      ring.current.style.height = "56px";
      ring.current.style.marginLeft = "-28px";
      ring.current.style.marginTop = "-28px";
      ring.current.style.borderColor = "rgba(161,226,51,0.9)";
      ring.current.style.background = "rgba(161,226,51,0.08)";
    };

    const onOut = (e) => {
      if (e.target.closest?.("[data-cursor-zone]")) return;
      if (!e.target.closest?.("a, button, [data-cursor-hover]")) return;
      if (!ring.current) return;
      ring.current.style.width = "32px";
      ring.current.style.height = "32px";
      ring.current.style.marginLeft = "-16px";
      ring.current.style.marginTop = "-16px";
      ring.current.style.borderColor = "rgba(161,226,51,0.5)";
      ring.current.style.background = "transparent";
    };

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ring.current) ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        data-cursor
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#A1E233",
          pointerEvents: "none",
          zIndex: 99999,
          marginLeft: -3,
          marginTop: -3,
          willChange: "transform",
        }}
      />
      <div
        ref={ring}
        data-cursor
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(161,226,51,0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          marginLeft: -16,
          marginTop: -16,
          willChange: "transform",
          transition:
            "width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), margin 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.25s, background 0.25s",
        }}
      />
    </>
  );
}
