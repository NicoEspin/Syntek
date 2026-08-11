"use client";

import { useTranslations } from "next-intl";
import RevealBlock from "@/app/components/RevealBlock";
import MagneticButton from "@/app/components/MagneticButton";
import { getWhatsAppUrl } from "@/lib/business";

const VCPCta = () => {
  const t = useTranslations("VCP.cta");
  const waHref = getWhatsAppUrl(useTranslations("VCP")("waMessage"));

  return (
    <section aria-labelledby="vcp-cta-heading" className="relative overflow-hidden px-4 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(161,226,51,0.05) 0%, transparent 65%)",
        }}
      />

      <RevealBlock className="relative mx-auto max-w-3xl text-center">
        <h2
          id="vcp-cta-heading"
          className="text-[clamp(2rem,4.5vw,3.6rem)] font-black leading-[1.03] tracking-tight text-white"
        >
          {t.rich("title", { hl: (chunks) => <span className="text-[#A1E233]">{chunks}</span> })}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/42">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <MagneticButton
            as="a"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            hoverScale={1.03}
            className="group relative inline-flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("ctaPrimary")}
            <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>

          <p className="text-sm text-white/45">{t("note")}</p>
        </div>
      </RevealBlock>
    </section>
  );
};

export default VCPCta;
