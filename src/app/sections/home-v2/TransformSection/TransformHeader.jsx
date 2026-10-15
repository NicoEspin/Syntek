"use client";

import TitleSection from "@/app/components/(common)/TitleSection";
import RevealBlock from "@/app/components/RevealBlock";
import SplitHeadline from "@/app/components/SplitHeadline";

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
        className="mt-6 text-left text-[clamp(2rem,4vw,3.65rem)] font-black leading-[1.02] tracking-tight text-balance text-white"
      />
      <RevealBlock delay={0.2} className="mt-6 max-w-[46ch]">
        <p className="text-base font-light leading-relaxed text-pretty text-white/55">{copy.description}</p>
      </RevealBlock>
    </div>
  );
}
