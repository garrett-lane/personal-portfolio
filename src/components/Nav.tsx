import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          onClick={close}
          className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-text"
        >
          Garrett Thompson
        </a>
        <ul className="hidden gap-6 text-sm text-text-muted lg:flex">
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
          className="-mr-2 rounded-md p-2 text-text-muted transition-colors hover:text-text lg:hidden"
        >
          {open ? <XIcon size={22} /> : <ListIcon size={22} />}
        </button>
      </nav>

      {/* Absolutely positioned so opening/closing it doesn't shift the page under an anchor jump. */}
      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-bg px-4 py-2 sm:px-6 lg:hidden"
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
