"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useCallback, useEffect, useRef } from "react";

const MAX_TILT = 3.25;
const SPRING = { stiffness: 180, damping: 24, mass: 0.55 };

export default function PointerTilt({ children }) {
  const boundsRef = useRef(null);
  const surfaceRef = useRef(null);
  const bounds = useRef(null);
  const willChangeTimeout = useRef(null);
  const reduceMotion = useReducedMotion();
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const rotateX = useSpring(rotateXTarget, SPRING);
  const rotateY = useSpring(rotateYTarget, SPRING);

  const resetTilt = useCallback(() => {
    rotateXTarget.set(0);
    rotateYTarget.set(0);

    window.clearTimeout(willChangeTimeout.current);
    willChangeTimeout.current = window.setTimeout(() => {
      if (surfaceRef.current) surfaceRef.current.style.willChange = "auto";
    }, 500);
  }, [rotateXTarget, rotateYTarget]);

  const tiltIsDisabled = (event) =>
    reduceMotion ||
    event.pointerType !== "mouse" ||
    window.matchMedia("(pointer: coarse)").matches;

  const handlePointerEnter = (event) => {
    bounds.current = boundsRef.current?.getBoundingClientRect() ?? null;
    if (tiltIsDisabled(event)) return;

    window.clearTimeout(willChangeTimeout.current);
    if (surfaceRef.current) surfaceRef.current.style.willChange = "transform";
  };

  const handlePointerMove = (event) => {
    if (tiltIsDisabled(event) || !bounds.current) return;

    const normalizedX = ((event.clientX - bounds.current.left) / bounds.current.width) * 2 - 1;
    const normalizedY = ((event.clientY - bounds.current.top) / bounds.current.height) * 2 - 1;

    rotateXTarget.set(-normalizedY * MAX_TILT);
    rotateYTarget.set(normalizedX * MAX_TILT);
  };

  useEffect(() => {
    const updateBounds = () => {
      if (bounds.current && boundsRef.current) {
        bounds.current = boundsRef.current.getBoundingClientRect();
      }
    };

    window.addEventListener("resize", updateBounds, { passive: true });
    return () => {
      window.removeEventListener("resize", updateBounds);
      window.clearTimeout(willChangeTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) resetTilt();
  }, [reduceMotion, resetTilt]);

  return (
    <div
      ref={boundsRef}
      className="nueva-home-panel-tilt-hitbox"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <motion.div
        ref={surfaceRef}
        className="nueva-home-panel-tilt"
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
