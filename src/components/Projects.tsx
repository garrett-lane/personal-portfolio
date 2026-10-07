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

      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-colors hover:border-accent-soft/50"
          >
            {project.tag && (
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                {project.tag}
              </p>
            )}
            <h3 className="font-display mt-2 text-xl font-semibold text-text">
              {project.title}
            </h3>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-text-muted">
              {project.description}
            </p>

            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                  My Role
                </dt>
                <dd className="mt-1.5 text-text-muted">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                  Skills / Knowledge Gained
                </dt>
                <dd className="mt-1.5">
                  <ul className="list-disc pl-5 space-y-1 text-text-muted">
                    {project.skillsGained.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                  Big-Picture Contribution
                </dt>
                <dd className="mt-1.5 text-text-muted">{project.bigPicture}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
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
