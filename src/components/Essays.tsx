import { essays } from "../data/content";

export default function Essays() {
  return (
    <section id="essays" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Writing
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Essays &amp; Reflections
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {essays.map((essay) => (
          <a
            key={essay.title}
            href={essay.href}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-soft/50"
          >
            <p className="font-display text-lg font-semibold text-text">
              {essay.title}
            </p>
            <p className="mt-3 text-sm text-accent-soft">Read ↗</p>
          </a>
        ))}
      </div>
    </section>
  );
}
