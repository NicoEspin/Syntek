"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import FlowParticleCanvas from "./FlowParticleCanvas";
import {
  ACCENT_FIBERS,
  CORE_FIBERS,
  SECONDARY_FIBERS,
  createFiberPath,
  createMasterPath,
} from "./flowGeometry";

const FALLBACK_SIZE = { width: 1, height: 1 };
const ALL_FIBERS = [...SECONDARY_FIBERS, ...CORE_FIBERS, ...ACCENT_FIBERS];

function FiberGroup({ fibers, paths }) {
  return (
    <g className={`nueva-home-flow-background__fiber-layer nueva-home-flow-background__fiber-layer--${fibers[0].layer}`}>
      {fibers.map((fiber) => (
        <path
          key={fiber.id}
          d={paths.get(fiber.id)}
          className={`nueva-home-flow-background__fiber nueva-home-flow-background__fiber--${fiber.layer} nueva-home-flow-background__fiber--${fiber.softness}`}
          style={{
            opacity: fiber.opacity,
            strokeWidth: fiber.width,
          }}
        />
      ))}
    </g>
  );
}

export default function GlobalFlowBackground() {
  const layerRef = useRef(null);
  const masterPathRef = useRef(null);
  const [size, setSize] = useState(FALLBACK_SIZE);

  useEffect(() => {
    const layer = layerRef.current;
    const documentRoot = layer?.parentElement;
    if (!documentRoot) return undefined;

    let resizeFrame = 0;
    const updateSize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => {
        const next = {
          width: Math.max(1, Math.round(documentRoot.clientWidth), window.innerWidth),
          height: Math.max(
            1,
            Math.round(documentRoot.scrollHeight),
            Math.round(document.documentElement.scrollHeight),
            window.innerHeight,
          ),
        };
        setSize((current) => current.width === next.width && current.height === next.height ? current : next);
      });
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(documentRoot);
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", updateSize);
      observer.disconnect();
    };
  }, []);

  const hasMeasuredSize = size.width > 1 && size.height > 1;
  const masterPath = useMemo(
    () => hasMeasuredSize ? createMasterPath(size.width, size.height) : "",
    [hasMeasuredSize, size.height, size.width],
  );
  const fiberPaths = useMemo(() => {
    const paths = new Map();
    if (!hasMeasuredSize) return paths;
    for (const fiber of ALL_FIBERS) {
      paths.set(fiber.id, createFiberPath(size.width, size.height, fiber));
    }
    return paths;
  }, [hasMeasuredSize, size.height, size.width]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || !hasMeasuredSize) return undefined;

    let activationFrame = 0;
    let settleFrame = 0;
    let idleId = 0;
    let fallbackTimer = 0;

    const revealQuality = () => {
      idleId = 0;
      fallbackTimer = 0;
      layer.classList.add("is-flow-quality-ready");
    };
    activationFrame = window.requestAnimationFrame(() => {
      settleFrame = window.requestAnimationFrame(() => {
        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(revealQuality, { timeout: 450 });
        } else {
          fallbackTimer = window.setTimeout(revealQuality, 160);
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(activationFrame);
      window.cancelAnimationFrame(settleFrame);
      if (idleId) window.cancelIdleCallback(idleId);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      layer.classList.remove("is-flow-quality-ready");
    };
  }, [hasMeasuredSize]);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="nueva-home-flow-background"
      role="presentation"
    >
      <div data-nh-flow-ambient className="nueva-home-flow-background__ambient" />
      <div data-nh-flow-dots aria-hidden="true" className="nueva-home-hero-dot-grid">
        <span className="nueva-home-hero-dot-grid__corner nueva-home-hero-dot-grid__corner--top-left" />
        <span className="nueva-home-hero-dot-grid__corner nueva-home-hero-dot-grid__corner--top-right" />
        <span className="nueva-home-hero-dot-grid__corner nueva-home-hero-dot-grid__corner--bottom-left" />
        <span className="nueva-home-hero-dot-grid__corner nueva-home-hero-dot-grid__corner--bottom-right" />
      </div>

      {hasMeasuredSize ? <svg
        data-nh-flow-layer
        className="nueva-home-flow-background__svg nueva-home-flow-background__svg--glow"
        viewBox={`0 0 ${size.width} ${size.height}`}
        width={size.width}
        height={size.height}
        fill="none"
        preserveAspectRatio="xMidYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="nh-flow-blur-18"
            filterUnits="userSpaceOnUse"
            x={-64}
            y={-64}
            width={size.width + 128}
            height={size.height + 128}
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <linearGradient id="nh-flow-haze" x1="0" y1="0" x2="0" y2={size.height} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9ddd38" stopOpacity=".03" />
            <stop offset=".13" stopColor="#a7eb3c" stopOpacity=".16" />
            <stop offset=".24" stopColor="#caff68" stopOpacity=".42" />
            <stop offset=".36" stopColor="#9cde37" stopOpacity=".1" />
            <stop offset=".56" stopColor="#73b853" stopOpacity=".07" />
            <stop offset=".75" stopColor="#6fcfc3" stopOpacity=".11" />
            <stop offset=".91" stopColor="#a6e940" stopOpacity=".16" />
            <stop offset="1" stopColor="#8ed636" stopOpacity=".025" />
          </linearGradient>
          <linearGradient id="nh-flow-bloom" x1="0" y1="0" x2="0" y2={size.height} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#b7ff3c" stopOpacity=".02" />
            <stop offset=".14" stopColor="#b7ff3c" stopOpacity=".1" />
            <stop offset=".25" stopColor="#d3ff79" stopOpacity=".72" />
            <stop offset=".34" stopColor="#a1e233" stopOpacity=".13" />
            <stop offset=".62" stopColor="#75b94e" stopOpacity=".07" />
            <stop offset=".83" stopColor="#b7ff3c" stopOpacity=".3" />
            <stop offset="1" stopColor="#8bcf35" stopOpacity=".02" />
          </linearGradient>
        </defs>

        <g className="nueva-home-flow-background__glow">
          <path ref={masterPathRef} d={masterPath} className="nueva-home-flow-background__master-path" />
          <path d={masterPath} className="nueva-home-flow-background__glow-path nueva-home-flow-background__glow-path--mid" />
          <path d={masterPath} className="nueva-home-flow-background__glow-path nueva-home-flow-background__glow-path--near" />
        </g>
      </svg> : null}

      {hasMeasuredSize ? (
        <FlowParticleCanvas masterPathRef={masterPathRef} width={size.width} height={size.height} />
      ) : null}

      {hasMeasuredSize ? <svg
        data-nh-flow-layer
        className="nueva-home-flow-background__svg nueva-home-flow-background__svg--fibers"
        viewBox={`0 0 ${size.width} ${size.height}`}
        width={size.width}
        height={size.height}
        fill="none"
        preserveAspectRatio="xMidYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nh-flow-line" x1="0" y1="0" x2="0" y2={size.height} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d9ff78" stopOpacity=".06" />
            <stop offset=".12" stopColor="#b7ff3c" stopOpacity=".62" />
            <stop offset=".26" stopColor="#d0ff75" stopOpacity=".9" />
            <stop offset=".39" stopColor="#8ed636" stopOpacity=".2" />
            <stop offset=".58" stopColor="#91c94e" stopOpacity=".12" />
            <stop offset=".76" stopColor="#8ed636" stopOpacity=".3" />
            <stop offset=".89" stopColor="#b7ff3c" stopOpacity=".68" />
            <stop offset="1" stopColor="#8bcf35" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="nh-flow-cool" x1="0" y1="0" x2="0" y2={size.height} gradientUnits="userSpaceOnUse">
            <stop stopColor="#7fd6cb" stopOpacity=".03" />
            <stop offset=".24" stopColor="#7fd6cb" stopOpacity=".42" />
            <stop offset=".52" stopColor="#7fd6cb" stopOpacity=".08" />
            <stop offset=".82" stopColor="#72c8bc" stopOpacity=".34" />
            <stop offset="1" stopColor="#72c8bc" stopOpacity=".025" />
          </linearGradient>
        </defs>
        <g className="nueva-home-flow-background__fibers">
          <FiberGroup fibers={SECONDARY_FIBERS} paths={fiberPaths} />
          <FiberGroup fibers={CORE_FIBERS} paths={fiberPaths} />
          <FiberGroup fibers={ACCENT_FIBERS} paths={fiberPaths} />
        </g>
      </svg> : null}
    </div>
  );
}
