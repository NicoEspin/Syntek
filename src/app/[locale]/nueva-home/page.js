import Navbar from "@/app/components/(common)/Navbar";
import Footer from "@/app/components/(common)/Footer";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import HeroV2 from "@/app/sections/home-v2/HeroV2";
import TransformSection from "@/app/sections/home-v2/TransformSection";
import SolutionsSection from "@/app/sections/home-v2/SolutionsSection";
import ProcessSection from "@/app/sections/home-v2/ProcessSection";
import FaqV2 from "@/app/sections/home-v2/FaqV2";
import CtaFinalV2 from "@/app/sections/home-v2/CtaFinalV2";
import Projects from "@/app/sections/Projects";
import Services from "@/app/sections/Services";
import Contact from "@/app/sections/Contact";

export async function generateMetadata() {
  return {
    title: "Synttek — Nueva Home (preview)",
    robots: { index: false, follow: false },
  };
}

export default async function NuevaHome({ params }) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-[#ededed]">
        <HeroV2 />
        <TransformSection />
        <SolutionsSection />
        <Services />
        <Projects locale={locale} />
        <ProcessSection />
        <FaqV2 />
        <CtaFinalV2 />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
