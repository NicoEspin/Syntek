"use client";
import { useMemo, useRef } from "react";
import TitleSection from "@/app/components/(common)/TitleSection";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";

const Introduction = () => {
  const t = useTranslations("Introduction");
  const scrollTarget = useRef(null);
  const wordRefs = useRef([]);
  const currentWordRef = useRef(-1);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const text = t("text");
  const words = useMemo(() => text.split(" "), [text]);
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length],
  );

  useMotionValueEvent(wordIndex, "change", (value) => {
    const nextWord = Math.max(-1, Math.min(words.length - 1, Math.floor(value)));
    const previousWord = currentWordRef.current;

    if (nextWord === previousWord) {
      return;
    }

    const start = Math.min(previousWord, nextWord) + 1;
    const end = Math.max(previousWord, nextWord);

    for (let index = start; index <= end; index += 1) {
      const word = wordRefs.current[index];

      if (!word) {
        continue;
      }

      word.classList.toggle("text-white", index <= nextWord);
    }

    currentWordRef.current = nextWord;
  });

  return (
    <section aria-labelledby="introduction-heading" className="px-4 py-28 md:pt-64 lg:px-10 xl:px-24">
      <div className="sticky top-20 md:top-40">
        <TitleSection title={t("title")} />
        <h2 id="introduction-heading" className="sr-only">
          {t("title")}
        </h2>
        <div className="mt-10 text-4xl text-center md:text-5xl">
          <span>{t("white-text")}</span>{" "}
          <span className="text-white/20 transition duration-800">
            {words.map((word, index) => (
              <span
                key={index}
                ref={(node) => {
                  wordRefs.current[index] = node;
                }}
                className="transition-colors duration-500"
              >
                {word}{" "}
              </span>
            ))}
          </span>
          <br />
          <span className="text-primary1 ">{t("cta")}</span>
        </div>
      </div>
      <div ref={scrollTarget} className="h-[150vh]"></div>
    </section>
  );
};

export default Introduction;
