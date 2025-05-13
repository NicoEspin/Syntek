"use client";
import React, { useState, useEffect, useRef } from "react";
import DesignImage1 from "@/app/assets/design-example-1.png";
import DesignImage2 from "@/app/assets/design-example-2.png";
import Image from "next/image";
import Pointer from "@/app/components/Pointer";
import { motion, useAnimate } from "framer-motion";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const section = heroRef.current;
    section?.addEventListener("mousemove", handleMouseMove);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroRef = useRef(null);

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
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="py-24 px-4 h-screen overflow-x-clip "
      style={{ crusor: `url(${Pointer.src}), auto` }}
      ref={heroRef}
    >
      <div
        className="pointer-events-none fixed z-50 hidden lg:block"
        style={{
          top: cursorPos.y,
          left: cursorPos.x,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Pointer name="tú" color="bg-green-400" />
      </div>
      <div className="  flex flex-col justify-center relative cursor-none">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          dragConstraints={heroRef}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          className="hidden lg:block absolute -left-32 -top-16"
        >
          <Image src={DesignImage1} alt="Design Image" draggable={false} />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="hidden lg:block absolute left-64 top-26"
        >
          <Pointer name={"Antto"} color={"bg-pink-500"} />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          dragConstraints={heroRef}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          className="hidden lg:block absolute -right-64 -top-30 "
        >
          <Image src={DesignImage2} alt="Design Image" draggable={false} />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="hidden lg:block absolute right-80 -top-4"
        >
          <Pointer name={"Nico"} color={"bg-blue-500"} />
        </motion.div>
        <div className="flex justify-center ">
          <div
            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400
            rounded-full text-neutral-950 font-semibold"
          >
            {" "}
            🚀 +100 Clientes Satisfechos
          </div>
        </div>
        <h1 className="text-6xl font-medium text-center mt-6">
          Desarrollo de Aplicaciones Web
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 mb-8">
          Diseña tu sitio Web y desperta el poder de tu marca con{" "}
          <span className="font-semibold text-[#A1E233]">Syntek</span>
        </p>
        <button
          className="bg-[#A1E233] text-neutral-950 font-semibold py-2 px-4 rounded-full
         transition-colors self-center cursor-pointer "
        >
          Contactanos
        </button>
      </div>
    </section>
  );
};

export default Hero;
