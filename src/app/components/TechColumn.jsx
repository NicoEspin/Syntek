import Image from "next/image";
import { Fragment } from "react";

const TechColumn = ({ Technologies, className, reverse }) => {
  return (
    <div
      style={{
        animation: `${reverse ? "synttek-tech-column-reverse" : "synttek-tech-column"} 16s linear infinite`,
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
    </div>
  );
};

export default TechColumn;
