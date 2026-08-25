"use client";

import TitleSection from "@/app/components/(common)/TitleSection";
import RevealBlock from "@/app/components/RevealBlock";
import SplitHeadline from "@/app/components/SplitHeadline";

// encabezado editorial asimétrico — a propósito rompe el ritmo centrado del
// resto de la landing y no compite con la narrativa (centrada, en 2 columnas
// invertidas) de ProcessSection. Stack vertical con ancho acotado, no un
// headline + párrafo flotando en columna aparte.
export default function TransformHeader({ copy, headingId }) {
  return (
    <div className="max-w-2xl lg:max-w-3xl">
      <div className="w-fit">
        <TitleSection title={copy.sectionLabel} />
      </div>
      <SplitHeadline
        id={headingId}
        text={copy.title}
        delay={0.05}
        highlightWords={[copy.titleHighlight]}
        highlightClassName="text-[#A1E233]"
        className="mt-6 text-left text-[clamp(1.9rem,3.6vw,3.2rem)] font-black leading-[1.05] tracking-tight text-white"
      />
      <RevealBlock delay={0.2} className="mt-6 max-w-[46ch]">
        <p className="text-sm font-light leading-relaxed text-white/55 md:text-base">{copy.description}</p>
      </RevealBlock>
    </div>
  );
}
