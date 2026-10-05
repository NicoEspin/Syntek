const progress = [88, 72, 56];

export default function SystemStatus({ copy }) {
  return (
    <article className="nueva-home-operations-card nueva-home-operations-status">
      <div className="nueva-home-operations-card-heading">
        <div>
          <p>{copy.label}</p>
          <h3>{copy.title}</h3>
        </div>
      </div>

      <ul className="nueva-home-status-list">
        {copy.items.map((item, index) => (
          <li key={item.label}>
            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <span className="nueva-home-status-track" aria-hidden="true">
              <span style={{ "--nh-status-progress": `${progress[index]}%` }} />
            </span>
          </li>
        ))}
      </ul>
      <p className="nueva-home-operations-summary">{copy.summary}</p>
    </article>
  );
}
