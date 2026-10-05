const architecturePositions = ["website", "api", "database", "automations", "cms"];

function ArchitectureTopology({ nodes }) {
  return (
    <div className="nueva-home-architecture-topology">
      <span aria-hidden="true" className="nueva-home-architecture-axis nueva-home-architecture-axis--horizontal" />
      <span aria-hidden="true" className="nueva-home-architecture-axis nueva-home-architecture-axis--vertical" />
      {nodes.map((node, index) => (
        <span
          key={node}
          className={`nueva-home-architecture-node nueva-home-architecture-node--${architecturePositions[index]}`}
        >
          {node}
        </span>
      ))}
    </div>
  );
}

function IntegrationFlow({ inputs, hub, outputs }) {
  return (
    <div className="nueva-home-integration-flow">
      <ul className="nueva-home-integration-column">
        {inputs.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="nueva-home-integration-hub">
        <span aria-hidden="true" className="nueva-home-integration-port nueva-home-integration-port--left" />
        <span>{hub}</span>
        <span aria-hidden="true" className="nueva-home-integration-port nueva-home-integration-port--right" />
      </div>
      <ul className="nueva-home-integration-column nueva-home-integration-column--output">
        {outputs.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function NewHomeSystems({ copy }) {
  return (
    <section
      data-nh-stage="systems"
      data-nh-beam-intensity="0.36"
      data-nh-beam-x="2"
      data-nh-beam-y="-1"
      aria-labelledby="systems-heading"
      className="nueva-home-systems"
    >
      <div className="nueva-home-systems-inner">
        <div className="nueva-home-systems-header">
          <p className="nueva-home-systems-label">{copy.label}</p>
          <h2 id="systems-heading" className="nueva-home-systems-heading">
            {copy.headingBefore} <em>{copy.headingEmphasis}</em>
          </h2>
          <p className="nueva-home-systems-body">{copy.body}</p>
        </div>

        <div className="nueva-home-systems-grid">
          <article className="nueva-home-system-card nueva-home-system-card--architecture">
            <div className="nueva-home-system-card-copy">
              <span className="nueva-home-system-card-index">{copy.architecture.index}</span>
              <h3>{copy.architecture.title}</h3>
              <p>{copy.architecture.description}</p>
            </div>
            <ArchitectureTopology nodes={copy.architecture.nodes} />
          </article>

          <article className="nueva-home-system-card nueva-home-system-card--integrations">
            <div className="nueva-home-system-card-copy">
              <span className="nueva-home-system-card-index">{copy.integrations.index}</span>
              <h3>{copy.integrations.title}</h3>
              <p>{copy.integrations.description}</p>
            </div>
            <IntegrationFlow
              inputs={copy.integrations.inputs}
              hub={copy.integrations.hub}
              outputs={copy.integrations.outputs}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
