"use client";

import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import syntekIcon from "@/app/assets/logos/syntek.svg";

const CONTACT_EMAIL = "synttek@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/";
const LINKEDIN_URL = "https://www.linkedin.com/";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const links = [
    { key: "home", href: `/${locale}` },
    { key: "services", href: `/${locale}/#services` },
    { key: "projects", href: `/${locale}/#projects` },
    { key: "about", href: `/${locale}/#about` },
    { key: "contact", href: `/${locale}/#contact` },
  ];

  const socialLinks = [
    {
      key: "email",
      icon: Mail,
      href: `mailto:${CONTACT_EMAIL}`,
      label: CONTACT_EMAIL,
    },
    {
      key: "instagram",
      icon: Instagram,
      href: INSTAGRAM_URL,
      label: t("channels.instagram.value"),
    },
    {
      key: "linkedin",
      icon: Linkedin,
      href: LINKEDIN_URL,
      label: t("channels.linkedin.value"),
    },
  ];

  return (
    <footer className="border-t border-white/8 bg-[#050505] px-4 py-8 text-white md:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a
            href={`/${locale}`}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
              <Image
                src={syntekIcon}
                alt={t("brandLabel")}
                className="h-6 w-auto"
                priority={false}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Synttek</p>
              <p className="text-xs text-white/40">{t("brandLabel")}</p>
            </div>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                {t(`links.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 justify-center ">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-primary1/30 hover:bg-primary1/10 hover:text-primary1"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/8 pt-4 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright")}</p>
          <p>{t("legalNote")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;