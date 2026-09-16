import Image from "next/image";
import { Link } from "@/i18n/navigation";
import NextProjectTeaser from "./templates/NextProjectTeaser";

function NarrativeSection({ section, className = "" }) {
  if (!section) {
    return null;
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-3xl">
        <h2 className="text-display-sm leading-display tracking-display text-balance">
          {section.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
          {section.body}
        </p>
      </div>
    </section>
  );
}

function ListSection({ section }) {
  if (!section?.items?.length) {
    return null;
  }

  return (
    <section className="border-t border-white/8 py-16 md:py-24">
      <h2 className="max-w-3xl text-display-sm leading-display tracking-display text-balance">
        {section.title}
      </h2>
      <ul className="mt-10 grid gap-px overflow-hidden border border-white/8 bg-white/8 md:grid-cols-3">
        {section.items.map((item) => (
          <li key={item} className="bg-neutral-950 p-6 text-base leading-relaxed text-white/70">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CaseStudyDetail({
  project,
  nextProject,
  relatedArticles,
  relatedServices,
}) {
  const { caseStudy } = project;
  const { hero, snapshot, context, challenge, strategy, solution, decisions, architecture, results, cta } = caseStudy;

  return (
    <main className="overflow-x-hidden bg-[#0a0a0a] text-white">
      <section className="relative isolate flex min-h-[78dvh] items-end overflow-hidden border-b border-white/8">
        <Image
          src={project.heroImage}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,10,10,0.3),rgba(10,10,10,0.7)_48%,#0a0a0a)]" />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ background: `radial-gradient(circle at 76% 20%, ${project.accentColor}, transparent 32%)` }} />

        <div className="mx-auto w-full max-w-screen-2xl px-4 pb-16 pt-28 md:px-5 lg:px-10 xl:px-24">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-black/40 px-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 transition-colors duration-300 ease-premium hover:border-primary1/40 hover:text-primary1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary1"
          >
            {hero.backLabel}
          </Link>
          <p className="mt-12 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
            {hero.eyebrow}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.24em] text-primary1">
            {project.title}
          </p>
          <h1 className="mt-5 max-w-5xl text-display-xl font-semibold leading-display tracking-display text-balance md:text-display-lg">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            {hero.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-5 lg:px-10 xl:px-24">
        <h2 className="sr-only">{snapshot.title}</h2>
        <dl className="grid gap-px overflow-hidden border border-white/8 bg-white/8 md:grid-cols-3">
          {snapshot.items.map((item) => (
            <div key={item.label} className="bg-neutral-950 p-6">
              <dt className="text-[10px] uppercase tracking-[0.24em] text-white/38">{item.label}</dt>
              <dd className="mt-3 text-sm text-white/85">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <article className="mx-auto max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24">
        <NarrativeSection section={context} />
        <NarrativeSection section={challenge} className="border-t border-white/8" />
        <NarrativeSection section={strategy} className="border-t border-white/8" />

        <section className="border-t border-white/8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="max-w-xl">
              <h2 className="text-display-sm leading-display tracking-display text-balance">{solution.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">{solution.body}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {solution.images.map((image, index) => (
                <figure key={image} className="relative aspect-[4/3] overflow-hidden border border-white/8 bg-neutral-900">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <figcaption className="sr-only">{`${project.title} ${index + 1}`}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ListSection section={decisions} />
        <ListSection section={architecture} />
        <NarrativeSection section={results} className="border-t border-white/8" />
      </article>

      <section className="border-t border-white/8 bg-neutral-900/45">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-4 py-20 md:px-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-10 xl:px-24">
          <div className="max-w-2xl">
            <h2 className="text-display-sm leading-display tracking-display text-balance">{cta.title}</h2>
            <Link
              href="/contacto"
              className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary1 px-6 text-sm font-semibold text-black transition-colors duration-300 ease-premium hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary1"
            >
              {cta.label}
            </Link>
          </div>

          <div className="space-y-10">
            {relatedServices.length > 0 ? (
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.24em] text-white/40">{cta.relatedServicesTitle}</h3>
                <ul className="mt-4 space-y-2">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={{ pathname: "/servicios/[slug]", params: { slug: service.slug } }}
                        className="inline-flex min-h-11 items-center border-b border-white/12 text-sm text-white/80 transition-colors duration-300 ease-premium hover:border-primary1 hover:text-primary1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary1"
                      >
                        {service.shortLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {relatedArticles.length > 0 ? (
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.24em] text-white/40">{cta.relatedArticlesTitle}</h3>
                <ul className="mt-4 space-y-2">
                  {relatedArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={{ pathname: "/blogs/[slug]", params: { slug: article.slug } }}
                        className="inline-flex min-h-11 items-center border-b border-white/12 text-sm text-white/80 transition-colors duration-300 ease-premium hover:border-primary1 hover:text-primary1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary1"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <NextProjectTeaser nextProject={nextProject} />
    </main>
  );
}
