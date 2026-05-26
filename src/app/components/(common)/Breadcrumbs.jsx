import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/28">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-primary1"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white/72" : undefined}>{item.label}</span>
              )}

              {!isLast ? <span className="text-white/16">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
