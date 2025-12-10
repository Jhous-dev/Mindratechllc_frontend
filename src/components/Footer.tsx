const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} MindraTech LLC. All rights reserved.</span>
        <span className="text-slate-500">
          Human intelligence × AI systems — built with discipline, not hype.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
