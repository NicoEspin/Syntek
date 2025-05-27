import React from "react";
import logo from "@/app/assets/logo.svg";
import Image from "next/image";
import spain from "@/app/assets/spain.webp";
import eng from "@/app/assets/eng.webp";

const Navbar = () => {
  return (
    <header className="hidden mx-[400px] bg-[rgba(90,88,88,0.34)] backdrop-blur-md rounded-[30px] py-[5px] px-[29px] sticky top-20 z-20 mb-[150px]">
      <nav className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            alt="Logo"
            className="w-[200px] h-[54px]  z-10 object-cover text-white"
          />
        </div>
        <div className="flex gap-[20px] text-white">
          <a href="#" className="hover:text-primary1 transition-colors" >Inicio</a>
          <a href="#" className="hover:text-primary1 transition-colors">Nosotros</a>
          <a href="#" className="hover:text-primary1 transition-colors">Servicios</a>
        </div>
        <div className="flex gap-[6px] items-center">
         
          <Image
            src={spain}
            alt="Spanish"
            className="w-[20px] h-[20px] aspect-square "
          />
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer  " />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-[#B7FF1F]"
            ></div>
          </label>
          <Image
            src={eng}
            alt="English"
            className="w-[20px] h-[20px] aspect-square"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
