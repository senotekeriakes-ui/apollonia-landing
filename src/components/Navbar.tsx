"use client";

import Link from "next/link";
import { useState } from "react";
import LogoSvg from "./LogoSvg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Tree Of Apollonia", href: "#roadmap" },
  { label: "Founder", href: "#founder" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ink">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-16">
        <Link href="/" className="shrink-0 text-grey">
          <LogoSvg className="h-6 w-auto sm:h-7" />
        </Link>

        {/* Desktop links - center group */}
        <div className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-base tracking-wide text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Apply For Beta - far right */}
        <a
          href="#apply"
          className="hidden font-heading text-lg tracking-wide text-grey transition-colors hover:text-cream md:block"
        >
          Apply For Beta
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-cream/10 bg-ink px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="block py-3 font-heading text-sm text-orange"
          >
            Apply For Beta
          </a>
        </div>
      )}
    </nav>
  );
}
