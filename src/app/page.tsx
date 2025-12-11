import Image from "next/image";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* backdrop blend of the two images */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Image
          src="/mindratech-orbit.jpg"
          alt="MindraTech abstract orbit"
          fill
          className="object-cover mix-blend-screen"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/mindratech-brain.png"
          alt="MindraTech neural gradient"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-purple-500/25" />

      <section className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
            MINDRATECH · CELESTIA / CICI
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
            Operational AI that feels{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              exciting
            </span>{" "}
            but stays{" "}
            <span className="text-emerald-200">
              humble and reliable
            </span>
            .
          </h1>
          <p className="text-sm text-slate-200/80">
            Celestia is your founder-aligned execution layer—handling calendars, workflows,
            and operational discipline—so you can stay focused on the decisions only you
            can make.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-emerald-300/60 bg-slate-950/60 px-3 py-1 text-emerald-100">
              Tenant-aware execution
            </span>
            <span className="rounded-full border border-purple-300/60 bg-slate-950/60 px-3 py-1 text-purple-100">
              Founder doctrine at the core
            </span>
            <span className="rounded-full border border-cyan-300/60 bg-slate-950/60 px-3 py-1 text-cyan-100">
              Auditable workflows
            </span>
          </div>
        </div>

        <div className="relative mt-8 w-full max-w-sm md:mt-0">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-emerald-400/25 via-cyan-400/15 to-purple-500/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-xl backdrop-blur">
            <p className="text-xs font-semibold text-emerald-200">Celestia EA · Cici</p>
            <p className="mt-2 text-xs text-slate-200">
              “I keep your workflows clean, your meetings intentional, and your execution
              deterministic—always under your doctrine.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
