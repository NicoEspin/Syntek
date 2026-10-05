import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.svg";
import { getLocalizedPath } from "@/lib/seo";

const destinations = ["services", "projects", "process"];
const hrefs = {
  services: "/servicios",
  projects: "/projects",
  process: "/sobre-nosotros",
};

export default function NewHomeNavbar({ locale, copy }) {
  const homeHref = `/${locale}/nueva-home`;

  return (
    <header className="nueva-home-header">
      <nav aria-label={copy.ariaLabel} className="nueva-home-nav">
          <Link href={homeHref} className="nueva-home-logo nueva-home-focus">
            <Image src={logo} alt="Synttek" priority className="nueva-home-logo-image" />
          </Link>

          <div className="nueva-home-nav-links">
            {destinations.map((destination) => (
              <Link key={destination} href={getLocalizedPath(locale, hrefs[destination])} className="nueva-home-nav-link nueva-home-focus">
                {copy[destination]}
              </Link>
            ))}
          </div>

          <details className="nueva-home-mobile-menu">
            <summary
              aria-label={copy.openMenu}
              className="nueva-home-mobile-menu-trigger nueva-home-focus"
            >
              <span aria-hidden="true" className="nueva-home-mobile-menu-icon" />
              <span aria-hidden="true" className="nueva-home-mobile-menu-icon" />
            </summary>
            <div className="nueva-home-mobile-menu-panel">
              {destinations.map((destination) => (
                <Link key={destination} href={getLocalizedPath(locale, hrefs[destination])} className="nueva-home-mobile-menu-link nueva-home-focus">
                  {copy[destination]}
                </Link>
              ))}
            </div>
          </details>

          <div className="nueva-home-nav-actions">
            <span className="nueva-home-nav-status" aria-label={copy.statusAriaLabel}>
              <span aria-hidden="true" className="nueva-home-status-dot" />
              {copy.status}
            </span>
            <Link href={getLocalizedPath(locale, "/contacto")} className="nueva-home-button nueva-home-focus">
              {copy.cta}
            </Link>
          </div>
      </nav>
    </header>
  );
}
