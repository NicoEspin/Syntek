import { PenTool, CodeXml } from "lucide-react";
import { useTranslations } from "next-intl";
import nicoImg from "@/app/assets/nico.webp";
import anttoImg from "@/app/assets/antto.webp";
import Image from "next/image";
import TitleSection from "../components/(common)/TitleSection";

const About = () => {
  // const t = useTranslations("About");
  return (
    <section className="py-24 px-4 md:px-5 lg:px-24 mx-auto">
        <TitleSection title="Sobre Nosotros" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center ">
            Conocé más sobre
            <span className="text-primary1 lg:block">Nosotros</span>
          </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-12">
        <div className="flex flex-col gap-6 items-center max-w-[319px]">
          <div>
            <Image
              src={anttoImg}
              alt="Anttonella Catalano"
              className=" aspect-square size-[319px] "
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-3xl font-semibold">Antonella Catalano</h3>
            <p className="italic text-sm">Diseñadora UX/UI</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              ducimus quas veniam a nemo quam explicabo deserunt ipsa non nisi.
            </p>
            <p className="text-sm text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              ducimus quas veniam a nemo quam explicabo deserunt ipsa non nisi.
            </p>
            <p className="text-sm text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              ducimus quas veniam a nemo quam explicabo deserunt ipsa non nisi.
            </p>
          </div>
          <div className="border-b-2 border-white/10 pb-4 flex justify-center w-full mt-10  ">
            <div className="bg-primary1 group p-3 rounded-md hover:bg-lime-600/20 transition-colors ">
              <PenTool className="size-[30px] text-black group-hover:text-primary1 transition-colors" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-neutral-900 rounded-3xl border-2 border-white/5 min-h-[380px] ">
            <div className="flex flex-col gap-12 items-center p-9  h-full px-4">
              <h3 className="text-4xl font-semibold">titulo</h3>
              <p className=" max-w-md text-lg text-center md:text-start text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                fugit placeat nostrum eos maiores hic. Provident sint mollitia,
                aut accusantium quibusdam nulla, enim quae cum corrupti vero
              </p>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-3xl border-2 border-white/5 min-h-[380px] ">
            <div className="flex flex-col gap-12 items-center p-9  h-full px-4">
              <h3 className="text-4xl font-semibold">titulo</h3>
              <p className=" max-w-md text-lg text-center md:text-start text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                fugit placeat nostrum eos maiores hic. Provident sint mollitia,
                aut accusantium quibusdam nulla, enim quae cum corrupti vero
              </p>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-3xl border-2 border-white/5  min-h-[380px]">
            <div className="flex flex-col gap-12 items-center p-9 h-full px-4">
              <h3 className="text-4xl font-semibold">titulo</h3>
              <p className=" max-w-md text-lg text-center md:text-start text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                fugit placeat nostrum eos maiores hic. Provident sint mollitia,
                aut accusantium quibusdam nulla, enim quae cum corrupti vero
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center max-w-[319px]">
          <div>
            <Image
              src={nicoImg}
              alt="Nicolas Espin"
              className=" aspect-square size-[319px]"
            />
          </div>
         
            <div className="bg-primary1 group p-3 rounded-md hover:bg-lime-600/20 transition-colors ">
              <CodeXml className="size-[30px] text-black group-hover:text-primary1 transition-colors" />
            </div>
         
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-3xl font-semibold">Nicolás Espin</h3>
            <p className="italic text-sm">Frontend Developer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              ducimus quas veniam a nemo quam explicabo deserunt ipsa non nisi.
            </p>
            <p className="text-sm text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              ducimus quas veniam a nemo quam explicabo deserunt ipsa non nisi.
            </p>
            <p className="text-sm text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              ducimus quas veniam a nemo quam explicabo deserunt ipsa non nisi.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
