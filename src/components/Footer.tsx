import { useState } from "react";
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { profile, socials } from "../data/content";

const socialIcons: Record<string, typeof GithubLogoIcon> = {
  GitHub: GithubLogoIcon,
  LinkedIn: LinkedinLogoIcon,
};

const pillClass =
  "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-text-muted active:scale-[0.98]";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t border-border pb-10 pt-16 md:pt-24">
        <h2 className="reveal text-4xl font-semibold tracking-tighter text-text md:text-6xl">
          Get in Touch
        </h2>

        <div className="reveal mt-10 flex flex-wrap gap-3">
          {/* Tap to reveal (a hover tooltip never shows on phones). Once shown, select-all
              lets one tap select the whole address for copying. */}
          {showEmail ? (
            <span className="inline-flex select-all items-center gap-2 rounded-md border border-accent px-4 py-2.5 font-mono text-sm text-text">
              <EnvelopeSimpleIcon size={18} className="text-accent" />
              {profile.email}
            </span>
          ) : (
            <button type="button" onClick={() => setShowEmail(true)} className={`${pillClass} cursor-pointer`}>
              <EnvelopeSimpleIcon size={18} />
              Email
            </button>
          )}
          {socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClass}
              >
                {Icon && <Icon size={18} />}
                {social.label}
              </a>
            );
          })}
        </div>

        <p className="mt-20 text-sm text-text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
