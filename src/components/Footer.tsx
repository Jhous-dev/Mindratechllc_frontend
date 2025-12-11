export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} MindraTech LLC. All rights reserved.</span>
        <div className="flex gap-4">
          <span className="text-slate-500">Celestia · Cici · Operational AI Backbone</span>
        </div>
      </div>
    </footer>
  );
}
