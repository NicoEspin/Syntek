export default function WorkflowActivity({ copy }) {
  return (
    <article className="nueva-home-operations-card nueva-home-operations-workflows">
      <div className="nueva-home-operations-card-heading">
        <div>
          <p>{copy.label}</p>
          <h3>{copy.title}</h3>
        </div>
        <span>{copy.stateLabel}</span>
      </div>

      <ol className="nueva-home-workflow-activity-list">
        {copy.items.map((item, index) => (
          <li key={item.title}>
            <span className="nueva-home-workflow-activity-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
            <span className={`nueva-home-workflow-state nueva-home-workflow-state--${item.tone}`}>{item.state}</span>
          </li>
        ))}
      </ol>
      <p className="nueva-home-operations-summary">{copy.summary}</p>
    </article>
  );
}
