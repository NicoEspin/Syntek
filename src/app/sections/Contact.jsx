"use client";

import React from "react";
import TitleSection from "@/app/components/(common)/TitleSection";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="py-24 px-4 md:px-5 lg:px-10 xl:px-26">
      <div className="block md:flex justify-center lg:justify-between items-center md:gap-40">
        <div>
          <TitleSection title={t("title-section")} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6">
            {t("title")}
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
                Lorem@gmail.com
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
          <form className="flex flex-col mt-12 no-autofill">
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">
                {t("your-name")}
              </span>
              <input
                required
                type="text"
                name="name"
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
                placeholder={t("message-placeholder")}
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                rounded-lg border-none font-medium mb-4 resize-none custom-scrollbar"
              />
            </label>
            <button
              type="submit"
              className="text-center mt-3 w-[150px] p-2 rounded-full border-2 border-primary1 flex-grow-0 
              cursor-pointer text-black bg-primary1 font-semibold hover:bg-transparent hover:text-primary1 hover:scale-105 transition"
            >
              {t("send-message")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
