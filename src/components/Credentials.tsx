import { credentials } from "../data/content";

export default function Credentials() {
  return (
    <section id="credentials" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Credentials
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Certifications
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((credential) => (
          <div
            key={credential.name}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-soft/50"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
              {credential.issuer}
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-text">
              {credential.name}
            </p>

            {credential.verifyHref && (
              <a
                href={credential.verifyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-accent-soft hover:underline"
              >
                Verify ↗
              </a>
            )}

            {credential.verifyCode && (
              <div className="mt-4 text-sm">
                <a
                  href={credential.verifyCode.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft hover:underline"
                >
                  Verify ↗
                </a>
                <p className="mt-1 text-text-muted">
                  Code:{" "}
                  <span className="font-medium text-text">
                    {credential.verifyCode.code}
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
