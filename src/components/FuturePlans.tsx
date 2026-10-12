import { futurePlans } from "../data/content";
import Section from "./Section";

export default function FuturePlans() {
  return (
    <Section id="goals" title="What's Next">
      <div className="grid gap-12 md:grid-cols-2 md:gap-14">
        {futurePlans.map((goal) => (
          <div key={goal.heading} className="reveal border-l-2 border-accent pl-6">
            <h3 className="text-xl font-semibold tracking-tight text-text md:text-2xl">
              {goal.heading}
            </h3>
            {goal.org && <p className="mt-1 text-text-muted">{goal.org}</p>}
            <p className="mt-4 whitespace-pre-line leading-relaxed text-text-muted">{goal.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
