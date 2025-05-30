import img from "@/app/assets/3D.webp";
import Image from "next/image";
import TitleSection from "../components/(common)/TitleSection";

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-5 lg:px-24 mx-auto">
      <TitleSection title="Servicios" />
      <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-medium mt-6 max-w-xl mx-auto ">
        Tu éxito, 
        <span className="text-primary1 block"> Nuestro Servicio</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* TARJETA PRINCIPAL */}
        <div
          className="bg-neutral-900 relative rounded-3xl border border-white/5 min-h-[400px]
                         md:col-span-2
                         lg:col-span-2 lg:row-span-4 lg:col-start-2 lg:row-start-1"
        >
          <div className="flex justify-center">
            <Image
              className="absolute rounded-full size-[297px] bottom-[-150px] bg-[#0A0A0A]"
              src={img}
              alt="img"
            />
          </div>
          <h2 className="text-primary1 text-center pt-9 text-4xl">
            Estrategia, diseño y tecnología para tu marca
          </h2>
        </div>

        {/* TARJETA 2 */}
        <div
          className="bg-neutral-900 rounded-3xl border border-white/5 min-h-[400px]
           md:col-span-2
           lg:col-span-2 lg:row-span-4 lg:col-start-2 lg:row-start-5"
        >
          <div className="flex flex-col gap-12 items-center pt-[190px] pb-10 h-full px-4">
            <h3 className="text-4xl font-semibold">Diseño UX/UI</h3>
            <p className=" max-w-md text-lg text-center md:text-start text-white/50">
              Diseños centrados en el usuario que combinan estética y
              funcionalidad para una experiencia fluida y atractiva.
            </p>
          </div>
        </div>

        {/* TARJETA 3 */}
        <div
          className="
             bg-neutral-900 p-9 min-h-[400px] rounded-3xl border border-white/5
             md:col-start-1 md:row-start-3
             lg:row-span-4 lg:col-start-1 lg:row-start-1 "
        >
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              Desarrollo Web
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              Creamos sitios rápidos, escalables y personalizados para impulsar
              tu presencia digital con una base sólida.
            </p>
          </div>
        </div>

        {/* TARJETA 4 */}
        <div
          className="
             bg-neutral-900 p-9 min-h-[400px] rounded-3xl border border-white/5
               md:col-start-1 md:row-start-4
               lg:row-span-4 lg:col-start-1 lg:row-start-5  "
        >
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              Branding
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              Construimos identidades visuales que comunican con claridad y
              conectan emocionalmente con tu audiencia.
            </p>
          </div>
        </div>

        {/* TARJETA 5 */}
        <div
          className="
          bg-neutral-900 p-9 min-h-[400px] rounded-3xl border border-white/5
        md:col-start-2 md:row-start-3
        lg:row-span-4 lg:col-start-4 lg:row-start-1  "
        >
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              Ecommerce
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              Diseñamos tiendas online intuitivas, optimizadas para convertir
              visitas en ventas de forma efectiva.
            </p>
          </div>
        </div>

        {/* TARJETA 6 */}
        <div
          className="
                 bg-neutral-900 p-9 min-h-[400px] rounded-3xl border border-white/5
                  md:col-start-2 md:row-start-4
                 lg:row-span-4 lg:col-start-4 lg:row-start-5"
        >
          <div className="flex flex-col gap-12">
            <h3 className="text-4xl font-semibold text-center md:text-start">
              Diseño Grafico
            </h3>
            <p className="max-w-md text-lg text-center md:text-start text-white/50">
              Transmitimos ideas visuales con impacto. Piezas creativas que
              comunican, destacan y fortalecen tu marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
