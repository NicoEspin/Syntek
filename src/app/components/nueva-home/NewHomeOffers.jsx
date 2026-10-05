import TitleSection from "@/app/components/(common)/TitleSection";

export default function NewHomeOffers({ copy }) {
  return (
    <section data-nh-stage="offers" data-nh-beam-intensity="0.34" data-nh-beam-x="-1" data-nh-beam-y="0" aria-labelledby="offers-heading" className="nueva-home-offers">
      <div className="nueva-home-offers-inner">
        <header>
          <TitleSection title={copy.label} />
          <h2 id="offers-heading">{copy.heading}</h2>
          <span>{copy.pricingNote}</span>
        </header>
        <div className="nueva-home-offers-list">
          {copy.items.map((item, index) => (
            <article key={item.title} className={index === 1 ? "is-featured" : undefined}>
              <div><span>{item.index}</span><p className="nueva-home-offer-situation">{item.situation}</p><h3>{item.title}</h3><p>{item.description}</p></div>
              <ul>{item.includes.map((entry) => <li key={entry}>{entry}</li>)}</ul>
              <strong>{copy.scopeLabel}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
