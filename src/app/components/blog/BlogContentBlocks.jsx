import { cn } from "@/lib/utils";

export function CodeBlock({ code, className }) {
  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-xl border border-white/6 bg-neutral-900 px-7 py-6 font-mono text-[12.5px] leading-[1.85]",
        className,
      )}
    >
      {lines.map((line, index) => {
        const isComment = /^\s*(\/\/|\/\*|\*)/.test(line);

        return (
          <div
            key={index}
            className={cn("whitespace-pre", isComment ? "text-white/35" : "text-white/80")}
          >
            {line || " "}
          </div>
        );
      })}
    </div>
  );
}

export function ColorSwatches({ items, className }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {items.map((item) => (
        <div
          key={item.hex}
          className="rounded-lg border border-white/6 bg-neutral-900 px-4 py-3.5 text-center"
        >
          <div
            className="mx-auto mb-2 size-9 rounded-full border border-white/10"
            style={{ background: item.hex }}
          />
          <div className="font-mono text-[10px] tracking-wide text-white/40">{item.hex}</div>
          <div className="mt-0.5 text-[10px] text-white/25">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
