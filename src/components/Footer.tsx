import { profile, socials } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="fade-in mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-sm font-medium uppercase text-accent-soft">
        Contact
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-text">
        Get in Touch
      </h2>

      <div className="mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <span
            title={profile.email}
            className="cursor-default rounded-full border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent-soft hover:text-text"
          >
            Email
          </span>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent-soft hover:text-text"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
