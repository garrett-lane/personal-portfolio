import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Projects
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Featured Projects
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-soft/50"
          >
            {project.tag && (
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                {project.tag}
              </p>
            )}
            <h3 className="font-display mt-2 text-lg font-semibold text-text">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text-muted transition-colors hover:border-accent-soft hover:text-text"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
