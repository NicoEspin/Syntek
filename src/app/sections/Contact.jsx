"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import TitleSection from "@/app/components/(common)/TitleSection";
import SpotlightCard from "@/app/components/SpotlightCard";
import {
  getFadeUp,
  getStaggerChildren,
  subtleEase,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "synttek@gmail.com";
const CONTACT_PHONE = "+54 3541560518";
const INSTAGRAM_URL = "https://www.instagram.com/";
const LINKEDIN_URL = "https://www.linkedin.com/";

const Contact = () => {
  const t = useTranslations("Contact");
  const shouldReduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const sectionVariants = useMemo(
    () =>
      getStaggerChildren(shouldReduceMotion, {
        delayChildren: 0.08,
        staggerChildren: 0.12,
      }),
    [shouldReduceMotion]
  );

  const leftColumnVariants = useMemo(
    () =>
      getFadeUp(shouldReduceMotion, {
        distance: 34,
        duration: 0.85,
        scale: 0.99,
      }),
    [shouldReduceMotion]
  );

  const rightColumnVariants = useMemo(
    () =>
      getFadeUp(shouldReduceMotion, {
        distance: 38,
        duration: 0.9,
        scale: 0.99,
      }),
    [shouldReduceMotion]
  );

  const cardsVariants = useMemo(
    () =>
      getStaggerChildren(shouldReduceMotion, {
        delayChildren: 0.1,
        staggerChildren: 0.08,
      }),
    [shouldReduceMotion]
  );

  const cardRevealVariants = useMemo(
    () =>
      getFadeUp(shouldReduceMotion, {
        distance: 20,
        duration: 0.7,
        scale: 0.995,
      }),
    [shouldReduceMotion]
  );

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
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(t("config_error"));
      return;
    }

    setLoading(true);

    const sendPromise = emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: "Synttek",
        from_email: form.email,
        to_email: CONTACT_EMAIL,
        message: form.message,
      },
      publicKey
    );

    toast.promise(sendPromise, {
      pending: t("sending_message"),
      success: t("success_message"),
      error: t("error_message"),
    });

    sendPromise
      .then(() => {
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
        progressClassName={() => "!bg-primary1"}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-56 w-56 rounded-full bg-primary1/8 blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-8%] h-72 w-72 rounded-full bg-primary1/6 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl">
        <TitleSection title={t("title-section")} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={sectionVariants}
          className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-stretch"
        >
          <motion.div
            variants={leftColumnVariants}
            className="flex h-full flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-primary1/72">
                  {t("eyebrow")}
                </p>

                <h2 className="max-w-2xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                  {t("title")}{" "}
                  <span className="text-primary1">{t("green-title")}</span>
                </h2>

                <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                  {t("description")}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/58">
                    {t("availability.label")}
                  </span>
                  <span className="text-sm text-white/42">
                    {t("availability.detail")}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/34">
                    {t("channels.label")}
                  </p>
                  <p className="text-xl font-semibold text-white md:text-2xl">
                    {t("channels.title")}
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              variants={cardsVariants}
              className="grid gap-3 sm:grid-cols-2"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <motion.div
                    key={method.key}
                    variants={cardRevealVariants}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    transition={{
                      duration: 0.3,
                      ease: subtleEase,
                      delay: shouldReduceMotion ? 0 : index * 0.02,
                    }}
                  >
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noreferrer" : undefined}
                      aria-label={t(`methods.${method.key}.ariaLabel`)}
                      className="group block h-full"
                    >
                      <div className="flex h-full min-h-[126px] flex-col justify-between rounded-[24px] border border-white/8 bg-[#0b0b0b] p-5 transition-all duration-300 hover:border-primary1/20 hover:bg-[#0d0d0d]">
                        <div className="flex items-start justify-between gap-4">
                          <span className="flex size-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] transition-colors duration-300 group-hover:border-primary1/25 group-hover:bg-primary1/10">
                            <Icon className="size-[18px] text-primary1" />
                          </span>

                          <span className="text-white/22 transition-colors duration-300 group-hover:text-primary1">
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-white/34">
                            {t(`methods.${method.key}.label`)}
                          </p>
                          <p className="truncate text-sm font-medium text-white/78 md:text-base">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={rightColumnVariants}>
            <SpotlightCard
              spotlightColor="rgba(161, 226, 51, 0.08)"
              className="border-white/8 bg-[#0a0a0a] p-0"
            >
              <div className="relative overflow-hidden rounded-[32px] p-6 md:p-8 lg:p-10">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary1/35 to-transparent" />

                <div className="relative max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary1/72">
                    {t("form.eyebrow")}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                    {t("form.title")}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/58 md:text-[15px]">
                    {t("form.description")}
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 flex flex-col gap-5 no-autofill"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="flex flex-col gap-3">
                      <span className="text-sm font-medium text-white/78">
                        {t("fields.name.label")}
                      </span>
                      <input
                        required
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t("fields.name.placeholder")}
                        className={cn(
                          "min-h-14 rounded-2xl border border-white/8 bg-neutral-950 px-5 py-4 text-white outline-none transition duration-300",
                          "placeholder:text-white/28 focus:border-primary1/30 focus:bg-black focus:ring-2 focus:ring-primary1/12"
                        )}
                      />
                    </label>

                    <label className="flex flex-col gap-3">
                      <span className="text-sm font-medium text-white/78">
                        {t("fields.email.label")}
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t("fields.email.placeholder")}
                        className={cn(
                          "min-h-14 rounded-2xl border border-white/8 bg-neutral-950 px-5 py-4 text-white outline-none transition duration-300",
                          "placeholder:text-white/28 focus:border-primary1/30 focus:bg-black focus:ring-2 focus:ring-primary1/12"
                        )}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-medium text-white/78">
                      {t("fields.message.label")}
                    </span>
                    <textarea
                      required
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t("fields.message.placeholder")}
                      className={cn(
                        "min-h-44 rounded-2xl border border-white/8 bg-neutral-950 px-5 py-4 text-white outline-none transition duration-300",
                        "resize-none placeholder:text-white/28 focus:border-primary1/30 focus:bg-black focus:ring-2 focus:ring-primary1/12 custom-scrollbar"
                      )}
                    />
                  </label>

                  <div className="flex flex-col gap-5 border-t border-white/8 pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-sm space-y-2">
                      <p className="text-sm leading-relaxed text-white/48">
                        {t("form.helper")}
                      </p>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/26">
                        {t("form.footer")}
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-primary1 bg-primary1 px-6 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-primary1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      <span
                        className={cn(
                          "size-2 rounded-full bg-black transition-opacity",
                          loading && "animate-pulse"
                        )}
                      />
                      {loading
                        ? t("form.button_loading")
                        : t("form.button_idle")}
                    </button>
                  </div>
                </form>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;