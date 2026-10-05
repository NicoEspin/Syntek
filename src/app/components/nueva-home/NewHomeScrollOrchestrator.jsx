"use client";

import { useEffect } from "react";

const DESKTOP_MOTION_QUERY = "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const ENTRANCE_SETTLE_DELAY = 1900;

function readBeamStage(stage) {
  return {
    intensity: Number(stage.dataset.nhBeamIntensity ?? 1),
    x: Number(stage.dataset.nhBeamX ?? 0),
    y: Number(stage.dataset.nhBeamY ?? 0),
  };
}

function viewportOffset(percent, axis) {
  const size = axis === "x" ? window.innerWidth : window.innerHeight;
  return (size * percent) / 100;
}

export default function NewHomeScrollOrchestrator() {
  useEffect(() => {
    const motionQuery = window.matchMedia(DESKTOP_MOTION_QUERY);
    let disposed = false;
    let gsapContext;
    let settleTimer;
    let setupRevision = 0;

    const setup = async (revision) => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed || revision !== setupRevision || !motionQuery.matches) return;

      const root = document.querySelector("[data-nueva-home]");
      if (!root) return;

      gsap.registerPlugin(ScrollTrigger);
      gsapContext = gsap.context(() => {
        const hero = root.querySelector('[data-nh-stage="hero"]');
        const heroCopy = root.querySelector("[data-nh-hero-copy]");
        const heroPanel = root.querySelector("[data-nh-hero-panel]");
        const flowLayers = gsap.utils.toArray("[data-nh-flow-layer]", root);
        const flowAmbient = root.querySelector("[data-nh-flow-ambient]");
        const flowDots = root.querySelector("[data-nh-flow-dots]");
        const stages = gsap.utils.toArray("[data-nh-stage]", root);
        const expandingPanels = gsap.utils.toArray("[data-nh-expand]", root);

        if (hero && heroCopy && heroPanel) {
          gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          })
            .to(heroCopy, { yPercent: -18, opacity: 0.12 }, 0)
            .to(heroPanel, { yPercent: -12, scale: 0.985, opacity: 0.28 }, 0);
        }

        if (flowLayers.length && stages.length > 1) {
          let previous = readBeamStage(stages[0]);

          stages.slice(1).forEach((stage, index) => {
            const current = readBeamStage(stage);
            const timeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: stage,
                start: "top bottom",
                end: "top 18%",
                scrub: 0.9,
                invalidateOnRefresh: true,
              },
            });

            timeline.fromTo(
              flowLayers,
              {
                x: () => viewportOffset(previous.x, "x"),
                y: () => viewportOffset(previous.y, "y"),
                opacity: previous.intensity,
              },
              {
                x: () => viewportOffset(current.x, "x"),
                y: () => viewportOffset(current.y, "y"),
                opacity: current.intensity,
                immediateRender: false,
              },
              0,
            );

            if (flowAmbient) {
              timeline.fromTo(
                flowAmbient,
                { opacity: 0.62 + previous.intensity * 0.38 },
                {
                  opacity: 0.62 + current.intensity * 0.38,
                  immediateRender: false,
                },
                0,
              );
            }

            if (flowDots) {
              timeline.to(flowDots, {
                opacity: index === 0 ? 0.22 : 0,
                immediateRender: false,
              }, 0);
            }

            previous = current;
          });
        }

        expandingPanels.forEach((panel) => {
          const stage = panel.closest("[data-nh-stage]");
          if (!stage) return;

          gsap.fromTo(
            panel,
            {
              scale: Number(panel.dataset.nhExpandFrom ?? 0.25),
              opacity: 0.72,
            },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: stage,
                start: "top 92%",
                end: "top 24%",
                scrub: 0.9,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        const lenis = window.__synttekLenis;
        lenis?.on("scroll", ScrollTrigger.update);
        ScrollTrigger.refresh(true);

        return () => lenis?.off("scroll", ScrollTrigger.update);
      }, root);
    };

    const stop = () => {
      setupRevision += 1;
      window.clearTimeout(settleTimer);
      gsapContext?.revert();
      gsapContext = undefined;
    };

    const syncMotionMode = () => {
      stop();
      if (motionQuery.matches) {
        const revision = setupRevision;
        settleTimer = window.setTimeout(() => setup(revision), ENTRANCE_SETTLE_DELAY);
      }
    };

    motionQuery.addEventListener("change", syncMotionMode);
    syncMotionMode();

    return () => {
      disposed = true;
      motionQuery.removeEventListener("change", syncMotionMode);
      stop();
    };
  }, []);

  return null;
}
