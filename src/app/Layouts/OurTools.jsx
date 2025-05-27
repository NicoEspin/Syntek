import figmaIcon from "@/app/assets/logos/figma-logo.svg";
import notionIcon from "@/app/assets/logos/notion-logo.svg";
import slackIcon from "@/app/assets/logos/slack-logo.svg";
import relumeIcon from "@/app/assets/logos/relume-logo.svg";
import framerIcon from "@/app/assets/logos/framer-logo.svg";
import githubIcon from "@/app/assets/logos/github-logo.svg";

import TitleSection from "../components/(common)/TitleSection";
import TechColumn from "../components/TechColumn";

const Technologies = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
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
