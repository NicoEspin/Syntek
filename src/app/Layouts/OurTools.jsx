import figmaIcon from "@/app/assets/logos/figma-logo.svg";
import githubIcon from "@/app/assets/logos/github-logo.svg";
import reactIcon from "@/app/assets/logos/react.svg";
import nodejsIcon from "@/app/assets/logos/nodejs.svg";
import nextjsIcon from "@/app/assets/logos/nextjs.svg";
import photoshopIcon from "@/app/assets/logos/photoshop.svg";
import premiereIcon from "@/app/assets/logos/premiere.svg";
import tailwindIcon from "@/app/assets/logos/tailwind.svg";
import ilustratorIcon from "@/app/assets/logos/ilustrator.svg";
import wordpressIcon from "@/app/assets/logos/wordpress.svg";

import TitleSection from "../components/(common)/TitleSection";
import TechColumn from "../components/TechColumn";

const Technologies = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Premiere",
    icon: premiereIcon,
    description: "Adobe Premiere is a video editing software.",
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
    description: "Node.js is a JavaScript runtime environment.",
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
    description:
      "Next.js is a React framework for building server-side rendered applications.",
  },
  {
    name: "TailwindCSS",
    icon: tailwindIcon,
    description: "TailwindCSS is a utility-first CSS framework.",
  },
  {
    name: "Photoshop",
    icon: photoshopIcon,
    description: "Photoshop is a popular digital image editing software.",
  },
  {
    name: "Ilustrator",
    icon: ilustratorIcon,
    description: "Adobe Illustrator is a vector graphics software.",
  },
  {
    name: "Wordpress",
    icon: wordpressIcon,
    description:
      "Wordpress is a free and open-source content management system.",
  },
  {
    name: "React",
    icon: reactIcon,
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

const OurTools = () => {
  return (
    <section className="py-24 overflow-hidden px-4 md:px-5 lg:px-24">
      <div className="">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <TitleSection title="Nuestras Herramientas" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6">
              Trabajamos con las mejores tecnologías del{" "}
              <span className="text-primary1">Mercado</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              En Syntek, usamos herramientas líderes para garantizar calidad,
              innovación y rendimiento óptimo. En un mundo digital en constante
              evolución, tener tu propio sitio web no es un lujo, es una
              necesidad.
            </p>
          </div>
          <div>
            <div
              className="h-[400px] lg:h-[800px] overflow-clip mt-8 grid md:grid-cols-2 gap-4
         [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            >
              <TechColumn Technologies={Technologies} />
              <TechColumn
                reverse
                Technologies={Technologies.slice().reverse()}
                className={"hidden md:flex"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTools;
