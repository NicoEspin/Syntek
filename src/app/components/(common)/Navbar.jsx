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
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import logo from "@/app/assets/logo.svg";
import { premiumEase, subtleEase } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─── Constantes ───────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// ─── Componente: Link de navegación desktop ───────────────────────────────────
function NavLink({ link, isActive, shouldReduceMotion }) {
  return (
    <motion.a
      href={link.href}
      aria-current={isActive ? "location" : undefined}
      className="group relative flex flex-col items-center gap-[3px] py-1"
    >
      {/* Texto */}
      <span
        className={cn(
          "text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
          isActive ? "text-white" : "text-white/45 group-hover:text-white/80"
        )}
      >
        {link.label}
      </span>

      {/* Subrayado deslizante — solo el activo lo tiene visible */}
      <span className="relative h-px w-full overflow-hidden">
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-0 bg-[#A1E233]"
          style={{ originX: isActive ? 0 : 0.5 }}
          animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.38, ease }}
        />
        {/* Hover underline (sin layoutId, instantáneo) */}
        <span className="absolute inset-0 scale-x-0 bg-white/20 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </motion.a>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
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
    ],
    [t]
  );

  // Intersection Observer para sección activa
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const sectionIds = navLinks.map((l) => l.href.replace("#", "")).filter(Boolean);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const updateFromHash = () => {
      const { hash, scrollY: sy } = window;
      if (sy < 80 || !hash) { setActiveSection("#"); return; }
      if (sectionIds.includes(hash.slice(1))) setActiveSection(hash);
    };

    updateFromHash();

    if (!sections.length) {
      window.addEventListener("hashchange", updateFromHash);
      return () => window.removeEventListener("hashchange", updateFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (window.scrollY < 80) { setActiveSection("#"); return; }
        if (visible.length) setActiveSection(`#${visible[0].target.id}`);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.2, 0.35, 0.55] }
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("hashchange", updateFromHash);
    return () => { observer.disconnect(); window.removeEventListener("hashchange", updateFromHash); };
  }, [navLinks]);

  // Lock scroll cuando el menu mobile está abierto
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [isOpen]);

  // Cierra menu en resize > lg
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const buildLocalePath = (nextLocale) => {
    const localizedPath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${nextLocale}`);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    return `${localizedPath}${hash}`;
  };

  const switchLanguage = (nextLocale) => {
    if (nextLocale === locale) return;
    startTransition(() => { setIsOpen(false); router.push(buildLocalePath(nextLocale)); });
  };

  // ── Selector de idioma ────────────────────────────────────────────────────
  const LanguageToggle = ({ compact = false }) => (
    <LayoutGroup>
      <div className="inline-flex items-center gap-0.5">
        {[{ code: "es", label: "ES" }, { code: "en", label: "EN" }].map((lang, i) => {
          const isActive = locale === lang.code;
          return (
            <motion.button
              key={lang.code}
              type="button"
              onClick={() => switchLanguage(lang.code)}
              disabled={isPending}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              className={cn(
                "relative px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300",
                isActive ? "text-[#A1E233]" : "text-white/28 hover:text-white/55"
              )}
            >
              {lang.label}
              {/* Separador vertical entre los dos */}
              {i === 0 && (
                <span className="pointer-events-none absolute right-0 top-1/2 h-3 w-px -translate-y-1/2 bg-white/15" />
              )}
            </motion.button>
          );
        })}
      </div>
    </LayoutGroup>
  );

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease }}
        className="sticky top-4 z-50 px-4 md:px-5 lg:px-10 xl:px-24"
      >
        <div className="mx-auto max-w-screen-2xl">
          <motion.div
            animate={{
              borderColor: isScrolled ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)",
              backgroundColor: isScrolled ? "rgba(6,6,6,0.96)" : "rgba(6,6,6,0.85)",
              boxShadow: isScrolled
                ? "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)"
                : "0 8px 32px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.3, ease: subtleEase }}
            className="rounded-[20px] border backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-6 px-4 py-3 md:px-6">

              {/* ── ZONA IZQUIERDA: Logo + disponibilidad ─────────────────── */}
              <div className="flex items-center gap-4 min-w-0">
                <motion.a
                  href={`/${locale}`}
                  whileHover={shouldReduceMotion ? undefined : { opacity: 0.8 }}
                  transition={{ duration: 0.2, ease: premiumEase }}
                  className="shrink-0"
                >
                  <Image
                    src={logo}
                    alt="Synttek"
                    className="h-20 w-[88px] object-contain  -mt-2 -mb-3"
                    priority
                  />
                </motion.a>


              </div>

              {/* ── ZONA CENTRAL: Links desktop ───────────────────────────── */}
              <LayoutGroup id="nav-desktop">
                <nav
                  aria-label="Navegación principal"
                  className="hidden items-center gap-6 lg:flex"
                >
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      link={link}
                      isActive={activeSection === link.href}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  ))}
                </nav>
              </LayoutGroup>

              {/* ── ZONA DERECHA: Idioma + CTA + Hamburger ────────────────── */}
              <div className="flex items-center gap-1">
                {/* Selector de idioma desktop */}
                <div className="hidden lg:flex">
                  <LanguageToggle />
                </div>

                {/* Separador vertical */}
                <span className="mx-2 hidden h-4 w-px bg-white/10 lg:block" />

                {/* CTA "Contacto" — desktop */}
                <motion.a
                  href="#contact"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.2, ease }}
                  className="hidden items-center gap-2 rounded-full bg-[#A1E233] px-4 py-2 text-[11px] font-bold tracking-[0.16em] uppercase text-black transition-colors duration-300 hover:bg-[#b6f53d] lg:inline-flex"
                >
                  {t("contact")}
                  {/* Flecha diagonal */}
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>

                {/* Hamburger mobile */}
                <motion.button
                  type="button"
                  onClick={() => setIsOpen((c) => !c)}
                  aria-label={isOpen ? t("closeMenu") : t("openMenu")}
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  className="relative inline-flex size-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] lg:hidden"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.span
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2, ease }}
                      >
                        <X className="size-4 text-white" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="open"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2, ease }}
                        className="flex flex-col gap-[5px] items-center justify-center"
                      >
                        {/* Icono de hamburger custom con dos líneas de diferente largo */}
                        <span className="block h-px w-5 bg-white/70" />
                        <span className="block h-px w-3.5 bg-white/70 self-end" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* ── OVERLAY MOBILE: fullscreen editorial ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-[#060606] px-6 py-8 lg:hidden"
          >
            {/* Línea de acento superior */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A1E233]/40 to-transparent" />

            {/* Header del overlay: logo + cerrar */}
            <div className="flex items-center justify-between mb-12">
              <Image
                src={logo}
                alt="Synttek"
                className="h-9 w-[88px] object-contain opacity-60"
              />
              <div className="flex items-center gap-4">
                <LanguageToggle compact />
                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/10"
                >
                  <X className="size-4 text-white/60" />
                </motion.button>
              </div>
            </div>

            {/* Links en escala editorial ─ stagger */}
            <nav className="flex flex-1 flex-col justify-center gap-1">
              {[...navLinks, { label: t("contact"), href: "#contact" }].map(
                (link, i) => {
                  const isActive = activeSection === link.href;
                  const isContactCta = link.href === "#contact";
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.55,
                        delay: shouldReduceMotion ? 0 : 0.06 + i * 0.06,
                        ease,
                      }}
                      className={cn(
                        "group flex items-center justify-between border-b py-4 transition-colors duration-300",
                        isContactCta
                          ? "border-[#A1E233]/20"
                          : "border-white/[0.06]",
                        isActive ? "border-[#A1E233]/15" : ""
                      )}
                    >
                      <span
                        className={cn(
                          "text-[clamp(1.6rem,8vw,3rem)] font-black tracking-tight leading-none transition-colors duration-300",
                          isContactCta
                            ? "text-[#A1E233] group-hover:text-[#ccf569]"
                            : isActive
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/80"
                        )}
                      >
                        {link.label}
                      </span>

                      {/* Número de índice */}
                      <span className="text-[10px] font-mono tracking-widest text-white/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.a>
                  );
                }
              )}
            </nav>

            {/* Footer del overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="relative flex size-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-40" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/22">
                {t("available")} · Synttek
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;