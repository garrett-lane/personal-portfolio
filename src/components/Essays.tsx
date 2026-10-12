import { ArrowUpRightIcon, FilePdfIcon } from "@phosphor-icons/react";
import { essays } from "../data/content";
import Section from "./Section";

export default function Essays() {
  return (
    <Section id="essays" title="Essays & Reflections">
      <ul className="reveal max-w-3xl divide-y divide-border border-y border-border">
        {essays.map((essay) => (
          <li key={essay.title}>
            <a
              href={essay.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-5 transition-colors"
            >
              <FilePdfIcon size={22} className="shrink-0 text-text-muted transition-colors group-hover:text-accent" />
              <span className="flex-1 text-lg font-medium text-text">{essay.title}</span>
              <ArrowUpRightIcon
                size={18}
                className="shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
