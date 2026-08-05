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
      className="relative px-4 py-24 md:px-5 lg:px-10 xl:px-24"
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
        <TransformResponsive copy={copy} />
      </div>
    </section>
  );
};

export default TransformSection;
