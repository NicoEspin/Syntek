"use client";
import React, { useEffect, useRef, useState } from "react";
import TitleSection from "@/app/components/(common)/TitleSection";
import { useScroll, useTransform, motion } from "framer-motion";

const text =
  "visibilidad, genera confianza y atrae clientes. Además, te ayuda a posicionarte en buscadores, asegurando que tu negocio destaque frente a la competencia. Invertir en una web profesional es clave para el éxito digital.";
const Introduction = () => {
  const scrollTarget = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);

  const words = text.split(" ");
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length]
  );

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (value) => {
      setCurrentWord(Math.floor(value));
    });
    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-28 px-4 md:py-64 lg:px-24  " ref={containerRef}>
      <div className="sticky top-20 md:top-40">
        <TitleSection title="¿Por qué es importante tu propia web?" />
        <div className="mt-10 text-4xl text-center md:text-5xl">
          <span>Tener una página web aumenta tu</span>{" "}
          <span className="text-white/20 transition duration-800">
            {words.map((word, index) => (
              <span
                key={index}
                className={index <= currentWord ? "text-white transition-colors duration-500" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </span>
          <br />
          <span className="text-primary1 ">Por eso confía en Syntek</span>
        </div>
      </div>
      <div ref={scrollTarget} className="h-[150vh]"></div>
    </section>
  );
};

export default Introduction;