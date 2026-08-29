import { futurePlans } from "../data/content";

export default function FuturePlans() {
  return (
    <section id="goals" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Looking Ahead
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        What's Next
      </h2>

      <div className="mt-6 space-y-5">
        {futurePlans.map((goal) => (
          <div
            key={goal.heading}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <p className="text-lg font-semibold text-text">
              {goal.heading}
              {goal.org && (
                <span className="font-normal text-text-muted"> — {goal.org}</span>
              )}
            </p>
            <p className="mt-4 whitespace-pre-line leading-relaxed text-text-muted">
              {goal.blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
