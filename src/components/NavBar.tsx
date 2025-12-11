"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Celestia", href: "#celestia" },
  { label: "For Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-emerald-300 via-cyan-400 to-violet-500 shadow-md shadow-emerald-500/40" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              MindraTech
            </div>
            <div className="text-xs text-slate-300/80">
              Celestia Operational Intelligence
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-slate-200/90 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-sm shadow-emerald-500/30 backdrop-blur-sm transition hover:border-emerald-200/90 hover:bg-emerald-400/20"
          >
            Talk to Cici
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-4 rounded bg-current" />
            <span className="block h-0.5 w-3 rounded bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-2 text-sm text-slate-200/90">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-1 py-1.5 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200"
              onClick={() => setOpen(false)}
            >
              Talk to Cici
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
