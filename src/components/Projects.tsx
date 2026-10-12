import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { projects } from "../data/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project) => (
          <article key={project.title} className="reveal grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left rail: what kind of project it is, what it was built with, where to see it.
                Sticky on desktop so it stays beside the longer write-up. */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                {project.tag && (
                  <p className="font-mono text-sm font-medium leading-relaxed text-accent">{project.tag}</p>
                )}
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text md:text-3xl">
                  {project.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-sm font-medium text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {link.label}
                        <ArrowUpRightIcon
                          size={14}
                          className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="whitespace-pre-line text-lg leading-relaxed text-text">
                {project.description}
              </p>

              <dl className="mt-8 grid gap-x-10 gap-y-7 border-t border-border pt-8 md:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-text">My Role</dt>
                  <dd className="mt-2 leading-relaxed text-text-muted">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-text">Big-Picture Contribution</dt>
                  <dd className="mt-2 leading-relaxed text-text-muted">{project.bigPicture}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-sm font-semibold text-text">Skills / Knowledge Gained</dt>
                  <dd className="mt-3">
                    <ul className="grid gap-x-10 gap-y-2.5 md:grid-cols-2">
                      {project.skillsGained.map((skill) => (
                        <li key={skill} className="flex gap-3 leading-relaxed text-text-muted">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
