"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import TitleSection from "@/app/components/(common)/TitleSection";
import { cn } from "@/lib/utils";

// ─── Constantes ───────────────────────────────────────────────────────────────
const CONTACT_EMAIL = "synttek@gmail.com";
const CONTACT_PHONE = "+54 3541560518";
const INSTAGRAM_URL = "https://www.instagram.com/";
const LINKEDIN_URL = "https://www.linkedin.com/";

const ease = [0.16, 1, 0.3, 1];

// ─── Variantes de animación ───────────────────────────────────────────────────
const fadeUp = (delay = 0, distance = 40) => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease } },
});

const lineReveal = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, delay, ease },
  },
});

// ─── Método de contacto — versión tipográfica minimalista ─────────────────────
function ContactMethod({ icon: Icon, label, value, href, external, index }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index, ease }}
      whileHover="hover"
      className="group flex items-center justify-between gap-4 border-b border-white/6 py-4 transition-colors duration-300 hover:border-[#A1E233]/20 last:border-b-0"
    >
      <div className="flex items-center gap-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] transition-all duration-300 group-hover:border-[#A1E233]/25 group-hover:bg-[#A1E233]/8">
          <Icon className="size-4 text-[#A1E233]" />
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/28">
            {label}
          </span>
          <span className="text-sm font-medium text-white/72 transition-colors duration-300 group-hover:text-white">
            {value}
          </span>
        </div>
      </div>
      <motion.span
        variants={{ hover: { x: 3, y: -3 } }}
        transition={{ duration: 0.25, ease }}
        className="text-white/18 transition-colors duration-300 group-hover:text-[#A1E233]"
      >
        <ArrowUpRight className="size-4" />
      </motion.span>
    </motion.a>
  );
}

