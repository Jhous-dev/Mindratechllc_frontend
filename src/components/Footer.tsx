export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-[11px] sm:text-xs">
          © {new Date().getFullYear()} MindraTech LLC. All rights reserved.
        </p>
        <p className="text-[11px] sm:text-xs">
          Celestia (Cici) — deterministic, auditable executive operations for
          founders who actually want discipline.
        </p>
      </div>
    </footer>
  );
}
