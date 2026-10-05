import dynamic from "next/dynamic";
import GlobalFlowBackground from "@/app/components/nueva-home/GlobalFlowBackground";
import ScopedIntlProvider from "@/app/components/ScopedIntlProvider";
import NewHomeHero from "@/app/components/nueva-home/NewHomeHero";
import NewHomeInterstitial from "@/app/components/nueva-home/NewHomeInterstitial";
import NewHomeManifesto from "@/app/components/nueva-home/NewHomeManifesto";
import NewHomeNavbar from "@/app/components/nueva-home/NewHomeNavbar";
import NewHomeOffers from "@/app/components/nueva-home/NewHomeOffers";
import NewHomeProcess from "@/app/components/nueva-home/NewHomeProcess";
import NewHomeFinalCta from "@/app/components/nueva-home/NewHomeFinalCta";
import NewHomeFooter from "@/app/components/nueva-home/NewHomeFooter";
import NewHomeScrollOrchestrator from "@/app/components/nueva-home/NewHomeScrollOrchestrator";
import NewHomeServices from "@/app/components/nueva-home/NewHomeServices";
import NewHomeSystemsOperations from "@/app/components/nueva-home/NewHomeSystemsOperations";
import Projects from "@/app/sections/Projects";
import FaqV2 from "@/app/sections/home-v2/FaqV2";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

const TestimonialsSection = dynamic(() => import("@/app/sections/home-v2/TestimonialsSection"));

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NewHome.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
  };
}

export default async function NewHomePage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NewHome" });

  return (
    <div className={styles.root} data-nueva-home>
      <a href="#nueva-home-content" className="nueva-home-skip-link">
        {t("skipLink")}
      </a>
      <GlobalFlowBackground />
      <NewHomeScrollOrchestrator />
      <NewHomeNavbar locale={locale} copy={t.raw("navbar")} />
      <main id="nueva-home-content" tabIndex={-1} className="nueva-home-main">
        <NewHomeHero locale={locale} copy={t.raw("hero")} />
        <NewHomeManifesto copy={t.raw("manifesto")} />
        <NewHomeSystemsOperations copy={t.raw("systemsOperations")} />
        <NewHomeServices copy={t.raw("services")} />
        <NewHomeInterstitial copy={t.raw("interstitial")} />
        <ScopedIntlProvider locale={locale} namespaces={["Projects", "HomeV2.testimonials"]}>
          <div data-nh-stage="work" data-nh-beam-intensity="0.3" data-nh-beam-x="1" data-nh-beam-y="-1" className="nueva-home-production-proof">
            <Projects locale={locale} />
          </div>
          <div data-nh-stage="testimonials" data-nh-beam-intensity="0.22" data-nh-beam-x="-1" data-nh-beam-y="1" className="nueva-home-production-proof">
            <TestimonialsSection />
          </div>
        </ScopedIntlProvider>
        <NewHomeProcess copy={t.raw("process")} />
        <NewHomeOffers copy={t.raw("offers")} />
        <div data-nh-stage="faq" data-nh-beam-intensity="0.24" data-nh-beam-x="1" data-nh-beam-y="1" className="nueva-home-faq-bridge">
          <ScopedIntlProvider locale={locale} namespaces={["NewHome.faq", "NewHome.waMessage"]}>
            <FaqV2 namespace="NewHome.faq" waNamespace="NewHome" />
          </ScopedIntlProvider>
        </div>
        <NewHomeFinalCta locale={locale} copy={t.raw("finalCta")} whatsappMessage={t("waMessage")} />
      </main>
      <NewHomeFooter locale={locale} copy={t.raw("routeFooter")} />
    </div>
  );
}
