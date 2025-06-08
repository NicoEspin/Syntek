import Image from "next/image";

export default function AboutTeamCard({
  name,
  role,
  imageSrc,
  icon,
  paragraphs,
  inverted = false,
}) {
  return (
    <div className="flex flex-col gap-6 items-center lg:max-w-[319px]">
      <div>
        <Image
          src={imageSrc}
          alt={name}
          width={319}
          height={319}
          className={`aspect-square size-[319px] ${
            inverted ? "scale-x-[-1]" : ""
          }`}
        />
      </div>

      <div className="bg-primary1 group w-[50px] h-[50px] rounded-md hover:bg-lime-600/20 transition-colors flex items-center justify-center">
        <div className="text-black group-hover:text-primary1 transition-colors flex items-center justify-center">
          <div className="p-0 m-0">{icon}</div>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p className="italic text-sm">{role}</p>
      </div>

      <div className="flex flex-col gap-2">
        {paragraphs.map((text, index) => {
          const baseStyle = `text-sm text-white/80`;
          const isFirst = index === 0;
          const isQuote = index === 3;

          if (isQuote) {
            return (
              <p key={index} className={`${baseStyle} italic `}>
                “{text}”
              </p>
            );
          }

          return (
            <p
              key={index}
              className={`${baseStyle} ${isFirst ? "text-md" : ""}`}
            >
              • {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
