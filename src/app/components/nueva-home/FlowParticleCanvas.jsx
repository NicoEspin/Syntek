"use client";

import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;
const LUT_SIZE = 900;
const LUT_CHUNK_SIZE = 300;
const VERTICAL_OVERSCAN = 96;
const MAX_BACKING_PIXELS = 8_000_000;
const FRAME_INTERVAL = 1000 / 30;
const COARSE_CULL_MARGIN = 460;
const FLOW_COLORS = ["#b7ff3c", "#caff68", "#91df38", "#4f8f37", "#72c8bc"];

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function gaussian(random) {
  const u = Math.max(0.0001, random());
  const v = Math.max(0.0001, random());
  return Math.cos(TAU * v) * Math.sqrt(-2 * Math.log(u));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(edge0, edge1, value) {
  const progress = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return progress * progress * (3 - 2 * progress);
}

function sampleLut(lut, progress, output) {
  const wrapped = progress - Math.floor(progress);
  const scaled = wrapped * (LUT_SIZE - 1);
  const index = Math.floor(scaled);
  const next = Math.min(LUT_SIZE - 1, index + 1);
  const mix = scaled - index;
  output.x = lut.x[index] + (lut.x[next] - lut.x[index]) * mix;
  output.y = lut.y[index] + (lut.y[next] - lut.y[index]) * mix;
  output.tx = lut.tx[index] + (lut.tx[next] - lut.tx[index]) * mix;
  output.ty = lut.ty[index] + (lut.ty[next] - lut.ty[index]) * mix;
}

function streamWidth(progress) {
  const heroExpansion = smoothstep(0.06, 0.28, progress) * (1 - smoothstep(0.34, 0.46, progress));
  const exitExpansion = smoothstep(0.72, 0.98, progress);
  return 180 + heroExpansion * 172 + exitExpansion * 190;
}

function zoneAlpha(progress) {
  const centralRapid = smoothstep(0.13, 0.22, progress) * (1 - smoothstep(0.31, 0.4, progress));
  const middleHaze = smoothstep(0.38, 0.5, progress) * (1 - smoothstep(0.66, 0.76, progress));
  const lateStructure = smoothstep(0.7, 0.88, progress);
  return 1 + centralRapid * 0.42 - middleHaze * 0.52 + lateStructure * 0.18;
}

function zoneSpeed(progress) {
  const centralRapid = smoothstep(0.13, 0.22, progress) * (1 - smoothstep(0.31, 0.4, progress));
  const middleHaze = smoothstep(0.38, 0.5, progress) * (1 - smoothstep(0.66, 0.76, progress));
  const lateStructure = smoothstep(0.7, 0.88, progress);
  return 1 + centralRapid * 0.48 - middleHaze * 0.2 + lateStructure * 0.08;
}

function createLutStorage(path) {
  const x = new Float32Array(LUT_SIZE);
  const y = new Float32Array(LUT_SIZE);
  const tx = new Float32Array(LUT_SIZE);
  const ty = new Float32Array(LUT_SIZE);
  const length = path.getTotalLength();

  return { x, y, tx, ty, length };
}

function populateLutPoints(path, lut, start, end) {
  for (let index = start; index < end; index += 1) {
    const distance = (index / (LUT_SIZE - 1)) * lut.length;
    const point = path.getPointAtLength(distance);
    lut.x[index] = point.x;
    lut.y[index] = point.y;
  }
}

function finalizeLutTangents(lut) {
  for (let index = 0; index < LUT_SIZE; index += 1) {
    const before = Math.max(0, index - 1);
    const after = Math.min(LUT_SIZE - 1, index + 1);
    const dx = lut.x[after] - lut.x[before];
    const dy = lut.y[after] - lut.y[before];
    const magnitude = Math.max(0.001, Math.hypot(dx, dy));
    lut.tx[index] = dx / magnitude;
    lut.ty[index] = dy / magnitude;
  }
}

function createFlowParticles(count) {
  const random = seededRandom(0xa1e233);
  const particles = new Array(count);

  for (let index = 0; index < count; index += 1) {
    const colorRoll = random();
    particles[index] = {
      progress: (index / count + random() * 0.075) % 1,
      offset: clamp(gaussian(random) * 0.31, -0.94, 0.94),
      speed: index % 9 < 2 ? 1.6 : index % 5 === 0 ? 0.4 : 1,
      size: 0.5 + Math.pow(random(), 2.1) * 3.5,
      alpha: 0.18 + random() * 0.58,
      phase: random() * TAU,
      turbulence: 0.8 + random() * 3.1,
      style: random() < 0.57 ? 0 : random() < 0.74 ? 1 : 2,
      color: colorRoll < 0.8 ? FLOW_COLORS[index % 3] : colorRoll < 0.95 ? FLOW_COLORS[3] : FLOW_COLORS[4],
    };
  }

  return particles;
}

function createAmbientParticles(count) {
  const random = seededRandom(0x6fcfc3);
  const particles = new Array(count);

  for (let index = 0; index < count; index += 1) {
    particles[index] = {
      progress: (index / count + random() * 0.13) % 1,
      offset: clamp(gaussian(random) * 0.43, -1.08, 1.08),
      size: 0.45 + random() * 1.15,
      alpha: 0.05 + random() * 0.13,
      phase: random() * TAU,
      drift: 0.4 + random() * 1.1,
    };
  }

  return particles;
}

function createPulses(count) {
  const random = seededRandom(0x193bc4);
  const pulses = new Array(count);

  for (let index = 0; index < count; index += 1) {
    pulses[index] = {
      progress: random(),
      offset: clamp(gaussian(random) * 0.24, -0.72, 0.72),
      speed: 1.35 + random() * 0.82,
      length: 14 + random() * 28,
      alpha: 0.22 + random() * 0.36,
      phase: random() * TAU,
    };
  }

  return pulses;
}

function createDynamicFibers(count) {
  const random = seededRandom(0x7f4a7c15);
  return Array.from({ length: count }, (_, index) => ({
    offset: (index / Math.max(1, count - 1) - 0.5) * 118 + (random() - 0.5) * 18,
    amplitude: 2.5 + random() * 5.5,
    frequency: 0.00016 + random() * 0.00012,
    spatialFrequency: 1.2 + random() * 1.4,
    phase: random() * TAU,
    alpha: 0.13 + random() * 0.2,
    width: 0.45 + random() * 0.55,
    color: index % 7 === 0 ? FLOW_COLORS[4] : FLOW_COLORS[index % 3],
  }));
}

function qualityForWidth(width) {
  if (width < 768) return { fibers: 3, flow: 28, ambient: 3, pulses: 1 };
  if (width < 1180) return { fibers: 5, flow: 56, ambient: 6, pulses: 2 };
  return { fibers: 8, flow: 92, ambient: 10, pulses: 3 };
}

function findFirstVisibleIndex(values, target) {
  let low = 0;
  let high = values.length;
  while (low < high) {
    const middle = (low + high) >> 1;
    if (values[middle] < target) low = middle + 1;
    else high = middle;
  }
  return low;
}

function drawDynamicFibers(context, lut, fibers, scrollY, canvasHeight, elapsed, reduced) {
  const documentTop = scrollY - VERTICAL_OVERSCAN - 180;
  const documentBottom = scrollY + canvasHeight - VERTICAL_OVERSCAN + 180;
  const first = Math.max(0, findFirstVisibleIndex(lut.y, documentTop) - 2);
  const last = Math.min(LUT_SIZE - 1, findFirstVisibleIndex(lut.y, documentBottom) + 2);
  if (last <= first) return;

  context.globalCompositeOperation = "screen";
  context.lineCap = "round";
  context.lineJoin = "round";
  for (let fiberIndex = 0; fiberIndex < fibers.length; fiberIndex += 1) {
    const fiber = fibers[fiberIndex];
    context.beginPath();
    for (let index = first; index <= last; index += 2) {
      const progress = index / (LUT_SIZE - 1);
      const oscillation = reduced
        ? 0
        : Math.sin(elapsed * fiber.frequency + fiber.phase + progress * fiber.spatialFrequency) * fiber.amplitude;
      const perpendicular = fiber.offset + oscillation;
      const x = lut.x[index] - lut.ty[index] * perpendicular;
      const y = lut.y[index] + lut.tx[index] * perpendicular - scrollY + VERTICAL_OVERSCAN;
      if (index === first) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.globalAlpha = fiber.alpha;
    context.strokeStyle = fiber.color;
    context.lineWidth = fiber.width;
    context.stroke();
  }
}

function drawFrame(
  context,
  viewportWidth,
  canvasHeight,
  documentWidth,
  documentHeight,
  scrollY,
  lut,
  flow,
  ambient,
  pulses,
  fibers,
  point,
  elapsed,
  delta,
  reduced,
) {
  context.clearRect(0, 0, viewportWidth, canvasHeight);
  const flowLimit = reduced ? Math.min(14, flow.length) : flow.length;
  const ambientLimit = reduced ? Math.min(4, ambient.length) : ambient.length;
  const pulseLimit = reduced ? 0 : pulses.length;

  drawDynamicFibers(context, lut, fibers, scrollY, canvasHeight, elapsed, reduced);

  context.globalCompositeOperation = "lighter";
  for (let index = 0; index < flowLimit; index += 1) {
    const particle = flow[index];
    if (!reduced) particle.progress = (particle.progress + delta * 0.018 * particle.speed * zoneSpeed(particle.progress)) % 1;
    sampleLut(lut, particle.progress, point);
    if (point.y < scrollY - COARSE_CULL_MARGIN || point.y > scrollY + canvasHeight + COARSE_CULL_MARGIN) continue;

    const widthAtPoint = streamWidth(particle.progress);
    const turbulence = Math.sin(elapsed * 0.0014 + particle.phase + particle.progress * 17) * particle.turbulence;
    const perpendicular = particle.offset * widthAtPoint * 0.5 + turbulence;
    const x = point.x - point.ty * perpendicular;
    const documentY = point.y + point.tx * perpendicular;
    const y = documentY - scrollY + VERTICAL_OVERSCAN;
    if (y < -32 || y > canvasHeight + 32 || x < -48 || x > viewportWidth + 48) continue;
    const headlineAttenuation = documentY < Math.min(1050, documentHeight * 0.36) && x < documentWidth * 0.57 ? 0.42 : 1;
    const shimmer = 0.82 + Math.sin(elapsed * 0.0011 + particle.phase) * 0.18;
    context.globalAlpha = particle.alpha * zoneAlpha(particle.progress) * headlineAttenuation * shimmer;
    context.fillStyle = particle.color;
    context.strokeStyle = particle.color;

    if (particle.style === 0) {
      context.beginPath();
      context.arc(x, y, particle.size, 0, TAU);
      context.fill();
    } else {
      const length = particle.style === 1 ? particle.size * 4.2 + 4 : particle.size * 8 + 10;
      context.lineWidth = Math.max(0.45, particle.size * (particle.style === 1 ? 0.62 : 0.4));
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(x - point.tx * length, y - point.ty * length);
      context.lineTo(x, y);
      context.stroke();
    }
  }

  for (let index = 0; index < ambientLimit; index += 1) {
    const particle = ambient[index];
    const ambientProgress = (particle.progress + (reduced ? 0 : elapsed * 0.0000017 * particle.drift)) % 1;
    sampleLut(lut, ambientProgress, point);
    if (point.y < scrollY - COARSE_CULL_MARGIN || point.y > scrollY + canvasHeight + COARSE_CULL_MARGIN) continue;
    const perpendicular = particle.offset * streamWidth(ambientProgress) * 0.58;
    const driftX = reduced ? 0 : Math.sin(elapsed * 0.00034 + particle.phase) * 7;
    const driftY = reduced ? 0 : Math.cos(elapsed * 0.00027 + particle.phase) * 11;
    const x = point.x - point.ty * perpendicular + driftX;
    const y = point.y + point.tx * perpendicular + driftY - scrollY + VERTICAL_OVERSCAN;
    if (y < -16 || y > canvasHeight + 16 || x < -16 || x > viewportWidth + 16) continue;
    const fade = reduced ? 0.7 : 0.38 + Math.sin(elapsed * 0.00062 + particle.phase) * 0.32;
    context.globalAlpha = particle.alpha * Math.max(0.06, fade);
    context.fillStyle = index % 7 === 0 ? FLOW_COLORS[4] : FLOW_COLORS[0];
    context.beginPath();
    context.arc(
      x,
      y,
      particle.size,
      0,
      TAU,
    );
    context.fill();
  }

  context.globalCompositeOperation = "screen";
  context.lineCap = "round";
  for (let index = 0; index < pulseLimit; index += 1) {
    const pulse = pulses[index];
    pulse.progress = (pulse.progress + delta * 0.03 * pulse.speed * zoneSpeed(pulse.progress)) % 1;
    sampleLut(lut, pulse.progress, point);
    if (point.y < scrollY - COARSE_CULL_MARGIN || point.y > scrollY + canvasHeight + COARSE_CULL_MARGIN) continue;
    const perpendicular = pulse.offset * streamWidth(pulse.progress) * 0.48;
    const x = point.x - point.ty * perpendicular;
    const y = point.y + point.tx * perpendicular - scrollY + VERTICAL_OVERSCAN;
    if (y < -64 || y > canvasHeight + 64 || x < -64 || x > viewportWidth + 64) continue;
    const shimmer = 0.46 + Math.sin(elapsed * 0.0017 + pulse.phase) * 0.38;
    context.globalAlpha = pulse.alpha * zoneAlpha(pulse.progress) * Math.max(0.08, shimmer);
    context.strokeStyle = index % 5 === 0 ? FLOW_COLORS[4] : FLOW_COLORS[1];
    context.lineWidth = 0.7 + (index % 3) * 0.25;
    context.beginPath();
    context.moveTo(x - point.tx * pulse.length, y - point.ty * pulse.length);
    context.lineTo(x + point.tx * pulse.length * 0.18, y + point.ty * pulse.length * 0.18);
    context.stroke();
  }

  context.globalAlpha = 1;
  context.globalCompositeOperation = "source-over";
}

export default function FlowParticleCanvas({ masterPathRef, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const path = masterPathRef.current;
    if (!canvas || !path || width < 1 || height < 1) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return undefined;

    let lut = null;
    let flow = null;
    let ambient = null;
    let pulses = null;
    let fibers = null;
    const samplePoint = { x: 0, y: 0, tx: 0, ty: 0 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = reducedMotion.matches;
    let frameId = 0;
    let staticDrawFrame = 0;
    let deferFrame = 0;
    let initTimer = 0;
    let idleId = 0;
    let fallbackTimer = 0;
    let lutCursor = 0;
    let qualityDelayElapsed = false;
    let initializationStarted = false;
    let initialized = false;
    let disposed = false;
    let lastTime = performance.now();
    let lastDrawTime = 0;
    let elapsed = 0;
    let scrollY = window.scrollY;
    let viewportWidth = 1;
    let canvasHeight = 1;

    const resizeCanvas = () => {
      viewportWidth = Math.max(1, window.innerWidth);
      canvasHeight = Math.max(1, window.innerHeight + VERTICAL_OVERSCAN * 2);
      const cssPixels = viewportWidth * canvasHeight;
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        viewportWidth < 768 ? 1.25 : 1.5,
        Math.sqrt(MAX_BACKING_PIXELS / cssPixels),
      );
      canvas.width = Math.max(1, Math.round(viewportWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvasHeight * dpr));
      canvas.style.top = `${-VERTICAL_OVERSCAN}px`;
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const renderStatic = () => {
      staticDrawFrame = 0;
      drawFrame(
        context,
        viewportWidth,
        canvasHeight,
        width,
        height,
        scrollY,
        lut,
        flow,
        ambient,
        pulses,
        fibers,
        samplePoint,
        elapsed,
        0,
        true,
      );
    };

    const tick = (now) => {
      if (now - lastDrawTime < FRAME_INTERVAL) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }
      const delta = Math.min(0.05, Math.max(0, (now - lastTime) / 1000));
      lastTime = now;
      lastDrawTime = now;
      elapsed += delta * 1000;
      drawFrame(
        context,
        viewportWidth,
        canvasHeight,
        width,
        height,
        scrollY,
        lut,
        flow,
        ambient,
        pulses,
        fibers,
        samplePoint,
        elapsed,
        delta,
        false,
      );
      frameId = window.requestAnimationFrame(tick);
    };

    const requestStaticDraw = () => {
      if (!staticDrawFrame && !document.hidden) {
        staticDrawFrame = window.requestAnimationFrame(renderStatic);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(staticDrawFrame);
      frameId = 0;
      staticDrawFrame = 0;
      if (document.hidden || !initialized) return;
      if (reduced) {
        renderStatic();
        return;
      }
      lastTime = performance.now();
      lastDrawTime = 0;
      frameId = window.requestAnimationFrame(tick);
    };

    const populateLutChunk = () => {
      initTimer = 0;
      if (disposed || document.hidden || !lut) return;

      const nextCursor = Math.min(LUT_SIZE, lutCursor + LUT_CHUNK_SIZE);
      populateLutPoints(path, lut, lutCursor, nextCursor);
      lutCursor = nextCursor;

      if (lutCursor < LUT_SIZE) {
        initTimer = window.setTimeout(populateLutChunk, 0);
        return;
      }

      finalizeLutTangents(lut);
      const quality = qualityForWidth(viewportWidth);
      flow = createFlowParticles(quality.flow);
      ambient = createAmbientParticles(quality.ambient);
      pulses = createPulses(quality.pulses);
      fibers = createDynamicFibers(quality.fibers);
      initialized = true;
      start();
    };

    const beginInitialization = () => {
      idleId = 0;
      fallbackTimer = 0;
      if (disposed || initializationStarted || document.hidden) return;
      if (!canvas.parentElement?.classList.contains("is-flow-quality-ready")) {
        fallbackTimer = window.setTimeout(beginInitialization, 120);
        return;
      }
      if (!qualityDelayElapsed) {
        qualityDelayElapsed = true;
        fallbackTimer = window.setTimeout(beginInitialization, 600);
        return;
      }
      initializationStarted = true;
      lut = createLutStorage(path);
      initTimer = window.setTimeout(populateLutChunk, 0);
    };

    const scheduleInitialization = () => {
      if (disposed || initializationStarted || deferFrame || idleId || fallbackTimer) return;
      deferFrame = window.requestAnimationFrame(() => {
        deferFrame = window.requestAnimationFrame(() => {
          deferFrame = 0;
          if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(beginInitialization, { timeout: 500 });
          } else {
            fallbackTimer = window.setTimeout(beginInitialization, 120);
          }
        });
      });
    };

    const handleVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frameId);
        window.cancelAnimationFrame(staticDrawFrame);
        window.clearTimeout(initTimer);
        frameId = 0;
        staticDrawFrame = 0;
        initTimer = 0;
      } else if (initializationStarted && !initialized) {
        initTimer = window.setTimeout(populateLutChunk, 0);
      } else if (!initializationStarted) {
        scheduleInitialization();
      } else {
        start();
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      if (reduced) requestStaticDraw();
    };

    const handleResize = () => {
      resizeCanvas();
      scrollY = window.scrollY;
      if (reduced) requestStaticDraw();
    };

    const handleReducedMotion = (event) => {
      reduced = event.matches;
      start();
    };

    reducedMotion.addEventListener("change", handleReducedMotion);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    resizeCanvas();
    scheduleInitialization();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(staticDrawFrame);
      window.cancelAnimationFrame(deferFrame);
      window.clearTimeout(initTimer);
      if (idleId) window.cancelIdleCallback(idleId);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      reducedMotion.removeEventListener("change", handleReducedMotion);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      context.clearRect(0, 0, viewportWidth, canvasHeight);
    };
  }, [height, masterPathRef, width]);

  return <canvas ref={canvasRef} data-nh-flow-layer className="nueva-home-flow-background__canvas" />;
}
