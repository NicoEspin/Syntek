"use client";

import React, { useState, useEffect, useRef } from "react";
import DesignImage1 from "@/app/assets/card1.webp";
import DesignImage2 from "@/app/assets/card3.webp";
import Image from "next/image";
import Pointer from "@/app/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  const heroRef = useRef(null);
  const t = useTranslations('Homepage');

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section className="py-24 px-4 overflow-x-clip mb-10" ref={heroRef}>
      <div className="flex flex-col justify-center relative">
        {/* Left Design Image */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          dragConstraints={heroRef}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          className="hidden lg:block absolute -left-32 -top-16"
        >
          <Image
            src={DesignImage1}
            alt="Design Image"
            draggable={false}
            className="w-[310px] h-[439px] rounded-4xl border-2 border-[#A1E233] shadow shadow-[#A1E233]"
          />
        </motion.div>

        {/* Left Pointer */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="hidden lg:block absolute left-64 top-26"
        >
          <Pointer name={"Antto"} color={"bg-pink-500"} />
        </motion.div>

        {/* Right Design Image */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          dragConstraints={heroRef}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          className="hidden lg:block absolute -right-64 -top-30"
        >
          <Image
            src={DesignImage2}
            alt="Design Image"
            draggable={false}
            className="w-[480px] h-[639px] rounded-4xl border-2 border-primary1 shadow shadow-[#A1E233] object-cover"
          />
        </motion.div>

        {/* Right Pointer */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="hidden lg:block absolute right-80 -top-4"
        >
          <Pointer name={"Nico"} color={"bg-blue-500"} />
        </motion.div>

        {/* Text content */}
        <h1 className="text-6xl font-medium text-center mt-6">
          {t('title')}
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 mb-8">
          {t('subtitle')} <span className="text-primary1 font-semibold">Synttek</span>
        </p>
        <button
          className="bg-primary1 text-neutral-950 font-semibold py-3 px-6 rounded-full transition-colors self-center cursor-pointer"
        >
          {t('cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
