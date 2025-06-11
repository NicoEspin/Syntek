"use client";

import React, { useEffect, useRef, useState } from "react";
import TitleSection from "@/app/components/(common)/TitleSection";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);
  const formRef = useRef();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const sendPromise = emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Synttek",
        from_email: form.email,
        to_email: "synttek@gmail.com",
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
    <section className="py-24 px-4 md:px-5 lg:px-10 xl:px-26" id="contact">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      
      />
      <div className="block md:flex justify-center lg:justify-between items-center md:gap-40">
        <div>
          <TitleSection title={t("title-section")} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6">
            {t("title")}{" "}
            <span className="text-primary1 lg:block">{t("green-title")}</span>
          </h2>
          <p className="text-white/50 mt-4 lg:text-lg md:max-w-[400px] lg:max-w-md">
            {t("description")}
          </p>
          <div className="flex flex-col gap-6 mt-6 w-fit">
            <div className="flex gap-4 items-center group">
              <div className="bg-primary1 p-3 rounded-md group-hover:bg-lime-600/20 transition-colors">
                <Phone className="size-[30px] text-black group-hover:text-primary1 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-white/50 transition-colors">
                +54 9 11 2345-6789
              </h3>
            </div>
            <div className="flex gap-4 items-center group">
              <div className="bg-primary1 p-3 rounded-md group-hover:bg-lime-600/20 transition-colors group-hover:shadow-lime-600/20">
                <Mail className="size-[30px] text-black group-hover:text-primary1 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-white/50 transition-colors">
                synttek@gmail.com
              </h3>
            </div>
            <div className="flex gap-4 items-center group">
              <div className="bg-primary1 p-3 rounded-md group-hover:bg-lime-600/20 transition-colors">
                <Instagram className="size-[30px] text-black group-hover:text-primary1 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-white/50 transition-colors">
                Lorem@Ipsum
              </h3>
            </div>
            <div className="flex gap-4 items-center group">
              <div className="bg-primary1 p-3 rounded-md group-hover:bg-lime-600/20 transition-colors">
                <Linkedin className="size-[30px] text-black group-hover:text-primary1 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-white/50 transition-colors">
                LoremIpsum
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-12 rounded-3xl border border-white/5 mt-6 md:mt-0">
          <h3 className="text-3xl md:text-4xl font-semibold text-white/80 text-center">
            {t("form-title")}
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 no-autofill"
          >
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">
                {t("your-name")}
              </span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("name-placeholder")}
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                rounded-lg border-none font-medium mb-4"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">
                {t("your-email")}
              </span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("email-placeholder")}
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                rounded-lg border-none font-medium mb-4"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">
                {t("your-message")}
              </span>
              <textarea
                required
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("message-placeholder")}
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                rounded-lg border-none font-medium mb-4 resize-none custom-scrollbar"
              />
            </label>
            <button
              type="submit"
              className="text-center mt-3  p-2 rounded-full border-2 border-primary1 flex-grow-0 
              cursor-pointer text-black bg-primary1 font-semibold hover:bg-transparent hover:text-primary1 hover:scale-105 transition w-fit"
            >
              {loading ? t("sending_message") : t("send_message")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
