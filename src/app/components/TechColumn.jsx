"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

const TechColumn = ({ Technologies, className, reverse }) => {
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`flex flex-col gap-4 pb-4 ${className}`}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {Technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-neutral-900 border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="size-24"
                />
              </div>
              <h3 className="text-3xl text-center mt-6 font-medium">
                {tech.name}
              </h3>
              <p className="text-center text-white/50 mt-2">
                {tech.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default TechColumn;
