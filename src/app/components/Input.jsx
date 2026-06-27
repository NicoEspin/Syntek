import { useId } from "react";
import { cn } from "@/lib/utils";

const Input = ({ label, id, multiline = false, rows = 4, type = "text", className, ...rest }) => {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const Field = multiline ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={fieldId} className="text-[10px] font-semibold uppercase tracking-label text-white/45">
          {label}
        </label>
      )}
      <Field
        id={fieldId}
        type={multiline ? undefined : type}
        rows={multiline ? rows : undefined}
        className={cn(
          "min-h-11 w-full rounded-lg border border-white/6 bg-neutral-950 px-3.5 py-3",
          "text-sm text-fg-1 outline-none placeholder:text-white/20",
          "transition-all duration-300 ease-premium",
          "focus:border-primary1/25 focus:shadow-[0_0_0_3px_rgba(161,226,51,0.08)]",
          multiline && "resize-y",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

export default Input;
