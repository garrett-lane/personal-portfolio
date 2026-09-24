import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">About</p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        About Me
      </h2>
      <div className="mt-6 rounded-2xl border border-border bg-surface p-8">
        <p className="whitespace-pre-line text-lg leading-relaxed text-text-muted">
          {profile.bio}
        </p>
        <p className="mt-5 text-sm font-medium text-text">{profile.location}</p>
      </div>
    </section>
  );
}
