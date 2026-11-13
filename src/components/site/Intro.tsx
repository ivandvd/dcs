export function Intro() {
  const pillars = ["Speed", "Safety", "Economy"];
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            AeroCleaning
          </span>
        </div>
        <div className="lg:col-span-8">
          <h2 className="max-w-[820px] text-[clamp(30px,3.8vw,52px)] leading-[1.06] tracking-[-0.028em]">
            Global AeroCleaning Solutions is the future of building maintenance.
          </h2>
          <p className="mt-7 max-w-[660px] text-[17px] leading-[1.6] text-ink-3 sm:text-[18px]">
            The future of facade cleaning starts in the air. DCS develops the AeroCleaning concept – a new
            category of surface cleaning technology that uses industrial drones. It is a complete operational
            solution that lets any organisation quickly implement cleaning, washing, impregnation,
            disinfection and other large-scale operations.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {pillars.map((p, i) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-2 text-[14px]"
              >
                <span className="font-mono text-[11px] text-ink-3">0{i + 1}</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
