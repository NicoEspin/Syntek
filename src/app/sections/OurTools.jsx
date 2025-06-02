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

import TitleSection from "@/app/components/(common)/TitleSection";
import TechColumn from "@/app/components/TechColumn";
import { useTranslations } from "next-intl";

const OurTools = () => {
  const t = useTranslations("Tools");

  const Technologies = [
    {
      name: "Figma",
      icon: figmaIcon,
      description: t("Figma"),
    },
    {
      name: "Premiere",
      icon: premiereIcon,
      description: t("Premiere"),
    },
    {
      name: "Node.js",
      icon: nodejsIcon,
      description: t("Nodejs"),
    },
    {
      name: "Next.js",
      icon: nextjsIcon,
      description: t("Nextjs"),
    },
    {
      name: "TailwindCSS",
      icon: tailwindIcon,
      description: t("TailwindCSS"),
    },
    {
      name: "Photoshop",
      icon: photoshopIcon,
      description: t("Photoshop"),
    },
    {
      name: "Ilustrator",
      icon: ilustratorIcon,
      description: t("Ilustrator"),
    },
    {
      name: "Wordpress",
      icon: wordpressIcon,
      description: t("Wordpress"),
    },
    {
      name: "React",
      icon: reactIcon,
      description: t("React"),
    },
    {
      name: "GitHub",
      icon: githubIcon,
      description: t("GitHub"),
    },
  ];

  return (
    <section className="py-24 overflow-hidden px-4 md:px-5 lg:px-24">
      <div className="">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <TitleSection title={t("title-section")} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6">
              {t("title")} <span className="text-primary1">{t("green-title")}</span>
            </h2>
            <p className="text-white/50 mt-4 lg:text-lg">{t("description")}</p>
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
