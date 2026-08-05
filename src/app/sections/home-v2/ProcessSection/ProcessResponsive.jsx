"use client";

import dynamic from "next/dynamic";
import useMediaQuery from "@/app/components/useMediaQuery";

const ProcessDesktop = dynamic(() => import("./ProcessDesktop"));
const ProcessMobile = dynamic(() => import("./ProcessMobile"));

export default function ProcessResponsive(props) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return isDesktop ? <ProcessDesktop {...props} /> : <ProcessMobile {...props} />;
}
