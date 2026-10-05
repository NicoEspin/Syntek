import styles from "@/app/[locale]/nueva-home/page.module.css";

export default function NewHomeManifesto({ copy }) {
  return (
    <section
      data-nh-stage="manifesto"
      data-nh-beam-intensity="0.68"
      data-nh-beam-x="-3"
      data-nh-beam-y="4"
      aria-labelledby="manifesto-heading"
      className="nueva-home-section"
    >
      <div className="nueva-home-section-grid">
        <div className="nueva-home-manifesto-copy">
          <h2 id="manifesto-heading" className="nueva-home-section-heading">
            {copy.headingBefore} <em className={styles.editorialEmphasis}>{copy.headingEmphasis}</em>{" "}
            {copy.headingAfter}
            <span className={styles.editorialLine}>{copy.headingClosing}</span>
          </h2>
        </div>

        <div className="nueva-home-section-body">
          <p>{copy.body}</p>
        </div>

        <article className="nueva-home-manifesto-panel">
          <div className="nueva-home-panel-heading">
            <span>{copy.panelTitle}</span>
            <span className="nueva-home-panel-state"><span className="nueva-home-dot" />{copy.panelState}</span>
          </div>

          <ol className="nueva-home-stages">
            {copy.stages.map((stage, index) => (
              <li key={stage} className="nueva-home-stage">
                <span className="nueva-home-stage-number">0{index + 1}</span>
                <span className="nueva-home-stage-label">{stage}</span>
                {index < copy.stages.length - 1 ? <span aria-hidden="true" className="nueva-home-stage-connector" /> : null}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}
