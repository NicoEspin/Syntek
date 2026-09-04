"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Globe,
  HelpCircle,
  Mail,
  ShoppingBag,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import TitleSection from "@/app/components/(common)/TitleSection";
import { InstagramIcon, LinkedinIcon } from "@/app/components/icons/SocialIcons";
import { cn } from "@/lib/utils";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  getWhatsAppUrl,
} from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

// ─── Variantes de animación ───────────────────────────────────────────────────
const fadeUp = (delay = 0, distance = 40) => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease } },
});

const lineReveal = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, delay, ease } },
});

const GOAL_ICONS = [Globe, ShoppingBag, Zap, Wrench, Sparkles, HelpCircle];

// ─── Ícono de WhatsApp (marca, sin librería) ───────────────────────────────────
function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Canal de contacto (sidebar) ───────────────────────────────────────────────
function ChannelCard({ icon: Icon, label, value, href, external, index, variant = "ghost" }) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index, ease }}
      className={cn(
        "group flex items-center gap-4 rounded-2xl transition-all duration-300",
        isPrimary
          ? "bg-accent/[0.06] px-4 py-3.5 ring-1 ring-accent/15 hover:ring-accent/30"
          : "px-1 py-2 hover:translate-x-0.5",
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
          isPrimary
            ? "bg-accent text-on-accent"
            : "border border-white/8 bg-white/[0.03] text-white/40 group-hover:border-accent/25 group-hover:text-accent",
        )}
      >
        <Icon className="size-[18px]" />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/28">{label}</span>
        <span className="truncate text-sm font-medium text-white/78">{value}</span>
      </span>
      <ArrowUpRight className="ml-auto size-4 shrink-0 text-white/18 transition-colors duration-300 group-hover:text-accent" />
    </motion.a>
  );
}

// ─── Input custom ─────────────────────────────────────────────────────────────
function Field({ label, children, className }) {
  return (
    <label className={cn("group flex flex-col gap-2.5", className)}>
      <span className="text-[10px] tracking-[0.22em] uppercase text-white/35 transition-colors duration-300 group-focus-within:text-accent/70">
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
  "focus:border-accent/25 focus:bg-black focus:ring-2 focus:ring-accent/8",
);

// ─── Card de objetivo (paso 1) ─────────────────────────────────────────────────
function GoalCard({ icon: Icon, title, desc, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative flex min-h-[44px] flex-col gap-3 rounded-2xl border p-5 text-left transition-all duration-300",
        selected
          ? "border-accent/50 bg-accent/8"
          : "border-white/8 bg-white/[0.02] hover:border-white/15",
      )}
    >
      <Icon
        className={cn(
          "size-5 transition-colors duration-300",
          selected ? "text-accent" : "text-white/50",
        )}
      />
      <span className="flex flex-col gap-1.5 pr-6">
        <span
          className={cn(
            "text-sm font-semibold leading-snug transition-colors duration-300",
            selected ? "text-accent" : "text-white",
          )}
        >
          {title}
        </span>
        <span className="text-xs font-light leading-relaxed text-white/40">{desc}</span>
      </span>
      <span
        className={cn(
          "absolute right-4 top-4 flex size-5 items-center justify-center rounded-full border transition-all duration-300",
          selected ? "border-accent bg-accent opacity-100" : "border-white/15 opacity-0",
        )}
      >
        <Check className="size-3 text-on-accent" strokeWidth={3} />
      </span>
    </button>
  );
}

