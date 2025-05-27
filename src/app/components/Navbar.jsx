"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import spain from "@/app/assets/spain.webp";
import eng from "@/app/assets/eng.webp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#features" },
  { label: "Herramientas", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-3 md:px-6 py-6 md:py-20 lg:px-80 sticky top-0 z-50 ">
      <div className="border border-white/15 rounded-[27px] backdrop-blur-md bg-white/20">
        <div className="flex p-2 px-4 items-center justify-between ">
          <div>
            <Image
              src={logo}
              alt="Syntek Logo"
              className="h-13 w-30 md:w-[190px] md:h-12 z-10 object-cover "
            />
          </div>
          <div className="hidden lg:flex">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-primary1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-[6px] items-center md:pr-2">
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

            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu lg:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={
                    isOpen
                      ? "origin-left rotate-45 -translate-y-1 transition "
                      : ""
                  }
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={isOpen ? "opacity-0 transition" : ""}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={
                    isOpen
                      ? "transition origin-left -rotate-45 translate-y-1"
                      : ""
                  }
                ></line>
              </svg>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "100dvh",
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className=" overflow-hidden"
            >
              <div className="flex flex-col items-center justify-between h-dvh pt-10 pb-90">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white font-bold text-4xl hover:text-primary1 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
