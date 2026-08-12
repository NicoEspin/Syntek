import dynamic from "next/dynamic";
import { getLocale } from "next-intl/server";
import Navbar from "@/app/components/(common)/Navbar";
import Footer from "@/app/components/(common)/Footer";
import ScopedIntlProvider from "@/app/components/ScopedIntlProvider";
import NotFoundHero from "@/app/sections/not-found/NotFoundHero";

const FloatingWidgets = dynamic(() => import("@/app/components/FloatingWidgets"));

export default async function NotFound() {
  const locale = await getLocale();

  return (
    <>
      <ScopedIntlProvider locale={locale} namespaces={["Navbar", "NotFoundPage", "ChatBot"]}>
        <Navbar />
        <main className="bg-[#0a0a0a] text-[#ededed]">
          <NotFoundHero />
        </main>
        <FloatingWidgets />
      </ScopedIntlProvider>
      <Footer />
    </>
  );
}
