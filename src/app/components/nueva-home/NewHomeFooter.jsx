import Link from "next/link";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/business";
import { getLocalizedPath } from "@/lib/seo";

const internalLinks = [
  ["services", "/servicios"], ["projects", "/projects"], ["about", "/sobre-nosotros"], ["blog", "/blogs"], ["contact", "/contacto"],
];

export default function NewHomeFooter({ locale, copy }) {
  return (
    <footer className="nueva-home-footer">
      <div className="nueva-home-footer-inner">
        <div className="nueva-home-footer-brand"><strong>Synttek</strong><p>{copy.statement}</p></div>
        <nav aria-label={copy.navigationLabel}>{internalLinks.map(([key, path]) => <Link key={key} href={getLocalizedPath(locale, path)}>{copy.links[key]}</Link>)}</nav>
        <div className="nueva-home-footer-channels">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{copy.channels.instagram}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">{copy.channels.linkedin}</a>
        </div>
      </div>
      <div className="nueva-home-footer-legal"><span>{copy.copyright}</span><span>{copy.location}</span></div>
    </footer>
  );
}
