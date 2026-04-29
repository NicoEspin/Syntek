import { Sparkles } from "lucide-react";

const TitleSection = ({ title }) => {
  return (
    <div className="mx-auto mt-10 flex w-fit items-center justify-center gap-2 rounded-full border border-primary1 px-2 py-1">
      <Sparkles aria-hidden="true" className="size-3 text-primary1" />
      <p className="text-center text-xs uppercase text-primary1">{title}</p>
    </div>
  );
};

export default TitleSection;
