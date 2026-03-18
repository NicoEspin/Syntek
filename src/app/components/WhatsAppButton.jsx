"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";

// ─── Constantes ───────────────────────────────────────────────────────────────
const PHONE = "5493541560518"; // formato internacional sin + ni espacios
const ease = [0.16, 1, 0.3, 1];

const MESSAGES = {
  es: "Hola, vi su sitio web y me gustaría conocer más sobre sus servicios. 👋",
  en: "Hi, I saw your website and I'd love to learn more about your services. 👋",
};

// ─── SVG de WhatsApp (custom path, sin librería) ──────────────────────────────
function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function WhatsAppButton() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Detecta cuándo la sección Hero (#root → primer section) sale del viewport
  useEffect(() => {
    const heroSection = document.querySelector("main > section:first-child");
    if (!heroSection) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Observa el data-attribute que Navbar escribe en <body> al abrir el menú mobile
  useEffect(() => {
    const sync = () => {
      setMenuOpen(document.body.dataset.mobileMenuOpen === "true");
    };

    // Estado inicial (por si ya estaba abierto al montar)
    sync();

    const mo = new MutationObserver(sync);
    mo.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-menu-open"],
    });

    return () => mo.disconnect();
  }, []);

  const message = encodeURIComponent(MESSAGES[locale] ?? MESSAGES.es);
  const href = `https://wa.me/${PHONE}?text=${message}`;

  // El botón es visible solo cuando el hero salió Y el menú mobile está cerrado
  const shouldShow = visible && !menuOpen;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key="wa-button"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.5, ease }}
          className="fixed bottom-6 right-6 z-[9998] md:bottom-8 md:right-8"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              locale === "en" ? "Chat on WhatsApp" : "Chatear por WhatsApp"
            }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.93 }}
            className="group relative flex items-center"
          >
            {/* ── Etiqueta de texto — se expande al hover ──────────────── */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 6, width: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="mr-3 rounded-full border border-white/10 bg-[#0a0a0a]/90 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/70 backdrop-blur-sm">
                    {locale === "en" ? "Chat with us" : "Chateá con nosotros"}
                  </span>
                </motion.span>
              )}
            </AnimatePresence>

            {/* ── Botón circular ────────────────────────────────────────── */}
            <div className="relative flex size-14 items-center justify-center">
              {/* Anillo pulsante exterior */}
              <motion.span
                animate={{
                  scale: hovered ? [1, 1.35, 1] : [1, 1.2, 1],
                  opacity: hovered ? [0.4, 0, 0.4] : [0.25, 0, 0.25],
                }}
                transition={{
                  duration: hovered ? 1 : 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "#25D366" }}
              />

              {/* Segundo anillo con delay */}
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.15, 0, 0.15],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6,
                }}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "#25D366" }}
              />

              {/* Círculo principal */}
              <motion.div
                animate={{
                  scale: hovered ? 1.08 : 1,
                  boxShadow: hovered
                    ? "0 12px 40px rgba(37,211,102,0.45), 0 4px 16px rgba(0,0,0,0.4)"
                    : "0 6px 24px rgba(37,211,102,0.25), 0 2px 8px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.3, ease }}
                className="relative z-10 flex size-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "#25D366" }}
              >
                {/* Shimmer interior en hover */}
                <motion.span
                  animate={{
                    opacity: hovered ? 1 : 0,
                    x: hovered ? "100%" : "-100%",
                  }}
                  transition={{ duration: 0.5, ease }}
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.span>

                <WhatsAppIcon size={24} />
              </motion.div>
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
