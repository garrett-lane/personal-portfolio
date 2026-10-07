import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Coursework", href: "#coursework" },
  { label: "Essays", href: "#essays" },
  { label: "Scouting", href: "#scouting" },
  { label: "Goals", href: "#goals" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={close}
          className="whitespace-nowrap font-display text-base font-semibold text-text"
        >
          Garrett Thompson
        </a>
        <ul className="hidden gap-5 text-sm text-text-muted lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Below lg the links don't fit on one line, so they move into a dropdown. */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-lg p-2 text-text-muted transition-colors hover:text-text lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Absolutely positioned so opening/closing it doesn't shift the page under an anchor jump. */}
      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-bg px-6 py-2 lg:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block py-2.5 text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
