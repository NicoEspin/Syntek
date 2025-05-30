import React from "react";
import TitleSection from "@/app/components/(common)/TitleSection";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-5 lg:px-26">
      <div className="block md:flex justify-center lg:justify-between items-center md:gap-40  ">
        <div>
          <TitleSection title="Contacto" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6">
            Conectate con {" "}
            <span className="text-primary1 lg:block">Nosotros</span>
          </h2>
          <p className="text-white/50 mt-4 lg:text-lg md:max-w-[400px] lg:max-w-md">
            Potencia tu presencia online con diseño innovador y desarrollo web
            estratégico. Tu próxima gran idea comienza aquí.
          </p>
          <div className="flex flex-col gap-6 mt-6 w-fit">
            <div  className="flex gap-4 items-center group ">
              <div className="bg-lime-600/20 p-3 rounded-md group-hover:bg-primary1 transition-colors">
                <Phone className="size-[30px] text-primary1 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white/50 font-semibold text-lg group-hover:text-white transition-colors ">+54 9 11 2345-6789</h3>
            </div>
            <div className="flex gap-4 items-center group">
              <div className="bg-lime-600/20 p-3 rounded-md group-hover:bg-primary1 transition-colors group-hover:shadow-primary1">
                <Mail className="size-[30px] text-primary1 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white/50 font-semibold text-lg group-hover:text-white transition-colors">Lorem@gmail.com</h3>
            </div> 
            <div className="flex gap-4 items-center group">
              <div className="bg-lime-600/20 p-3 rounded-md group-hover:bg-primary1 transition-colors">
                <Instagram className="size-[30px] text-primary1 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white/50 font-semibold text-lg group-hover:text-white transition-colors">Lorem@Ipsum</h3>
            </div>
            <div className="flex gap-4 items-center group">
              <div className="bg-lime-600/20 p-3 rounded-md group-hover:bg-primary1 transition-colors">
                <Linkedin className="size-[30px] text-primary1 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white/50 font-semibold text-lg group-hover:text-white transition-colors">LoremIpsum</h3>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-12 rounded-3xl border border-white/5 mt-6 md:mt-0">
          <h3 className="text-3xl md:text-4xl font-semibold text-white/80 text-center">
            Comencemos tu próximo proyecto
          </h3>
          <form
            // ref={formRef}
            // onSubmit={handleSubmit}
            className="flex flex-col mt-12 no-autofill"
          >
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                // value={form.name}
                // onChange={handleChange}
                placeholder="What is your Name?"
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                 rounded-lg border-none font-medium mb-4"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">Your Email</span>
              <input
                required
                type="email"
                name="email"
                // value={form.email}
                // onChange={handleChange}
                placeholder="What is your Email?"
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                 rounded-lg border-none font-medium mb-4"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white/80 font-medium mb-4">Your Message</span>
              <textarea
                required
                rows="7"
                name="message"
                // value={form.message}
                // onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-neutral-950 py-4 outline-none px-6 placeholder:text-white/50 text-white
                rounded-lg border-none font-medium mb-4 resize-none custom-scrollbar"
              />
            </label>
            <button
              type="submit"
              className="text-center mt-3 w-[150px] p-2 rounded-full border-2 border-primary1 flex-grow-0 
            cursor-pointer text-black bg-primary1 font-semibold hover:bg-transparent hover:text-primary1 hover:scale-105 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
