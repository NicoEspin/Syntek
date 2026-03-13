"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export default function ProjectsFilterBar({
  categories = [],
  activeCategory,
  onChange,
}) {
  const t = useTranslations("Projects");
  const filterItems = ["all", ...categories];

  return (
    <LayoutGroup id="projects-filter-bar">
      <div
        aria-label={t("filterLabel")}
        className="flex flex-wrap items-center gap-2"
        role="tablist"
      >
        {filterItems.map((item) => {
          const isActive = activeCategory === item;
          const label = item === "all" ? t("allProjects") : t(`categories.${item}`);

          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item)}
              className={cn(
                "relative overflow-hidden rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-300",
                isActive
                  ? "border-primary1 text-black"
                  : "border-white/10 text-white/45 hover:border-white/20 hover:text-white"
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="projects-filter-pill"
                  className="absolute inset-0 rounded-full bg-primary1"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              ) : null}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
