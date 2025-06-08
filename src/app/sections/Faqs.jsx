"use client";

import { Plus, X } from "lucide-react";
import TitleSection from "@/app/components/(common)/TitleSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  const t = useTranslations("Faqs");

  const faqs = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      question: t("question5"),
      answer: t("answer5"),
    },
    {
      question: t("question6"),
      answer: t("answer6"),
    },
    {
      question: t("question7"),
      answer: t("answer7"),
    },
  ];

  return (
    <section className="py-24 px-4 md:px-5 lg:px-24">
      <TitleSection title={t("title-section")} />
      <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-medium mt-6 max-w-xl mx-auto">
        {t("title")}
        <span className="text-primary1"> {t("green-title")}</span>
      </h2>
      <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
        {faqs.map((faq, Faqindex) => (
          <div
            key={Faqindex}
            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
          >
            <div
              className="flex justify-between"
              onClick={() => setSelectedIndex(Faqindex)}
            >
              <h3 className="font-medium ">{faq.question}</h3>
              <Plus
                className={`size-6 text-primary1 flex-shrink-0 cursor-pointer transition duration-300 ${
                  selectedIndex !== Faqindex
                    ? ""
                    : "transform rotate-45 flex-shrink-0"
                }`}
              />
            </div>
            <AnimatePresence mode="wait">
              {selectedIndex === Faqindex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 text-white/50">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
