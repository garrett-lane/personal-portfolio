import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Experience
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Work Experience
      </h2>

      <div className="mt-8 space-y-5">
        {experience.map((entry) => (
          <div
            key={`${entry.org}-${entry.role}`}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-colors hover:border-accent-soft/50"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-text">
                {entry.role}
                <span className="font-normal text-text-muted">, {entry.org}</span>
              </h3>
              <span className="text-sm font-medium text-accent-soft">
                {entry.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-text-muted">{entry.location}</p>
            <ul className="mt-4 list-disc pl-5 space-y-1.5 text-text-muted">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
