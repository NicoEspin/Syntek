import ActiveSystem from "./ActiveSystem";
import FragmentedSystem from "./FragmentedSystem";
import TransformationLedger from "./TransformationLedger";

export default function MobileStateControl({ copy }) {
  return (
    <div className="space-y-4">
      <article className="overflow-hidden rounded-3xl border border-white/8 bg-neutral-950">
        <FragmentedSystem copy={copy.right} compact />
      </article>

      <div aria-hidden className="flex items-center gap-3 px-4 py-1">
        <span className="h-px flex-1 bg-white/8" />
        <span className="flex size-8 items-center justify-center rounded-full border border-[#A1E233]/30 bg-[#A1E233]/8 text-[#A1E233]">
          ↓
        </span>
        <span className="h-px flex-1 bg-white/8" />
      </div>

      <article className="overflow-hidden rounded-3xl border border-[#A1E233]/20 bg-neutral-950">
        <ActiveSystem copy={copy.left} systemFlow={copy.systemFlow} nodeStatus={copy.nodeStatus} compact />
      </article>

      <TransformationLedger transformations={copy.transformations} />
    </div>
  );
}