// ─── Input custom ─────────────────────────────────────────────────────────────
function Field({ label, children, className }) {
  return (
    <label className={cn("group flex flex-col gap-2.5", className)}>
      <span className="text-[10px] tracking-[0.22em] uppercase text-white/35 transition-colors duration-300 group-focus-within:text-[#A1E233]/70">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass = cn(
  "w-full rounded-2xl border border-white/8 bg-neutral-950/80 px-5 py-4",
  "text-sm text-white placeholder:text-white/20 outline-none",
  "transition-all duration-300",
  "focus:border-[#A1E233]/25 focus:bg-black focus:ring-2 focus:ring-[#A1E233]/8",
);

// ─── Componente principal ─────────────────────────────────────────────────────
const Contact = () => {
  const t = useTranslations("Contact");
  const shouldReduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-5%" });

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-8%" });

  const linksRef = useRef(null);
  const isLinksInView = useInView(linksRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const contactMethods = [
    {
      key: "email",
      icon: Mail,
      href: `mailto:${CONTACT_EMAIL}`,
      value: CONTACT_EMAIL,
      external: false,
    },
    {
      key: "phone",
      icon: Phone,
      href: `tel:${CONTACT_PHONE.replace(/\s+/g, "")}`,
      value: CONTACT_PHONE,
      external: false,
    },
    {
      key: "instagram",
      icon: Instagram,
      href: INSTAGRAM_URL,
      value: t("methods.instagram.value"),
      external: true,
    },
    {
      key: "linkedin",
      icon: Linkedin,
      href: LINKEDIN_URL,
      value: t("methods.linkedin.value"),
      external: true,
    },
  ];

  const handleChange = ({ target: { name, value } }) => {
    setForm((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(t("config_error"));
      return;
    }

    setLoading(true);
    const send = emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: "Synttek",
        from_email: form.email,
        to_email: CONTACT_EMAIL,
        message: form.message,
      },
      publicKey,
    );

    toast.promise(send, {
      pending: t("sending_message"),
      success: t("success_message"),
      error: t("error_message"),
    });

    send
      .then(() => setForm({ name: "", email: "", message: "" }))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        pauseOnHover
        toastClassName={() =>
          "rounded-2xl border border-white/10 bg-neutral-950 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        }
        bodyClassName={() => "text-sm font-medium text-white/88"}
        progressClassName={() => "!bg-[#A1E233]"}
      />

      {/* Fondos atmosféricos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-5%] top-[10%] h-80 w-80 rounded-full bg-[#A1E233]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-[-5%] h-64 w-64 rounded-full bg-[#A1E233]/4 blur-[80px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl">
        {/* TitleSection centrado */}
        <TitleSection title={t("title-section")} />

        {/* ── HEADER: headline de impacto ────────────────────────────────── */}
        <div ref={headerRef} className="mt-16 mb-16 md:mb-20">
          {/* Número decorativo fantasma */}
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={isHeaderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease }}
              aria-hidden
              className="block text-[clamp(5rem,18vw,18rem)] font-black leading-none tracking-tighter select-none"
              style={{ color: "rgba(161,226,51,0.04)" }}
            >
              {t("headline-hola")}
            </motion.span>
          </div>

          {/* Headline principal encima del número */}
          <div className="-mt-[clamp(3.5rem,12vw,13rem)]">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.12, ease }}
                className="text-[clamp(2rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white"
              >
                {t("headline-line1")}
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease }}
                className="text-[clamp(2rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-tight text-[#A1E233]"
              >
                {t("headline-line2")}
              </motion.h2>
            </div>
          </div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/45 md:text-base"
          >
            {t("description")}
          </motion.p>

          {/* Línea divisora */}
          <motion.div
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={lineReveal(0.6)}
            style={{ transformOrigin: "left" }}
            className="mt-10 h-px w-full bg-white/8"
          />
        </div>

        {/* ── CUERPO: form + sidebar ──────────────────────────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.45fr)] lg:gap-16 xl:gap-24">
          {/* ── FORMULARIO ────────────────────────────────────────────────── */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={fadeUp(0, 30)}
          >
            {/* Header del form */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-px w-5 bg-[#A1E233]" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#A1E233]">
                  {t("form.eyebrow")}
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {t("form.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {t("form.description")}
              </p>
            </div>

            {/* Card del form con borde sutil */}
            <div className="relative overflow-hidden rounded-3xl border border-white/6 bg-neutral-950/50 p-6 backdrop-blur-sm md:p-8">
              {/* Línea de acento en el tope */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A1E233]/25 to-transparent" />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 no-autofill"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t("fields.name.label")}>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("fields.name.placeholder")}
                      className={cn(inputClass, "min-h-[52px]")}
                    />
                  </Field>

                  <Field label={t("fields.email.label")}>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("fields.email.placeholder")}
                      className={cn(inputClass, "min-h-[52px]")}
                    />
                  </Field>
                </div>

                <Field label={t("fields.message.label")}>
                  <textarea
                    required
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("fields.message.placeholder")}
                    className={cn(
                      inputClass,
                      "min-h-40 resize-none custom-scrollbar",
                    )}
                  />
                </Field>

                {/* Footer del form */}
                <div className="flex flex-col gap-4 border-t border-white/6 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-white/28 max-w-[28ch]">
                    {t("form.helper")}
                  </p>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }
                    }
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black transition-all duration-300 hover:bg-[#b6f53d] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {/* Shimmer en hover */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

                    <span
                      className={cn(
                        "size-2 shrink-0 rounded-full bg-black/40 transition-all duration-300",
                        loading && "animate-pulse bg-black/60",
                      )}
                    />
                    {loading ? t("form.button_loading") : t("form.button_idle")}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* ── SIDEBAR DERECHA ────────────────────────────────────────────── */}
          <motion.aside
            ref={linksRef}
            initial="hidden"
            animate={isLinksInView ? "visible" : "hidden"}
            variants={fadeUp(0.15, 30)}
            className="flex flex-col gap-8"
          >
            {/* Disponibilidad */}
            <div className="rounded-2xl border border-[#A1E233]/12 bg-[#A1E233]/4 px-5 py-4">
              <div className="mb-1 flex items-center gap-2">
                {/* Dot pulsante */}
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#A1E233]" />
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#A1E233]">
                  {t("availability.label")}
                </span>
              </div>
              <p className="text-sm text-white/50 leading-snug pl-4">
                {t("availability.detail")}
              </p>
            </div>

            {/* Canales de contacto */}
            <div>
              <p className="mb-1 text-[10px] tracking-[0.2em] uppercase text-white/25">
                {t("channels.label")}
              </p>
              <p className="text-base font-semibold text-white">
                {t("channels.title")}
              </p>
            </div>

            {/* Lista de métodos */}
            <div>
              {contactMethods.map((method, i) => (
                <ContactMethod
                  key={method.key}
                  icon={method.icon}
                  label={t(`methods.${method.key}.label`)}
                  value={method.value}
                  href={method.href}
                  external={method.external}
                  index={i}
                />
              ))}
            </div>

            {/* Pie de firma */}
            <div className="mt-auto border-t border-white/6 pt-6">
              <p className="text-[10px] tracking-[0.18em] uppercase text-white/18 leading-relaxed">
                {t("form.footer")}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
