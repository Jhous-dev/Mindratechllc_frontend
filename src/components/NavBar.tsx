"use client";

import Link from "next/link";

export function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-purple-500" />
          <span className="text-sm font-semibold tracking-wide text-slate-50">
            MindraTech LLC
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs font-medium text-slate-200">
          <Link href="#vision" className="hover:text-emerald-300">
            Vision
          </Link>
          <Link href="#product" className="hover:text-emerald-300">
            Celestia
          </Link>
          <Link href="#founders" className="hover:text-emerald-300">
            Founders
          </Link>
          <Link href="#contact" className="rounded-full border border-emerald-400/60 px-3 py-1 hover:bg-emerald-500/10">
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
