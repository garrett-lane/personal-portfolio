import { coursework } from "../data/content";
import Section from "./Section";

export default function Coursework() {
  return (
    <Section id="coursework" title="Relevant Coursework">
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
        {coursework.map((group) => (
          <div key={group.department} className="reveal">
            <h3 className="text-sm font-semibold text-text">{group.department}</h3>
            <ul className="mt-4 space-y-3">
              {group.courses.map((course) => (
                <li key={course.code} className="grid grid-cols-[6.5rem_1fr] gap-4">
                  <span className="font-mono text-sm leading-6 text-accent">{course.code}</span>
                  <span className="leading-6 text-text-muted">{course.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
