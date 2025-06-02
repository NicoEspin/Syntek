"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef(null);
  const [scope, animate] = useAnimate();

  const t = useTranslations("Footer");
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);
  useEffect(() => {
    if (isHovered) {
      animation.current.speed = 0.5;
    } else {
      animation.current.speed = 1;
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-none gap-12 pr-12 text-6xl md:text-6xl font-medium group"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-primary1 text-6xl">&#10038;</span>
              <span className="group-hover:text-primary1 transition-colors">{t("cta")} <span className="text-primary1 group-hover:text-white transition-colors">Synttek</span></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
