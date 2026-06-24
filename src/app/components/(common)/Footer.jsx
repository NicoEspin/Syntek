"use client";

import Image from "next/image";
import { Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import syntekIcon from "@/app/assets/logos/syntek.svg";
import { getPrimaryServices } from "@/data/services";
import {
  BUSINESS_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/business";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const serviceLinks = getPrimaryServices(locale);

  const links = [
    { key: "home", href: `/${locale}` },
    { key: "services", href: `/${locale}/servicios` },
    { key: "projects", href: `/${locale}/#projects` },
    { key: "blog", href: `/${locale}/blogs` },
    { key: "about", href: `/${locale}/sobre-nosotros` },
    { key: "contact", href: `/${locale}/contacto` },
  ];

  const channelLinks = [
    {
      key: "email",
      icon: Mail,
      href: `mailto:${BUSINESS_EMAIL}`,
      label: t("channels.email.label"),
      value: BUSINESS_EMAIL,
      ariaLabel: t("channels.email.ariaLabel"),
    },
    {
      key: "instagram",
      icon: Instagram,
      href: INSTAGRAM_URL,
      label: t("channels.instagram.label"),
      value: t("channels.instagram.value"),
      ariaLabel: t("channels.instagram.ariaLabel"),
      external: true,
    },
    {
      key: "linkedin",
      icon: Linkedin,
      href: LINKEDIN_URL,
      label: t("channels.linkedin.label"),
      value: t("channels.linkedin.value"),
      ariaLabel: t("channels.linkedin.ariaLabel"),
      external: true,
    },
  ];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] text-white overflow-hidden">

      {/* ── EDITORIAL STATEMENT ── */}
      <div className="border-t border-white/8 px-4 pt-14 pb-12 md:px-6 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          {/* Headline + Availability */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-[clamp(2.4rem,5.5vw,5.5rem)] font-medium leading-[1.05] tracking-tight max-w-4xl">
              {t("title")}{" "}
              <em className="not-italic text-primary1">{t("titleAccent")}</em>
            </h2>

            <div className="hidden md:flex flex-col gap-1.5 shrink-0 pb-1.5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                {t("availabilityLabel")}
              </p>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary1 shrink-0" />
                <p className="text-xs text-white/50 leading-snug max-w-52">
                  {t("availabilityValue")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── INFO GRID ── */}
      <div className="border-t border-white/8 px-4 py-12 md:px-6 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
              <a
                href={`/${locale}`}
                className="group flex items-center gap-2.5 w-fit"
              >
                <div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] group-hover:border-white/20 transition-colors duration-300">
                  <Image
                    src={syntekIcon}
                    alt="Synttek"
                    className="h-5 w-auto"
                    priority={false}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-white/75 transition-colors duration-300">
                    Synttek
                  </p>
                  <p className="text-[10px] text-white/30">{t("brandLabel")}</p>
                </div>
              </a>

              <p className="text-sm text-white/40 leading-relaxed">
                {t("description")}
              </p>

              {/* Availability — mobile only */}
              <div className="flex md:hidden flex-col gap-1.5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  {t("availabilityLabel")}
                </p>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary1 shrink-0" />
                  <p className="text-xs text-white/50">{t("availabilityValue")}</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-medium">
                {t("quickLinksLabel")}
              </p>
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-300 w-fit"
                  >
                    {t(`links.${link.key}`)}
                  </a>
                ))}
              </nav>
            </div>

            {/* Channels */}
            <div className="flex flex-col gap-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-medium">
                {t("channelsLabel")}
              </p>
              <div className="flex flex-col gap-3.5">
                {channelLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      aria-label={item.ariaLabel}
                      className="group flex items-start gap-2.5"
                    >
                      <Icon className="size-3.5 mt-0.5 text-white/25 group-hover:text-primary1 transition-colors duration-300 shrink-0" />
                      <div>
                        <p className="text-sm text-white/45 group-hover:text-white transition-colors duration-300 leading-none">
                          {item.label}
                        </p>
                        <p className="text-[10px] text-white/25 mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-medium">
                Servicios
              </p>
              <div className="flex flex-wrap gap-1.5">
                {serviceLinks.map((service) => (
                  <a
                    key={service.slug}
                    href={`/${locale}/servicios/${service.slug}`}
                    className="rounded-full border border-white/8 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-white/30 hover:border-primary1/25 hover:text-primary1 transition-all duration-300"
                  >
                    {service.shortLabel}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── LEGAL BAR ── */}
      <div className="border-t border-white/8 px-4 py-4 md:px-6 lg:px-10 xl:px-24">
        <div className="mx-auto max-w-screen-2xl flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-white/25">{t("copyright")}</p>
          <p className="text-[11px] text-white/20">{t("legalNote")}</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
