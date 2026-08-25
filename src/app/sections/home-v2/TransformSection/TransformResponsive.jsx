"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useMediaQuery from "@/app/components/useMediaQuery";

const SystemComparator = dynamic(() => import("./SystemComparator"));
const MobileStateControl = dynamic(() => import("./MobileStateControl"));

// `useMediaQuery` solo resuelve en cliente (arranca en `false`), así que en
// SSR y en el primer render la variante "adivinada" sería siempre mobile —
// eso pintaría la card mobile incluso en desktop y recién después haría swap
// a SystemComparator, un salto de layout real. En vez de montar la variante
// adivinada, se reserva el alto correcto por CSS puro (según breakpoint y
// prefers-reduced-motion, sin depender de JS) con un placeholder estático, y
// recién se monta la variante real una vez que el media query resolvió.
export default function TransformResponsive({ copy }) {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div aria-hidden className="relative mt-10 md:mt-14">
        <div className="h-[140vh] motion-reduce:h-auto md:h-[200vh] md:motion-reduce:h-auto">
          <div className="sticky top-24 motion-reduce:static md:top-32">
            <div className="min-h-[440px] w-full rounded-[24px] border border-white/[0.08] bg-[#0a0a0a] md:aspect-[16/9] md:min-h-0 md:rounded-[28px] lg:aspect-[16/6]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-10 md:mt-14">
      {isDesktop ? <SystemComparator copy={copy} /> : <MobileStateControl copy={copy} />}
    </div>
  );
}
