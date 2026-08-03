"use client";

import { useTranslations } from "next-intl";
import { getWhatsAppUrl } from "@/lib/business";
import ProcessDesktop from "./ProcessDesktop";
import ProcessMobile from "./ProcessMobile";

const ProcessSection = () => {
  const t = useTranslations("HomeV2.process");
  const steps = t.raw("steps");

  const copy = {
    sectionLabel: t("sectionLabel"),
    eyebrow: t("eyebrow"),
    title: t("title"),
    titleHighlight: t("titleHighlight"),
    closing: {
      phrase: t("closing.phrase"),
      cta: t("closing.cta"),
    },
    visual: {
      frictionNodes: t.raw("visual.frictionNodes"),
      strategyLabel: t("visual.strategyLabel"),
      buildLayers: t.raw("visual.buildLayers"),
      growthLabel: t("visual.growthLabel"),
      growthMetrics: t.raw("visual.growthMetrics"),
    },
  };

  const waHref = getWhatsAppUrl(t("closing.waMessage"));

  return (
    <section
      aria-labelledby="process-heading process-heading-mobile"
      className="relative overflow-x-clip px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <ProcessDesktop copy={copy} steps={steps} waHref={waHref} />
      <ProcessMobile copy={copy} steps={steps} waHref={waHref} />
    </section>
  );
};

export default ProcessSection;
