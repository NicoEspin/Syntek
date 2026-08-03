"use client";

import TitleSection from "@/app/components/(common)/TitleSection";
import RevealBlock from "@/app/components/RevealBlock";
import SplitHeadline from "@/app/components/SplitHeadline";

// encabezado editorial asimétrico — a propósito rompe el ritmo centrado del
// resto de la landing y no compite con la narrativa (centrada, en 2 columnas
// invertidas) de ProcessSection.
export default function TransformHeader({ copy, headingId }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
      <div>
        <TitleSection title={copy.sectionLabel} />
        <SplitHeadline
          id={headingId}
          text={copy.title}
          delay={0.05}
          highlightWords={[copy.titleHighlight]}
          highlightClassName="text-[#A1E233]"
          className="mt-6 text-left text-[clamp(1.9rem,3.6vw,3.2rem)] font-black leading-[1.05] tracking-tight text-white"
        />
      </div>

      <div className="flex flex-col gap-5">
        <RevealBlock delay={0.2}>
          <p className="text-sm font-light leading-relaxed text-white/55 md:text-base">{copy.description}</p>
        </RevealBlock>
        <RevealBlock delay={0.3} className="flex items-center gap-2 border-t border-white/8 pt-4">
          <span aria-hidden className="text-[#A1E233]">
            ↔
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">{copy.comparatorLegend}</span>
        </RevealBlock>
      </div>
    </div>
  );
}
