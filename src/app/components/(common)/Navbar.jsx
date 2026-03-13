"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useTransition } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import logo from "@/app/assets/logo.svg";
import {
  getFadeUp,
  getNavMenuVariants,
  premiumEase,
  subtleEase,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const mobileContentVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: shouldReduceMotion ? 0 : 0.04,
          staggerChildren: shouldReduceMotion ? 0.03 : 0.05,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const mobileItemVariants = useMemo(
    () => getFadeUp(shouldReduceMotion, { distance: 14, duration: 0.4 }),
    [shouldReduceMotion]
  );

  const menuVariants = useMemo(
    () => getNavMenuVariants(shouldReduceMotion),
    [shouldReduceMotion]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  const navLinks = useMemo(
    () => [
      { label: t("home"), href: "#" },
      { label: t("services"), href: "#services" },
      { label: t("projects"), href: "#projects" },
      { label: t("tools"), href: "#tools" },
      { label: t("about"), href: "#about" },
      { label: t("faqs"), href: "#faqs" },
      { label: t("contact"), href: "#contact" },
    ],
    [t]
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const updateFromHash = () => {
      const { hash, scrollY: currentScroll } = window;

      if (currentScroll < 80 || !hash) {
        setActiveSection("#");
        return;
      }

      if (sectionIds.includes(hash.slice(1))) {
        setActiveSection(hash);
      }
    };

    updateFromHash();

    if (!sections.length) {
      window.addEventListener("hashchange", updateFromHash);
      return () => window.removeEventListener("hashchange", updateFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (window.scrollY < 80) {
          setActiveSection("#");
          return;
        }

        if (visibleEntries.length) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.2, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [navLinks]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buildLocalePath = (nextLocale) => {
    const localizedPath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${nextLocale}`);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    return `${localizedPath}${hash}`;
  };

  const switchLanguage = (nextLocale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      setIsOpen(false);
      router.push(buildLocalePath(nextLocale));
    });
  };

  const renderLanguageSelector = (className = "") => (
    <LayoutGroup>
      <div
        className={cn(
          "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1",
          className
        )}
      >
        {[
          { code: "es", label: "ES" },
          { code: "en", label: "EN" },
        ].map((language) => {
          const isActive = locale === language.code;

          return (
            <motion.button
              key={language.code}
              type="button"
              onClick={() => switchLanguage(language.code)}
              disabled={isPending}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className={cn(
                "relative rounded-full px-3 py-2 text-[11px] font-medium tracking-[0.18em] transition-colors duration-300",
                isActive ? "text-black" : "text-white/55 hover:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="locale-pill"
                  className="absolute inset-0 rounded-full bg-primary1"
                  transition={{ duration: 0.3, ease: premiumEase }}
                />
              )}
              <span className="relative z-10">{language.label}</span>
            </motion.button>
          );
        })}
      </div>
    </LayoutGroup>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.7, ease: premiumEase }}
      className="sticky top-4 z-50 px-4 md:px-5 lg:px-10 xl:px-24"
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          animate={{
            y: shouldReduceMotion ? 0 : isScrolled ? -1 : 0,
            borderColor: isScrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.08)",
            backgroundColor: isScrolled
              ? "rgba(8,8,8,0.94)"
              : "rgba(8,8,8,0.88)",
            boxShadow: isScrolled
              ? "0 18px 50px rgba(0,0,0,0.38)"
              : "0 10px 30px rgba(0,0,0,0.22)",
          }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.35, ease: subtleEase }}
          className="rounded-[24px] border backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
            <motion.a
              href={`/${locale}`}
              className="min-w-0"
              whileHover={shouldReduceMotion ? undefined : { opacity: 0.85 }}
              transition={{ duration: 0.25, ease: premiumEase }}
            >
              <Image
                src={logo}
                alt="Synttek Logo"
                className="h-10 w-24 object-contain md:h-11 md:w-28"
                priority
              />
            </motion.a>

            <LayoutGroup id="navbar-links">
              <nav aria-label={t("mobileLabel")} className="hidden items-center gap-1 lg:flex">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                      className={cn(
                        "relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300",
                        isActive ? "text-white" : "text-white/58 hover:text-white"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-white/[0.06]"
                          transition={{
                            duration: shouldReduceMotion ? 0.2 : 0.28,
                            ease: premiumEase,
                          }}
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>
                    </motion.a>
                  );
                })}
              </nav>
            </LayoutGroup>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden sm:flex">{renderLanguageSelector()}</div>

              <motion.button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={isOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.25, ease: premiumEase }}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
              >
                {isOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
              </motion.button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                id="mobile-navigation"
                className="border-t border-white/8 lg:hidden"
              >
                <motion.div
                  variants={mobileContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid gap-5 px-4 py-5 md:px-6 md:py-6"
                >
                  <motion.div
                    variants={mobileItemVariants}
                    className="flex items-center justify-between gap-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                      {t("mobileLabel")}
                    </p>
                    {renderLanguageSelector("sm:hidden")}
                  </motion.div>

                  <div className="grid gap-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        variants={mobileItemVariants}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={activeSection === link.href ? "location" : undefined}
                        whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                        transition={{
                          duration: 0.28,
                          ease: premiumEase,
                          delay: shouldReduceMotion ? 0 : index * 0.01,
                        }}
                        className={cn(
                          "rounded-2xl border px-4 py-3.5 text-sm font-medium transition-colors duration-300",
                          activeSection === link.href
                            ? "border-primary1/20 bg-primary1/[0.08] text-primary1"
                            : "border-white/8 bg-white/[0.02] text-white/78 hover:text-white"
                        )}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;