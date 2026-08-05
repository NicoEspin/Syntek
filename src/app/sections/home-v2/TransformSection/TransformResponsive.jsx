"use client";

import dynamic from "next/dynamic";
import useMediaQuery from "@/app/components/useMediaQuery";

const SystemComparator = dynamic(() => import("./SystemComparator"));
const MobileStateControl = dynamic(() => import("./MobileStateControl"));

export default function TransformResponsive({ copy }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <div className="mt-14">
      <SystemComparator copy={copy} />
    </div>
  ) : (
    <div className="mt-10">
      <MobileStateControl copy={copy} />
    </div>
  );
}
