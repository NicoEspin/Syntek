"use client";

import { Plus, X } from "lucide-react";
import TitleSection from "../components/(common)/TitleSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];
const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  return (
    <section className="py-24 px-4 md:px-5 lg:px-24">
      <TitleSection title="FAQS" />
      <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-medium mt-6 max-w-xl mx-auto">
        Preguntas comunes
        <span className="text-primary1"> Respuestas Claras</span>{" "}
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
              <h3 className="font-medium">{faq.question}</h3>
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
