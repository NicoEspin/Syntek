const activity = [
  [1, 2, 2, 3, 2, 1, 1],
  [1, 3, 4, 3, 2, 2, 1],
  [0, 1, 2, 2, 3, 2, 1],
];

export default function ActivityHeatmap({ copy }) {
  return (
    <figure className="nueva-home-operations-card nueva-home-operations-activity">
      <div className="nueva-home-operations-card-heading">
        <div>
          <p>{copy.label}</p>
          <h3>{copy.title}</h3>
        </div>
        <span>{copy.period}</span>
      </div>

      <div className="nueva-home-heatmap" aria-hidden="true">
        <span />
        {copy.days.map((day) => <span key={day} className="nueva-home-heatmap-day">{day}</span>)}
        {copy.rows.map((row, rowIndex) => (
          <div key={row} className="nueva-home-heatmap-row">
            <span className="nueva-home-heatmap-row-label">{row}</span>
            {activity[rowIndex].map((level, index) => (
              <span key={`${row}-${index}`} className={`nueva-home-heatmap-cell nueva-home-heatmap-cell--${level}`} />
            ))}
          </div>
        ))}
      </div>

      <figcaption className="nueva-home-operations-card-footer">
        <span>{copy.summary}</span>
        <span className="nueva-home-heatmap-legend">
          {copy.legend.map((item, index) => (
            <span key={item}><i aria-hidden="true" className={`nueva-home-legend-dot nueva-home-legend-dot--${index + 1}`} />{item}</span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
