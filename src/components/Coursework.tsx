import { coursework } from "../data/content";

export default function Coursework() {
  return (
    <section id="coursework" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Academics
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Relevant Coursework
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {coursework.map((group) => (
          <div
            key={group.department}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
              {group.department}
            </p>
            <ul className="mt-3 space-y-2">
              {group.courses.map((course) => (
                <li key={course.code} className="flex flex-wrap gap-x-2 text-sm">
                  <span className="font-medium text-text">{course.code}</span>
                  <span className="text-text-muted">{course.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
