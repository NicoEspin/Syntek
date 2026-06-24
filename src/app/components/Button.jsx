import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "gap-1.5 px-4 py-2 text-[11px]",
  md: "gap-2 px-7 py-3.5 text-sm",
  lg: "gap-2.5 px-[34px] py-4 text-sm",
};

const arrowSizes = { sm: 7, md: 9, lg: 10 };

const variantClasses = {
  primary: "bg-primary1 font-bold text-on-accent hover:bg-accent-hover hover:-translate-y-px",
  secondary:
    "border border-white/10 bg-white/[0.03] font-medium text-white/55 hover:text-white",
  ghost: "font-medium text-white/72 hover:text-primary1",
  accentOutline:
    "border border-primary1/25 font-medium text-primary1 hover:bg-primary1/8",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  disabled = false,
  type = "button",
  className,
  ...rest
}) => {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full tracking-wide",
    "transition-all duration-300 ease-premium active:scale-[0.97]",
    "disabled:pointer-events-none disabled:opacity-40",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && (
        <svg width={arrowSizes[size]} height={arrowSizes[size]} viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <path
            d="M1 7L7 1M7 1H2M7 1V6"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
