import { experience } from "../data/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      {/* Timeline: dates in a gutter on the left, one continuous rule beside the roles. */}
      <ol>
        {experience.map((entry) => (
          <li
            key={`${entry.org}-${entry.role}`}
            className="reveal grid gap-2 md:grid-cols-12 md:gap-10"
          >
            <p className="pt-1 font-mono text-sm text-text-muted md:col-span-3">{entry.period}</p>
            <div className="pb-12 md:col-span-9 md:border-l md:border-border md:pl-10">
              <h3 className="text-xl font-semibold tracking-tight text-text">{entry.role}</h3>
              <p className="mt-1 text-text-muted">
                {entry.org}, {entry.location}
              </p>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed text-text-muted">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
