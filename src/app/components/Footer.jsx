import linkedinIcon from "@/app/assets/logos/linkedin.svg";
import instagramIcon from "@/app/assets/logos/instagram.svg";
import gmailIcon from "@/app/assets/logos/gmail.svg";
import whatsappIcon from "@/app/assets/logos/whatsapp.svg";
import syntekIcon from "@/app/assets/logos/syntek.svg";

import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-10 ">
      <div className="flex flex-col items-center gap-6">
        <Image src={syntekIcon} alt="Logo" className="w-[200px] resize-none object-cover" />
        <p className="font-medium text-xl text-center">&copy; 2023 Syntek. Todos los derechos reservados</p>
        <div className="flex itesms-center gap-4">
            <Image src={linkedinIcon} alt="Logo" className="size-[30px] resize-none object-cover" />
            <Image src={instagramIcon} alt="Logo" className="size-[30px] resize-none object-cover" />
            <Image src={whatsappIcon} alt="Logo" className="size-[30px] resize-none object-cover" />
            <Image src={gmailIcon} alt="Logo" className="size-[30px] resize-none object-cover" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
