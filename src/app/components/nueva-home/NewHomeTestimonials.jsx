import Image from "next/image";
import TitleSection from "@/app/components/(common)/TitleSection";
import fernandoPhoto from "@/app/assets/testimonials/fernando.webp";
import { GOOGLE_MAPS_URL } from "@/lib/business";

export default function NewHomeTestimonials({ copy }) {
  return (
    <section
      data-nh-stage="testimonials"
      data-nh-beam-intensity="0.22"
      data-nh-beam-x="-1"
      data-nh-beam-y="1"
      aria-labelledby="new-home-testimonials-heading"
      className="nueva-home-testimonials"
    >
      <div className="nueva-home-testimonials-inner">
        <header className="nueva-home-testimonials-header">
          <TitleSection title={copy.label} />
          <h2 id="new-home-testimonials-heading">{copy.heading}</h2>
        </header>

        <div className="nueva-home-testimonials-grid">
          <figure className="nueva-home-testimonial nueva-home-testimonial--primary">
            <blockquote>“{copy.fernando.quote}”</blockquote>
            <figcaption>
              <span className="nueva-home-testimonial-photo">
                <Image src={fernandoPhoto} alt={copy.fernando.imageAlt} fill sizes="64px" />
              </span>
              <span><strong>{copy.fernando.author}</strong><small>{copy.sourceNote}</small></span>
            </figcaption>
          </figure>

          <figure className="nueva-home-testimonial nueva-home-testimonial--secondary">
            <blockquote>“{copy.vale.quote}”</blockquote>
            <figcaption>
              <span aria-hidden="true" className="nueva-home-testimonial-initial">V</span>
              <span><strong>{copy.vale.author}</strong><small>{copy.sourceNote}</small></span>
            </figcaption>
          </figure>
        </div>

        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="nueva-home-testimonials-source nueva-home-focus">
          {copy.profileLink}<span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
