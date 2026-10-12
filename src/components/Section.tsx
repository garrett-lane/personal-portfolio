import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Shared shell so every section gets the same width, rhythm, and heading treatment.
// The hairline on top separates sections without boxing their content in cards.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t border-border py-16 md:py-24">
        <h2 className="reveal text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {title}
        </h2>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
