import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <h1 className="font-display text-5xl font-bold tracking-tight text-text sm:text-6xl">
        Hi, I'm <span className="glow-text">{profile.name}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-text-muted">{profile.tagline}</p>
      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-muted transition-colors hover:border-accent-soft hover:text-text"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
