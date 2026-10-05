export default function NewHomeProof({ copy }) {
  return (
    <section data-nh-stage="proof" data-nh-beam-intensity="0.24" data-nh-beam-x="1" data-nh-beam-y="1" aria-labelledby="proof-heading" className="nueva-home-proof">
      <div className="nueva-home-proof-inner">
        <header className="nueva-home-proof-header">
          <h2 id="proof-heading">{copy.heading}</h2>
          <p>{copy.body}</p>
        </header>
        <div className="nueva-home-proof-list">
          {copy.items.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
