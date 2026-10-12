import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { credentials } from "../data/content";
import Section from "./Section";

const verifyLinkClass =
  "group inline-flex items-center gap-1 text-sm font-medium text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-accent";

export default function Credentials() {
  return (
    <Section id="credentials" title="Certifications">
      {/* gap-px over a border-colored background draws single hairlines between cells. */}
      <div className="reveal grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {credentials.map((credential) => (
          <div key={credential.name} className="flex flex-col bg-bg p-6 md:p-8">
            <p className="font-mono text-xs text-text-muted">{credential.issuer}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-text md:text-2xl">
              {credential.name}
            </p>

            <div className="mt-auto pt-6">
              {credential.verifyHref && (
                <a
                  href={credential.verifyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={verifyLinkClass}
                >
                  Verify
                  <ArrowUpRightIcon size={14} className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}

              {credential.verifyCode && (
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <a
                    href={credential.verifyCode.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={verifyLinkClass}
                  >
                    Verify
                    <ArrowUpRightIcon size={14} className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <p className="text-sm text-text-muted">
                    Code{" "}
                    <span className="select-all font-mono text-text">
                      {credential.verifyCode.code}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
