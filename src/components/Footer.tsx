import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            MindraTech LLC
          </p>
          <p className="text-xs text-slate-500">
            Building founder-aligned operational intelligence.
          </p>
          <p className="text-xs text-slate-600">
            © {year} MindraTech LLC. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:justify-end">
          <Link
            href="/legal/privacy"
            className="text-xs hover:text-indigo-300"
          >
            Privacy
          </Link>
          <Link
            href="/legal/terms"
            className="text-xs hover:text-indigo-300"
          >
            Terms
          </Link>
          <Link
            href="/status"
            className="text-xs hover:text-indigo-300"
          >
            Status
          </Link>
          <a
            href="mailto:founders@mindratechllc.org"
            className="text-xs hover:text-indigo-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
