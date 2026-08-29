import { scoutingAwards } from "../data/content";

export default function ScoutingAwards() {
  return (
    <section id="scouting" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Scouting
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Scouting Awards
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scoutingAwards.map((award, i) => (
          <div
            key={`${award.name}-${i}`}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-soft/50"
          >
            <p className="font-display text-lg font-semibold text-text">
              {award.name}
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {award.org}
              {award.date && <> — {award.date}</>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
