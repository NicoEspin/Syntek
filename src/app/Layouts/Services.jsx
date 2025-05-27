import img from "@/app/assets/3D.webp";
import Image from "next/image";
import TitleSection from "../components/(common)/TitleSection";

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-5 lg:px-24 mx-auto">
      <TitleSection title="Servicios" />
      <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-medium mt-6 max-w-xl mx-auto ">
        Nuestros servicios
        <span className="text-primary1"> para ti</span>{" "}
      </h2>

      <div className="grid grid-cols-4 grid-rows-9 gap-7 h-fit ">
        <div className="row-span-4 min-h-[396px] bg-neutral-900">1</div>
        <div className="col-span-2 row-span-4 bg-neutral-900">2</div>
        <div className="col-span-2 col-start-2 row-start-5 bg-neutral-900">
          3
        </div>
        <div className="row-span-4 col-start-4 row-start-1 bg-neutral-900">
          4
        </div>
        <div className="col-span-2 row-span-3 col-start-2 row-start-6 bg-neutral-900">
          6
        </div>
        <div className="row-span-4 col-start-1 row-start-5 bg-neutral-900">
          7
        </div>
        <div className="row-span-4 col-start-4 row-start-5 bg-neutral-900">
          8
        </div>
      </div>
    </section>
  );
};

export default Services;
