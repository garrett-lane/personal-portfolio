import { scoutingAwards } from "../data/content";
import Section from "./Section";

export default function ScoutingAwards() {
  const [featured, ...rest] = scoutingAwards;

  return (
    <Section id="scouting" title="Scouting Awards">
      {/* The first award (Eagle Scout) leads as a large tile; the rest stack beside it. */}
      <div className="reveal grid gap-4 md:grid-cols-12">
        {featured && (
          <div className="flex min-h-56 flex-col justify-end rounded-md border border-accent/25 bg-accent/[0.06] p-6 md:col-span-7 md:row-span-2 md:p-8">
            <p className="text-3xl font-semibold tracking-tight text-text md:text-5xl">
              {featured.name}
            </p>
            <p className="mt-3 text-text-muted">
              {featured.org}
              {featured.date && <>, <span className="font-mono text-sm">{featured.date}</span></>}
            </p>
          </div>
        )}
        {rest.map((award, i) => (
          <div
            key={`${award.name}-${i}`}
            className="flex flex-col justify-end rounded-md border border-border bg-surface p-6 md:col-span-5"
          >
            <p className="text-xl font-semibold tracking-tight text-text">{award.name}</p>
            <p className="mt-1.5 text-text-muted">
              {award.org}
              {award.date && <>, <span className="font-mono text-sm">{award.date}</span></>}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
