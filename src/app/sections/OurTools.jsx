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
    { name: "Figma",       icon: figmaIcon,      description: t("Figma") },
    { name: "Premiere",    icon: premiereIcon,   description: t("Premiere") },
    { name: "Node.js",     icon: nodejsIcon,     description: t("Nodejs") },
    { name: "Next.js",     icon: nextjsIcon,     description: t("Nextjs") },
    { name: "TailwindCSS", icon: tailwindIcon,   description: t("TailwindCSS") },
    { name: "Photoshop",   icon: photoshopIcon,  description: t("Photoshop") },
    { name: "Ilustrator",  icon: ilustratorIcon, description: t("Ilustrator") },
    { name: "Wordpress",   icon: wordpressIcon,  description: t("Wordpress") },
    { name: "React",       icon: reactIcon,      description: t("React") },
    { name: "GitHub",      icon: githubIcon,     description: t("GitHub") },
  ];

  return (
    <section
      id="tools"
      className="relative overflow-hidden py-24 px-4 md:px-5 lg:px-10 xl:px-24"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">

          {/* ── COLUMNA IZQUIERDA: header ──────────────────────────────────── */}
          <div>
            <TitleSection title={t("title-section")} />

            {/* Headline en dos líneas — mismo patrón editorial */}
            <div className="mt-8">
              <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white">
                {t("title")}
              </h2>
              <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-[#A1E233]">
                {t("green-title")}
              </h2>
            </div>

            <p className="mt-6 text-sm font-light leading-relaxed text-white/40 lg:text-base max-w-sm">
              {t("description")}
            </p>

            {/* Divisor */}
            <div className="mt-8 h-px w-full bg-white/[0.06]" />

    
          </div>

          {/* ── COLUMNA DERECHA: columnas de tech (sin cambios) ────────────── */}
          <div>
            <div
              className="h-[400px] lg:h-[800px] overflow-clip mt-8 grid md:grid-cols-2 gap-4
              [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            >
              <TechColumn Technologies={Technologies} />
              <TechColumn
                reverse
                Technologies={Technologies.slice().reverse()}
                className="hidden md:flex"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurTools;