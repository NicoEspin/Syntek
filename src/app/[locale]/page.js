import Hero from "@/app/sections/Hero";
import Navbar from "@/app/components/(common)/Navbar";
import CallToAction from "@/app/sections/CallToAction";
import OurTools from "@/app/sections/OurTools";
import Introduction from "@/app/sections/Introduction";
import Faqs from "@/app/sections/Faqs";
import Services from "@/app/sections/Services";
import Footer from "@/app/components/(common)/Footer";
import Contact from "@/app/sections/Contact";
import About from "@/app/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <OurTools />
      <About />
      <Faqs />
      <Contact />
      <CallToAction />
      <Footer />
    </>
  );
}
