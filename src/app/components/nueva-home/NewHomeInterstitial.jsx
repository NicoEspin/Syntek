import styles from "@/app/[locale]/nueva-home/page.module.css";

export default function NewHomeInterstitial({ copy }) {
  return (
    <section
      data-nh-stage="interstitial"
      data-nh-beam-intensity="0.42"
      data-nh-beam-x="-1"
      data-nh-beam-y="3"
      aria-labelledby="interstitial-heading"
      className="nueva-home-interstitial"
    >
      <div
        data-nh-expand
        data-nh-expand-from="0.22"
        className="nueva-home-interstitial-panel"
      >
        <p className="nueva-home-interstitial-label">{copy.label}</p>
        <h2 id="interstitial-heading" className="nueva-home-interstitial-heading">
          <span>{copy.headingLine1}</span>
          <em className={styles.editorialEmphasis}>{copy.headingLine2}</em>
        </h2>
        <p className="nueva-home-interstitial-body">{copy.body}</p>
        <span aria-hidden="true" className="nueva-home-interstitial-mark">S</span>
      </div>
    </section>
  );
}
