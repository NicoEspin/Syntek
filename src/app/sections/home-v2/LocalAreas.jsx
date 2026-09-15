"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function LocalAreas() {
  const t = useTranslations("HomeV2.localAreas");

  return (
    <section className="px-4 py-16 md:px-5 lg:px-10 xl:px-24">
      <div className="mx-auto max-w-screen-2xl border-y border-white/8 py-10">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/50 md:text-base">
          {t("description")}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <Link className="text-[#A1E233] underline decoration-[#A1E233]/35 underline-offset-4 transition-colors hover:text-white" href="/villa-carlos-paz">
            {t("villaCarlosPazLink")}
          </Link>
          <Link className="text-[#A1E233] underline decoration-[#A1E233]/35 underline-offset-4 transition-colors hover:text-white" href="/cordoba">
            {t("cordobaLink")}
          </Link>
        </div>
      </div>
    </section>
  );
}
