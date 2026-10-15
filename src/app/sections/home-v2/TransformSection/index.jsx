import { getTranslations } from "next-intl/server";
import TransformHeader from "./TransformHeader";
import TransformResponsive from "./TransformResponsive";

const TransformSection = async () => {
  const t = await getTranslations("HomeV2.transform");

  const copy = {
    sectionLabel: t("sectionLabel"),
    title: t("title"),
    titleHighlight: t("titleHighlight"),
    description: t("description"),
    phaseFragmented: t("phaseFragmented"),
    phaseTransitioning: t("phaseTransitioning"),
    phaseActive: t("phaseActive"),
    left: t.raw("left"),
    right: t.raw("right"),
    systemFlow: t.raw("systemFlow"),
    nodeStatus: t.raw("nodeStatus"),
    transformations: t.raw("transformations"),
  };

  return (
    <section
      id="transform"
      aria-labelledby="transform-heading"
      className="relative overflow-x-clip px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 12% 22%, rgba(161,226,51,0.045) 0%, transparent 64%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <TransformHeader copy={copy} headingId="transform-heading" />
        <TransformResponsive copy={copy} />
      </div>
    </section>
  );
};

export default TransformSection;
