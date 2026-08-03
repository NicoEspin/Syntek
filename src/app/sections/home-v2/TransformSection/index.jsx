"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import TransformHeader from "./TransformHeader";
import SystemComparator from "./SystemComparator";
import MobileStateControl from "./MobileStateControl";

const TransformSection = () => {
  const t = useTranslations("HomeV2.transform");
  const reactId = useId();
  const comparatorId = `transform-comparator-${reactId}`;

  const copy = {
    sectionLabel: t("sectionLabel"),
    title: t("title"),
    titleHighlight: t("titleHighlight"),
    description: t("description"),
    comparatorLegend: t("comparatorLegend"),
    ariaLabel: t("ariaLabel"),
    dragHint: t("dragHint"),
    phaseFragmented: t("phaseFragmented"),
    phaseTransitioning: t("phaseTransitioning"),
    phaseActive: t("phaseActive"),
    left: t.raw("left"),
    right: t.raw("right"),
    systemFlow: t.raw("systemFlow"),
    nodeStatus: t.raw("nodeStatus"),
    transformations: t.raw("transformations"),
    mobileControl: t.raw("mobileControl"),
    outcomes: t.raw("outcomes"),
  };

  return (
    <section
      id="transform"
      aria-labelledby="transform-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(161,226,51,0.035) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 90% 90%, rgba(134,79,254,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <TransformHeader copy={copy} headingId="transform-heading" />

        <div className="mt-14 hidden md:block">
          <SystemComparator copy={copy} id={comparatorId} />
        </div>
        <div className="mt-10 md:hidden">
          <MobileStateControl copy={copy} />
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
