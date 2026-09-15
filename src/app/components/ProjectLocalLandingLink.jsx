"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ProjectLocalLandingLink({ project }) {
  const t = useTranslations("Projects.localLanding");

  if (project.localLanding !== "villa-carlos-paz") return null;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 pb-12 md:px-5 lg:px-10 xl:px-24">
      <Link
        href="/villa-carlos-paz"
        className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition-colors hover:border-[#A1E233]/40 hover:text-[#A1E233]"
      >
        {t(`villaCarlosPaz.${project.id}`)}
      </Link>
    </section>
  );
}
