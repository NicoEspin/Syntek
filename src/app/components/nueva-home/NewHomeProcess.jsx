import TitleSection from "@/app/components/(common)/TitleSection";

export default function NewHomeProcess({ copy }) {
  return (
    <section
      id="process"
      data-nh-stage="process"
      data-nh-beam-intensity="0.3"
      data-nh-beam-x="1"
      data-nh-beam-y="0"
      aria-labelledby="new-home-process-heading"
      className="nueva-home-process"
    >
      <div className="nueva-home-process-inner">
        <header className="nueva-home-process-header">
          <TitleSection title={copy.label} />
          <h2 id="new-home-process-heading">{copy.heading}</h2>
          <p>{copy.body}</p>
        </header>

        <ol className="nueva-home-process-list">
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <article>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