// ─── Indicador de pasos ─────────────────────────────────────────────────────────
function StepIndicator({ steps, current }) {
  return (
    <div className="flex items-center gap-2.5">
      {steps.map((label, i) => (
        <div
          key={label}
          className={cn("flex items-center gap-2.5", i < steps.length - 1 && "flex-1")}
        >
          <div className="flex shrink-0 items-center gap-2.5">
            <span
              className={cn(
                "flex size-6 items-center justify-center rounded-full border font-mono text-[11px] transition-colors duration-300",
                i === current
                  ? "border-accent bg-accent text-on-accent"
                  : i < current
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : "border-white/15 bg-transparent text-white/28",
              )}
            >
              {i < current ? <Check className="size-3" strokeWidth={3} /> : i + 1}
            </span>
            <span
              className={cn(
                "hidden text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 sm:inline",
                i === current ? "text-white" : "text-white/28",
              )}
            >
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              className={cn(
                "h-px flex-1 transition-colors duration-500",
                i < current ? "bg-accent/30" : "bg-white/8",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
const Contact = () => {
  const t = useTranslations("Contact");
  const shouldReduceMotion = useReducedMotion();

  const goals = useMemo(() => t.raw("form.goals"), [t]);
  const stepLabels = useMemo(() => t.raw("form.steps"), [t]);

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [ToastContainerComponent, setToastContainerComponent] = useState(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-5%" });

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-8%" });

  const linksRef = useRef(null);
  const isLinksInView = useInView(linksRef, { once: true, margin: "-10%" });

  const emailJsRef = useRef(null);
  const toastRef = useRef(null);
  const emailJsPromiseRef = useRef(null);
  const toastPromiseRef = useRef(null);
  const emailJsInitializedRef = useRef(false);

  const selectedGoalTitle = selectedGoal !== null ? goals[selectedGoal].title : "";

  const handleChange = ({ target: { name, value } }) => {
    setForm((c) => ({ ...c, [name]: value }));
  };

  const ensureToastify = useCallback(async () => {
    if (toastRef.current) {
      return toastRef.current;
    }

    if (!toastPromiseRef.current) {
      toastPromiseRef.current = import("react-toastify").then((module) => {
        toastRef.current = module.toast;
        setToastContainerComponent(() => module.ToastContainer);
        return module.toast;
      });
    }

    return toastPromiseRef.current;
  }, []);

  const ensureEmailJs = useCallback(async () => {
    if (emailJsRef.current) {
      return emailJsRef.current;
    }

    if (!emailJsPromiseRef.current) {
      emailJsPromiseRef.current = import("@emailjs/browser").then((module) => {
        emailJsRef.current = module.default;

        if (
          !emailJsInitializedRef.current &&
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ) {
          emailJsRef.current.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
          emailJsInitializedRef.current = true;
        }

        return emailJsRef.current;
      });
    }

    return emailJsPromiseRef.current;
  }, []);

  const warmUpContactLibs = useCallback(() => {
    void ensureToastify();

    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      void ensureEmailJs();
    }
  }, [ensureEmailJs, ensureToastify]);

  const canContinueStep1 = selectedGoal !== null;
  const canContinueStep2 = form.name.trim().length > 0 && form.phone.trim().length > 0;

  const goToStep = (next) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleNext = () => {
    if (step === 0 && !canContinueStep1) return;
    if (step === 1 && !canContinueStep2) return;
    goToStep(Math.min(2, step + 1));
  };

  const handleBack = () => goToStep(Math.max(0, step - 1));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step < 2) {
      handleNext();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const toast = await ensureToastify();

    if (!serviceId || !templateId || !publicKey) {
      toast.error(t("config_error"));
      return;
    }

    const emailjs = await ensureEmailJs();

    setLoading(true);
    const send = emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: "Synttek",
        phone: form.phone,
        goal: selectedGoalTitle,
        to_email: BUSINESS_EMAIL,
        message: form.message.trim() || "-",
      },
      publicKey,
    );

    toast.promise(send, {
      pending: t("sending_message"),
      success: t("success_message"),
      error: t("error_message"),
    });

    send
      .then(() => {
        setForm({ name: "", phone: "", message: "" });
        setSelectedGoal(null);
        setDirection(-1);
        setStep(0);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const whatsappHref = getWhatsAppUrl(
    selectedGoalTitle
      ? `Hola! Te escribo por: ${selectedGoalTitle}`
      : "Hola! Quiero más info sobre Synttek.",
  );

  const channels = [
    {
      key: "whatsapp",
      icon: WhatsAppIcon,
      href: whatsappHref,
      value: BUSINESS_PHONE_DISPLAY,
      external: true,
      variant: "primary",
    },
    {
      key: "email",
      icon: Mail,
      href: `mailto:${BUSINESS_EMAIL}`,
      value: BUSINESS_EMAIL,
      external: false,
      variant: "ghost",
    },
  ];

  const socials = [
    { key: "instagram", icon: InstagramIcon, href: INSTAGRAM_URL },
    { key: "linkedin", icon: LinkedinIcon, href: LINKEDIN_URL },
  ];

  const stepFootnote =
    step === 0
      ? t("form.step1.footnote")
      : step === 1
        ? t("form.step2.footnote")
        : t("form.step3.footnote");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      {ToastContainerComponent ? (
        <ToastContainerComponent
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          pauseOnHover
          toastClassName={() =>
            "rounded-2xl border border-white/10 bg-neutral-950 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          }
          bodyClassName={() => "text-sm font-medium text-white/88"}
          progressClassName={() => "!bg-accent"}
        />
      ) : null}

      {/* Fondos atmosféricos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-5%] top-[10%] h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 left-[-5%] h-64 w-64 rounded-full bg-accent/4 blur-[80px]" />
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
              className="block text-[clamp(5rem,18vw,18rem)] font-black leading-none tracking-tighter text-accent/[0.04] select-none"
            >
              {t("headline-hola")}
            </motion.span>
          </div>

          {/* Headline principal encima del número */}
          <div className="-mt-[clamp(3.5rem,12vw,13rem)]">
            <div className="overflow-hidden">
              <motion.h2
                id="contact-heading"
                initial={{ y: "110%" }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.12, ease }}
                className="text-[clamp(2rem,5.5vw,5.5rem)] font-black leading-display tracking-display text-white"
              >
                <span className="block">{t("headline-line1")}</span>{" "}
                <span className="block text-accent">{t("headline-line2")}</span>
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
          {/* ── FORMULARIO EN PASOS ───────────────────────────────────────── */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={fadeUp(0, 30)}
          >
            <div className="mb-8">
              <StepIndicator steps={stepLabels} current={step} />
            </div>

            {/* Card del form: shell exterior + core interior (doble bisel) */}
            <div className="relative rounded-[2rem] bg-white/[0.02] p-1.5 ring-1 ring-white/6">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-neutral-950/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8">
              {/* Línea de acento en el tope */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

              <form
                onSubmit={handleSubmit}
                onFocusCapture={warmUpContactLibs}
                onPointerEnter={warmUpContactLibs}
                className="no-autofill"
              >
                <motion.div
                  key={step}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction * 24 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease }}
                  className="flex flex-col gap-6"
                >
                    {step === 0 && (
                      <>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            {t("form.step1.title")}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/40">
                            {t("form.step1.subtitle")}
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {goals.map((g, i) => (
                            <GoalCard
                              key={g.title}
                              icon={GOAL_ICONS[i]}
                              title={g.title}
                              desc={g.desc}
                              selected={selectedGoal === i}
                              onSelect={() => setSelectedGoal(i)}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {step === 1 && (
                      <>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            {t("form.step2.title")}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/40">
                            {t("form.step2.subtitle")}
                          </p>
                        </div>

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

                          <Field label={t("fields.phone.label")}>
                            <input
                              required
                              type="tel"
                              name="phone"
                              inputMode="tel"
                              autoComplete="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder={t("fields.phone.placeholder")}
                              className={cn(inputClass, "min-h-[52px]")}
                            />
                          </Field>
                        </div>

                        <Field label={t("fields.message.label")}>
                          <textarea
                            rows={4}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder={t("fields.message.placeholder")}
                            className={cn(inputClass, "min-h-32 resize-none custom-scrollbar")}
                          />
                        </Field>

                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/28">
                            {t("form.step2.goalTag")}
                          </span>
                          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1.5 text-xs text-accent">
                            {selectedGoalTitle}
                          </span>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            {t("form.step3.title")}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/40">
                            {t("form.step3.subtitle")}
                          </p>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-white/6 bg-white/[0.02] p-5">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/28">
                            {t("form.step3.summaryLabel")}
                          </span>
                          <p className="text-base font-light leading-relaxed text-white">
                            {t("form.step3.summary", { goal: selectedGoalTitle })}
                          </p>
                          <div className="grid gap-2 border-t border-white/6 pt-4 text-sm text-white/50 sm:grid-cols-2">
                            <span>
                              <span className="text-white/28">{t("fields.name.label")}:</span>{" "}
                              {form.name}
                            </span>
                            <span>
                              <span className="text-white/28">{t("fields.phone.label")}:</span>{" "}
                              {form.phone}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                </motion.div>

                {/* Footer del form */}
                <div className="mt-6 flex flex-col gap-4 border-t border-white/6 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[30ch] text-xs leading-relaxed text-white/28">
                    {stepFootnote}
                  </p>

                  <div className="flex shrink-0 items-center gap-3">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/60 transition-colors duration-300 hover:border-white/20 hover:text-white"
                      >
                        {t("form.back")}
                      </button>
                    )}

                    {step < 2 ? (
                      <motion.button
                        type="button"
                        onClick={handleNext}
                        disabled={step === 0 ? !canContinueStep1 : !canContinueStep2}
                        whileHover={
                          shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }
                        }
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        transition={{ duration: 0.2, ease }}
                        className="group relative inline-flex min-h-[48px] shrink-0 items-center gap-3 overflow-hidden rounded-full bg-accent px-7 text-sm font-bold tracking-wide text-on-accent transition-all duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                        {t("form.continue")}
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={
                          shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }
                        }
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        transition={{ duration: 0.2, ease }}
                        className="group relative inline-flex min-h-[48px] shrink-0 items-center gap-3 overflow-hidden rounded-full bg-accent px-7 text-sm font-bold tracking-wide text-on-accent transition-all duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                        <span
                          className={cn(
                            "size-2 shrink-0 rounded-full bg-black/40 transition-all duration-300",
                            loading && "animate-pulse bg-black/60",
                          )}
                        />
                        {loading ? t("form.button_loading") : t("form.button_idle")}
                      </motion.button>
                    )}
                  </div>
                </div>
              </form>
              </div>
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
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-accent">
                  {t("availability.label")}
                </span>
              </div>
              <p className="pl-3.5 text-sm leading-snug text-white/50">
                {t("availability.detail")}
              </p>
            </div>

            {/* Canales de contacto */}
            <div>
              <p className="text-base font-semibold text-white">{t("channels.title")}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {t("channels.description")}
              </p>
            </div>

            {/* Canales prioritarios */}
            <div className="flex flex-col gap-3">
              {channels.map((c, i) => (
                <ChannelCard
                  key={c.key}
                  icon={c.icon}
                  label={t(`methods.${c.key}.label`)}
                  value={c.value}
                  href={c.href}
                  external={c.external}
                  index={i}
                  variant={c.variant}
                />
              ))}
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t(`methods.${s.key}.ariaLabel`)}
                  className="flex size-11 items-center justify-center rounded-full border border-white/8 text-white/50 transition-colors duration-300 hover:border-accent/25 hover:text-accent"
                >
                  <s.icon className="size-4" />
                </a>
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
