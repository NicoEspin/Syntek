import Image from "next/image";
import Link from "next/link";
import TitleSection from "@/app/components/(common)/TitleSection";
import { getProjectById } from "@/data/projects";
import { getLocalizedPath } from "@/lib/seo";

const SELECTED_PROJECT_IDS = ["cari-turismo", "constructora-software", "thumblify"];

export default function NewHomeSelectedWork({ locale, copy }) {
  const selectedProjects = SELECTED_PROJECT_IDS.map((id) => getProjectById(id, locale)).filter(Boolean);

  return (
    <section
      id="projects"
      data-nh-stage="work"
      data-nh-beam-intensity="0.3"
      data-nh-beam-x="1"
      data-nh-beam-y="-1"
      aria-labelledby="selected-work-heading"
      className="nueva-home-selected-work"
    >
      <div className="nueva-home-selected-work-inner">
        <header className="nueva-home-selected-work-header">
          <TitleSection title={copy.label} />
          <h2 id="selected-work-heading">{copy.heading}</h2>
          <p>{copy.body}</p>
        </header>

        <div className="nueva-home-selected-work-list">
          {selectedProjects.map((project, index) => {
            const projectCopy = copy.projects[project.id];
            const imageAlt = project.caseStudy?.hero.imageAlt ?? projectCopy.imageAlt;

            return (
              <article key={project.id} className={`nueva-home-work-item nueva-home-work-item--${index + 1}`}>
                <Link
                  href={getLocalizedPath(locale, "/projects/[id]", { id: project.id })}
                  aria-label={`${copy.viewProject}: ${project.title}`}
                  className="nueva-home-work-media nueva-home-focus"
                >
                  <Image
                    src={project.coverImage}
                    alt={imageAlt}
                    fill
                    sizes={index === 0 ? "(max-width: 767px) 100vw, 80vw" : "(max-width: 767px) 100vw, 50vw"}
                    className="nueva-home-work-image"
                  />
                </Link>

                <div className="nueva-home-work-copy">
                  <div className="nueva-home-work-meta">
                    <span>{projectCopy.classification}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description.short}</p>
                  <div className="nueva-home-work-footer">
                    <ul aria-label={copy.technologiesLabel}>
                      {project.tags.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <Link href={getLocalizedPath(locale, "/projects/[id]", { id: project.id })} className="nueva-home-work-link nueva-home-focus">
                      {copy.viewProject}<span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
