"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import spain from "@/app/assets/spain.webp";
import eng from "@/app/assets/eng.webp";
import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";


const Navbar = () => {
  const t = useTranslations("Navbar");

  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navLinks = [
    { label: t('home'), href: "#" },
    { label: t('services'), href: "#services" },
    // { label: t('portfolio'), href: "#portfolio" },
    { label: t('tools'), href: "#tools" },
    { label: t('about'), href: "#about" },
    { label: t('faqs'), href: "#faqs" },
    { label: t('contact'), href: "#contact" },
  ];

  const switchLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    const newPath = `/${newLocale}${pathname.slice(3)}`; // Asume rutas tipo `/es/`, `/en/`
    startTransition(() => {
      router.push(newPath);
    });
  };
  

  return (
    <header className="px-3 md:px-6 py-6 lg:py-20 2xl:px-80 sticky top-0 z-50">
      <div className="border border-white/15 rounded-[27px] backdrop-blur-md bg-white/20">
        <div className="flex p-2 px-4 items-center justify-between ">
          <div>
            <Image
              src={logo}
              alt="Syntek Logo"
              className="h-13 w-30 md:w-[190px] md:h-12 z-10 object-cover"
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
              <Image src={spain} alt="Spanish" className="w-[20px] h-[20px]" />
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={locale === "en"}
                  onChange={switchLanguage}
                />
                <div
                  className="w-11 h-6 bg-gray-200 rounded-full peer
                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                    after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                    peer-checked:bg-[#B7FF1F]"
                ></div>
              </label>
              <Image src={eng} alt="English" className="w-[20px] h-[20px]" />
            </div>

            {/* Hamburger icon */}
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
                      ? "origin-left rotate-45 -translate-y-1 transition"
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

        {/* Mobile menu */}
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
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center justify-between h-[100%] pb-24 pt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white font-bold text-4xl hover:text-primary1 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="w-auto h-[150px] text-primary1 transition-colors ">
                  {/* SVG Logo */}
                </div>
                <p className="text-white/60 font-medium tracking-wide md:text-xl text-center">
                 {t('copyright')}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
