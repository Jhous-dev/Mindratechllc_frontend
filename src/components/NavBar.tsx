"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-teal-300 to-violet-500" />
          <span className="text-sm font-semibold tracking-[0.18em] text-teal-300 uppercase">
            MindraTech LLC
          </span>
        </div>

        <nav className="hidden gap-6 text-sm text-slate-200 sm:flex">
          <Link href="#vision" className="hover:text-teal-300 transition-colors">
            Vision
          </Link>
          <Link href="#celestia" className="hover:text-teal-300 transition-colors">
            Celestia
          </Link>
          <Link href="#founders" className="hover:text-teal-300 transition-colors">
            Founders
          </Link>
          <Link href="#contact" className="hover:text-teal-300 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

