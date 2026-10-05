import TitleSection from "@/app/components/(common)/TitleSection";

const serviceVisuals = ["web", "software", "automation", "ai"];

function WebVisual() {
  return (
    <div aria-hidden="true" className="nueva-home-service-visual nueva-home-visual-web">
      <div className="nueva-home-visual-web-sidebar">
        <span className="nueva-home-visual-bar nueva-home-visual-bar--accent" />
        <span className="nueva-home-visual-bar nueva-home-visual-bar--wide" />
        <span className="nueva-home-visual-bar nueva-home-visual-bar--short" />
      </div>
      <div className="nueva-home-visual-web-main">
        <div className="nueva-home-visual-web-display" />
        <div className="nueva-home-visual-web-cards"><span className="nueva-home-visual-web-card nueva-home-visual-web-card--accent" /><span className="nueva-home-visual-web-card" /><span className="nueva-home-visual-web-card" /></div>
      </div>
    </div>
  );
}

function SoftwareVisual({ label }) {
  return (
    <div aria-hidden="true" className="nueva-home-service-visual nueva-home-visual-software">
      <div className="nueva-home-visual-software-line" />
      <div className="nueva-home-visual-software-line nueva-home-visual-software-line--vertical" />
      <span className="nueva-home-visual-node nueva-home-visual-node--left" />
      <span className="nueva-home-visual-node nueva-home-visual-node--right" />
      <span className="nueva-home-visual-node nueva-home-visual-node--top" />
      <span className="nueva-home-visual-node nueva-home-visual-node--bottom" />
      <span className="nueva-home-visual-system">{label}</span>
    </div>
  );
}

function AutomationVisual({ labels }) {
  return (
    <div aria-hidden="true" className="nueva-home-service-visual nueva-home-visual-automation">
      <div className="nueva-home-visual-automation-grid">
        <span className="nueva-home-visual-tag">{labels.form}</span>
        <span className="nueva-home-visual-link" />
        <span className="nueva-home-visual-tag nueva-home-visual-tag--accent">{labels.rule}</span>
        <span className="nueva-home-visual-link" />
        <span className="nueva-home-visual-tag">{labels.team}</span>
      </div>
    </div>
  );
}

function AiVisual({ label }) {
  return (
    <div aria-hidden="true" className="nueva-home-service-visual nueva-home-visual-ai">
      <div className="nueva-home-visual-ai-label"><span className="nueva-home-dot" />{label}</div>
      <div className="nueva-home-visual-ai-messages">
        <span className="nueva-home-visual-message" />
        <span className="nueva-home-visual-message nueva-home-visual-message--reply" />
        <span className="nueva-home-visual-message nueva-home-visual-message--accent" />
      </div>
    </div>
  );
}

function ServiceVisual({ labels, visual }) {
  if (visual === "web") return <WebVisual />;
  if (visual === "software") return <SoftwareVisual label={labels.system} />;
  if (visual === "automation") return <AutomationVisual labels={labels} />;
  return <AiVisual label={labels.contextAvailable} />;
}

export default function NewHomeServices({ copy }) {
  return (
    <section
      id="services"
      data-nh-stage="services"
      data-nh-beam-intensity="0.5"
      data-nh-beam-x="2"
      data-nh-beam-y="0"
      aria-labelledby="services-heading"
      className="nueva-home-section"
    >
      <div className="nueva-home-services-inner">
        <div className="nueva-home-services-heading">
          <TitleSection title={copy.eyebrow} />
          <h2 id="services-heading" className="nueva-home-services-title">{copy.title}</h2>
        </div>

        <div className="nueva-home-service-grid">
          {copy.items.map((service, index) => (
            <article key={service.title} className={`nueva-home-service-card nueva-home-service-card--${index + 1}`}>
              <ServiceVisual labels={copy.visualLabels} visual={serviceVisuals[index]} />
              <div className="nueva-home-service-content">
                <div className="nueva-home-service-title-row">
                  <h3 className="nueva-home-service-title">{service.title}</h3>
                  <span className="nueva-home-service-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="nueva-home-service-description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="nueva-home-secondary-services">
          <p className="nueva-home-secondary-services-label">{copy.secondaryLabel}</p>
          <ul className="nueva-home-secondary-services-list">
            {copy.secondaryItems.map((service, index) => (
              <li key={service}>
                <span className="nueva-home-secondary-service-index">{String(index + 5).padStart(2, "0")}</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
