import TitleSection from "@/app/components/(common)/TitleSection";

export default function NewHomeSystemsOperations({ copy }) {
  return (
    <section data-nh-stage="flow" data-nh-beam-intensity="0.34" data-nh-beam-x="1" data-nh-beam-y="1" aria-labelledby="flow-heading" className="nueva-home-flow-section">
      <div className="nueva-home-flow-section-inner">
        <TitleSection title={copy.label} />
        <header className="nueva-home-flow-section-header"><h2 id="flow-heading">{copy.heading}</h2><p>{copy.body}</p></header>
        <ol className="nueva-home-business-flow">{copy.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.body}</p>{index < copy.steps.length - 1 ? <i aria-hidden="true" /> : null}</li>)}</ol>
        <div className="nueva-home-flow-responsibility"><div><p>{copy.responsibility.label}</p><h3>{copy.responsibility.title}</h3></div><ul>{copy.responsibility.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
    </section>
  );
}
