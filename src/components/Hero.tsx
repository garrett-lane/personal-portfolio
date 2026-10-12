import { ArrowRightIcon } from "@phosphor-icons/react";
import type { CSSProperties } from "react";
import { experience, profile } from "../data/content";

// Feeds the .rise load-in delay (see index.css).
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

// Roles still marked "Present" feed the hero panel, so it stays current as content.ts changes.
const currentRoles = experience.filter((entry) => entry.period.endsWith("Present"));

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <p className="rise font-mono text-sm text-text-muted" style={stagger(0)}>
            Cyber Security Engineering, Iowa State University
          </p>
          <h1
            className="rise mt-5 text-5xl font-semibold leading-[1.02] tracking-tighter text-text sm:text-6xl lg:text-7xl"
            style={stagger(1)}
          >
            {profile.name}
          </h1>
          <p
            className="rise mt-6 max-w-[40ch] text-lg leading-relaxed text-text-muted md:text-xl"
            style={stagger(2)}
          >
            {profile.tagline}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={stagger(3)}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent-solid px-5 py-3 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View Projects
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-text-muted active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <aside
          className="rise rounded-md border border-border bg-surface p-6 lg:col-span-5 lg:p-7"
          style={stagger(4)}
        >
          <p className="text-sm font-medium text-text-muted">Currently</p>
          <ul className="mt-4 space-y-5">
            {currentRoles.map((entry) => (
              <li key={`${entry.org}-${entry.role}`}>
                <p className="font-semibold text-text">{entry.role}</p>
                <p className="mt-0.5 text-text-muted">{entry.org}</p>
                <p className="mt-1 font-mono text-xs text-text-muted">
                  Since {entry.period.replace(/\s*-\s*Present$/, "")}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-sm text-text">{profile.location}</p>
        </aside>
      </div>
    </section>
  );
}
