import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import syntekIcon from "@/app/assets/logos/syntek.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-neutral-900 py-10 bottom-0">
      <div className="flex flex-col items-center gap-6">
        <div className="w-[200px] text-white hover:text-primary1 transition-colors ">
          <svg
            className="w-full h-[auto] fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 841.89 595.28"
          >
            <path d="M533.76,209.37l.21.46" />
            <path d="M305.77,379.34c9.15-10.93,20-20.25,29.4-30.94,7.54-8.57,14.36-17.57,17.33-28.87,2.5-9.49,1.2-18.61-2-27.8-13.36-38.52-7.49-74.11,17.84-106,28.34-35.65,79.33-48.3,121.46-30.93,8.49,3.51,16.64,7.57,24.2,13.69l-31.09,13.53c-1.32.58-2.41-.09-3.6-.52-28.64-10.47-55.47-6.69-78.85,12.65-23.09,19.1-32.27,44.49-27.65,74.29,2.1,13.51,8.32,25.32,17.66,35.31,2.27,2.44,1.82,3.41-.45,5.34q-41.77,35.47-83.39,71.13C305.88,380.39,305.57,380.11,305.77,379.34Z" />
            <path d="M482,266.77c13.08,38.61,7,74.16-18.6,105.84-28.6,35.44-79.67,47.72-121.68,30.05-8.47-3.56-16.59-7.68-24.1-13.86l31.18-13.31c1.33-.57,2.42.11,3.6.55,28.56,10.68,55.42,7.09,78.94-12.09,23.23-18.93,32.59-44.25,28.18-74.08-2-13.53-8.14-25.38-17.4-35.44-2.26-2.46-1.8-3.43.48-5.34l21.83-18.29" />
            <path d="M485.62,295.55a163.29,163.29,0,0,0-1.29-21.18l-10.22-37.44a43.58,43.58,0,0,1-1.16-4.46c-.75-5.6-2.67-15.24-8-16.58-3.76-1-7.63,2.72-9,3.88L431.4,241.05Z" />
            <path d="M481.36,266.41l-7.8-25c-.37-1.64-3-15.31-3.46-16.71-.27-5.65-.67-6.63-5.82-8.42-3.67-1.27-8.95,3.42-10.39,4.47-13.73,9.95-26,22.08-39.75,32Z" />
            <path d="M387.76,311.16l83-67.48L450.94,223,370.2,288.28S388.14,310.81,387.76,311.16Z" />
          </svg>
        </div>
        <p className="font-medium tracking-wide md:text-xl text-center">
          {t("copyright")}
        </p>
        <div className="flex itesms-center gap-6">
          <Linkedin className="size-[30px] hover:text-primary1 transition-colors" />
          <Instagram className="size-[30px] hover:text-primary1 transition-colors" />
          <Phone className="size-[30px] hover:text-primary1 transition-colors" />
          <Mail className="size-[30px] hover:text-primary1 transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
