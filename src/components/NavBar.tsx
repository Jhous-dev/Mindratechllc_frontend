"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/celestia", label: "Celestia" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-xs font-semibold text-indigo-300">
            MT
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50 md:text-base">
              MindraTech LLC
            </span>
            <span className="text-[11px] text-slate-400 md:text-xs">
              Celestia | Operational Intelligence
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-indigo-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/founders-brief"
            className="rounded-full border border-indigo-500/70 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-200 hover:bg-indigo-500/20"
          >
            Founder’s Brief
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-1.5 text-slate-200 hover:bg-slate-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
          >
            {open ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 text-slate-200 hover:bg-slate-900/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/founders-brief"
              className="mt-2 rounded-full border border-indigo-500/70 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200 text-center hover:bg-indigo-500/20"
              onClick={() => setOpen(false)}
            >
              Founder’s Brief
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
