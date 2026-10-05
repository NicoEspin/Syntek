import ActivityHeatmap from "./operations/ActivityHeatmap";
import SystemStatus from "./operations/SystemStatus";
import WorkflowActivity from "./operations/WorkflowActivity";

export default function NewHomeOperations({ copy }) {
  return (
    <section
      data-nh-stage="operations"
      data-nh-beam-intensity="0.3"
      data-nh-beam-x="-2"
      data-nh-beam-y="2"
      aria-labelledby="operations-heading"
      className="nueva-home-operations"
    >
      <div className="nueva-home-operations-inner">
        <div className="nueva-home-operations-header">
          <div>
            <p className="nueva-home-operations-label">{copy.label}</p>
            <h2 id="operations-heading">{copy.heading}</h2>
          </div>
          <div className="nueva-home-operations-intro">
            <p>{copy.body}</p>
            <span>{copy.qualifier}</span>
          </div>
        </div>

        <div className="nueva-home-operations-grid">
          <ActivityHeatmap copy={copy.activity} />
          <SystemStatus copy={copy.status} />
          <WorkflowActivity copy={copy.workflows} />
        </div>
      </div>
    </section>
  );
}
