import SystemComparator from "./SystemComparator";
import MobileStateControl from "./MobileStateControl";

export default function TransformResponsive({ copy }) {
  return (
    <div className="relative mt-10 md:mt-14">
      <div className="md:hidden">
        <MobileStateControl copy={copy} />
      </div>
      <div className="hidden md:block">
        <SystemComparator copy={copy} />
      </div>
    </div>
  );
}
