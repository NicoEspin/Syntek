import Hero from "@/app/Layouts/Hero";
import Navbar from "@/app/components/Navbar";
import CallToAction from "@/app/Layouts/CallToAction";
import OurTools from "@/app/Layouts/OurTools";
import Introduction from "@/app/Layouts/Introduction";
import Faqs from "@/app/Layouts/Faqs";
import Services from "@/app/Layouts/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <OurTools />
      <Faqs />
      <CallToAction />
    </>
  );
}
