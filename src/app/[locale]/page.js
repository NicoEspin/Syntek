import Hero from "@/app/sections/Hero";
import Navbar from "@/app/components/(common)/Navbar";
import CallToAction from "@/app/sections/CallToAction";
import OurTools from "@/app/sections/OurTools";
import Projects from "@/app/sections/Projects";
import Introduction from "@/app/sections/Introduction";
import Faqs from "@/app/sections/Faqs";
import Services from "@/app/sections/Services";
import Footer from "@/app/components/(common)/Footer";
import Contact from "@/app/sections/Contact";
import About from "@/app/sections/About";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Agencia de desarrollo web, software y automatizaciones en Córdoba"
      : "Web development, software and automation agency in Córdoba",
    description: isEs
      ? "En Synttek creamos sitios web, software a medida, ecommerce y automatizaciones para marcas y empresas que quieren crecer con tecnología."
      : "At Synttek we build websites, custom software, ecommerce and automations for brands and companies that want to grow with technology.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  const isEs = locale === "es";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synttek",
    url: `https://synttek.com/${locale}`,
    logo: "https://synttek.com/logo.png",
    email: "synttek@gmail.com",
    telephone: "+54 3541560518",
    description: isEs
      ? "Agencia de desarrollo web, software y automatizaciones en Córdoba, Argentina."
      : "Web development, software and automation agency in Córdoba, Argentina.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "AR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <OurTools />
        <Projects />
        <About />
        <CallToAction />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
