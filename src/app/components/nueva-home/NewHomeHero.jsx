"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { CornerUpRight, MousePointer2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getLocalizedPath } from "@/lib/seo";
import PointerTilt from "./PointerTilt";

const nodePositions = ["capture", "qualify", "route", "deliver"];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" width="16" height="16" fill="none">
      <path d="M4 14 14 4M7 4h7v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntroMark({ reduceMotion }) {
  const [visible, setVisible] = useState(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timeout = window.setTimeout(() => setVisible(false), 1850);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="nueva-home-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1.85, times: [0, 0.82, 1], ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="nueva-home-intro-square"
        initial={{ scale: 0.12, borderRadius: 52 }}
        animate={{ scale: [0.12, 1, 3.8], borderRadius: [52, 154, 118] }}
        transition={{ duration: 1.85, times: [0, 0.48, 1], ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.span
          className="nueva-home-intro-glyph"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1, 1, 0.82] }}
          transition={{ duration: 1.55, times: [0, 0.24, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
        >
          S
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function WorkflowPanel({ copy }) {
  return (
    <div data-nh-hero-panel className="nueva-home-panel-wrap">
      <PointerTilt>
        <div className="nueva-home-panel">
          <div className="nueva-home-panel-meta">
            <span>{copy.panelTitle}</span>
            <span className="nueva-home-panel-steps">{copy.steps}</span>
            <span className="nueva-home-panel-active">{copy.running}</span>
          </div>

          <div className="nueva-home-panel-canvas">
            <div aria-hidden="true" className="nueva-home-panel-toolbar">
              <span><MousePointer2 size={15} strokeWidth={1.35} /></span>
              <span><Plus size={17} strokeWidth={1.35} /></span>
              <span><CornerUpRight size={15} strokeWidth={1.35} /></span>
            </div>
            <span className="nueva-home-panel-zoom">100%</span>
          </div>

          <div className="nueva-home-runs">
            <p>{copy.recentRuns}</p>
            <div className="nueva-home-runs-list">
              {copy.runs.map((run, index) => (
                <div key={run.label} className="nueva-home-run">
                  <span className="nueva-home-run-dot" />
                  <span>0{index + 1}</span>
                  <span>{run.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="nueva-home-workflow-overlay">
          <svg aria-hidden="true" className="nueva-home-workflow-lines" viewBox="0 0 910 830" preserveAspectRatio="none">
            <path className="nueva-home-workflow-path nueva-home-workflow-path--active" d="M110 382C174 382 176 272 235 272" />
            <path className="nueva-home-workflow-path nueva-home-workflow-path--muted" d="M110 382C174 382 176 472 235 472" />
            <path className="nueva-home-workflow-path nueva-home-workflow-path--active" d="M495 272C561 272 562 382 620 382" />
            <path className="nueva-home-workflow-path nueva-home-workflow-path--muted" d="M485 472C561 472 562 382 620 382" />
            <circle cx="110" cy="382" r="2.5" />
            <circle cx="235" cy="272" r="2.5" />
            <circle className="nueva-home-workflow-dot--muted" cx="235" cy="472" r="2.5" />
            <circle cx="620" cy="382" r="2.5" />
          </svg>

          {copy.nodes.map((node, index) => (
            <div key={node.title} className={`nueva-home-flow-node nueva-home-flow-node--${nodePositions[index]}`}>
              <span className="nueva-home-node-port" />
              <p className="nueva-home-flow-title">{node.title}</p>
              <p className="nueva-home-flow-detail">{node.detail}</p>
            </div>
          ))}

          <span className="nueva-home-flow-branch-label nueva-home-flow-branch-label--yes">{copy.branchYes}</span>
          <span className="nueva-home-flow-branch-label nueva-home-flow-branch-label--other">{copy.branchOther}</span>
        </div>
      </PointerTilt>
    </div>
  );
}

export default function NewHomeHero({ locale, copy }) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <IntroMark reduceMotion={reduceMotion} />
      <section
        data-nh-stage="hero"
        data-nh-beam-intensity="1"
        data-nh-beam-x="0"
        data-nh-beam-y="0"
        aria-labelledby="nueva-home-heading"
        className="nueva-home-hero-scene"
      >
        <div className="nueva-home-hero">
          <div className="nueva-home-hero-grid">
            <div data-nh-hero-copy className="nueva-home-hero-copy">
              <p className="nueva-home-eyebrow">
                <span className="nueva-home-eyebrow-square" />
                {copy.eyebrow}
              </p>
              <h1 id="nueva-home-heading" className="nueva-home-heading">
                <span>{copy.headingLine1}</span>
                <span>{copy.headingLine2}</span>
                <span>{copy.headingLine3}</span>
                <em>{copy.headingAccent}</em>
              </h1>
              <p className="nueva-home-body">{copy.body}</p>
              <div className="nueva-home-hero-actions">
                <Link href={getLocalizedPath(locale, "/contacto")} className="nueva-home-button nueva-home-button-primary nueva-home-focus">
                  {copy.primaryCta}
                  <span className="nueva-home-button-icon"><ArrowIcon /></span>
                </Link>
                <Link href={getLocalizedPath(locale, "/projects")} className="nueva-home-button-secondary nueva-home-focus">
                  <span aria-hidden="true" className="nueva-home-play">▶</span>
                  {copy.secondaryCta}
                </Link>
              </div>
              <p className="nueva-home-microcopy">{copy.microcopy}</p>
            </div>

            <WorkflowPanel copy={copy} />
          </div>
        </div>
      </section>
    </>
  );
}
