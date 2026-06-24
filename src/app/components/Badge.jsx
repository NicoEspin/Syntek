import { cn } from "@/lib/utils";

const variantClasses = {
  neutral: "border-white/10 text-white/45",
  accent: "border-primary1/25 bg-primary1/8 text-primary1",
  solid: "border-transparent bg-primary1 text-on-accent",
  outline: "border-primary1/25 text-primary1",
};

const Badge = ({ children, variant = "neutral", dot = false, pulse = false, className, ...rest }) => {
  const dotClass = variant === "solid" ? "bg-on-accent" : "bg-primary1";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1",
        "text-[10px] font-semibold tracking-wide",
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {dot && (
        <span className="relative flex size-1.5 shrink-0">
          {pulse && (
            <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-40", dotClass)} />
          )}
          <span className={cn("relative inline-flex size-1.5 rounded-full", dotClass)} />
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
