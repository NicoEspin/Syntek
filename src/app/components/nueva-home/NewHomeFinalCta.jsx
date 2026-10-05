import Link from "next/link";
import TitleSection from "@/app/components/(common)/TitleSection";
import { getWhatsAppUrl } from "@/lib/business";
import { getLocalizedPath } from "@/lib/seo";

export default function NewHomeFinalCta({ locale, copy, whatsappMessage }) {
  const whatsappHref = getWhatsAppUrl(whatsappMessage);

  return (
    <section data-nh-stage="final" data-nh-beam-intensity="0.28" data-nh-beam-x="0" data-nh-beam-y="-1" aria-labelledby="final-cta-heading" className="nueva-home-final-cta">
      <div className="nueva-home-final-cta-inner">
        <TitleSection title={copy.label} />
        <h2 id="final-cta-heading">{copy.heading}</h2>
        <span>{copy.body}</span>
        <div className="nueva-home-final-cta-actions">
          <Link href={getLocalizedPath(locale, "/contacto")} className="nueva-home-final-cta-link nueva-home-focus">{copy.primaryCta}</Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="nueva-home-final-cta-link nueva-home-final-cta-link--secondary nueva-home-focus">{copy.secondaryCta}</a>
        </div>
      </div>
    </section>
  );
}
