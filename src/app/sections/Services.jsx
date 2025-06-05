import img from "@/app/assets/3D.webp";
import Image from "next/image";
import TitleSection from "@/app/components/(common)/TitleSection";
import { useTranslations } from "next-intl";
import { GlowingEffect } from "../components/GlowingEffect";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section className="py-24 px-4 md:px-5 lg:px-10 xl:px-24 mx-auto">
      <TitleSection title={t("title-section")} />
      <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-medium mt-6 max-w-xl mx-auto">
        {t("title")}
        <span className="text-primary1 block">{t("green-title")}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* TARJETA PRINCIPAL */}
        <div
          className="bg-neutral-900 relative rounded-3xl border-2 border-white/5 min-h-[400px]
                       md:col-span-2
                       lg:col-span-2 lg:row-span-4 lg:col-start-2 lg:row-start-1"
        >
            <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.02}
            borderWidth={2}
          />
          <div className="flex justify-center">
           
            <Image
              className="absolute rounded-full size-[297px]  bottom-[-150px] bg-[#0A0A0A] z-10 "
              src={img}
              alt="img"
              
            />
          </div>
          <h2 className="text-primary1 text-center pt-9 text-4xl">
            {t("subtitle")}
          </h2>
        </div>

        {/* UX/UI */}
        <div
          className="bg-neutral-900 rounded-3xl border-2 border-white/5 min-h-[400px] relative 
           md:col-span-2
           lg:col-span-2 lg:row-span-4 lg:col-start-2 lg:row-start-5"
        >
            <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.02}
            borderWidth={2}
          />
          <div className="flex flex-col gap-12 items-center pt-[190px] pb-10 h-full px-4">
            <h3 className="text-4xl font-semibold">{t("uxui")}</h3>
            <p className=" max-w-md text-lg text-center md:text-start text-white/50">
              {t("uxui-description")}
            </p>
          </div>
        </div>

        {/* Desarrollo Web */}
        <div
          className="bg-neutral-900 p-9 min-h-[400px] rounded-3xl relative border-2 border-white/5
             md:col-start-1 md:row-start-3
             lg:row-span-4 lg:col-start-1 lg:row-start-1 "
        >
            <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.02}
            borderWidth={2}
          />
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              {t("web-development")}
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              {t("web-development-description")}
            </p>
          </div>
        </div>

        {/* Branding */}
        <div
          className="bg-neutral-900 p-9 relative min-h-[400px] rounded-3xl border-2 border-white/5
               md:col-start-1 md:row-start-4
               lg:row-span-4 lg:col-start-1 lg:row-start-5  "
        >
            <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.02}
            borderWidth={2}
          />
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              {t("branding")}
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              {t("branding-description")}
            </p>
          </div>
        </div>

        {/* Ecommerce */}
        <div
          className="bg-neutral-900 relative p-9 min-h-[400px] rounded-3xl border-2 border-white/5 
            md:col-start-2 md:row-start-3
            lg:row-span-4 lg:col-start-4 lg:row-start-1  "
        >
            <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.02}
            borderWidth={2}
          />
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              {t("ecommerce")}
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              {t("ecommerce-description")}
            </p>
          </div>
        </div>

        {/* Diseño Gráfico */}
        <div
          className="bg-neutral-900 p-9 min-h-[400px] rounded-3xl border-2 border-white/5 relative
                  md:col-start-2 md:row-start-4
                 lg:row-span-4 lg:col-start-4 lg:row-start-5"
        >
            <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.02}
            borderWidth={2}
          />
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              {t("graphic-design")}
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              {t("graphic-design-description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
