type Props = { stats: { label: string; value: string }[] };

/** Compact stat tiles used in the hero's bottom-right slot. Stack as rows on phones. */
export function StatChips({ stats }: Props) {
  return (
    <div className="grid w-full gap-2 sm:grid-cols-3 lg:w-[440px]">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex items-center justify-between gap-4 rounded-2xl bg-white/92 px-4 py-3 text-ink backdrop-blur-xl sm:block sm:p-4"
        >
          <span className="text-[12.5px] leading-snug text-ink-3 sm:block sm:text-[12px]">{s.label}</span>
          <span className="text-[17px] leading-tight tracking-[-0.02em] sm:mt-4 sm:block sm:text-[20px]">{s.value}</span>
        </div>
      ))}
    </div>
  );
}
