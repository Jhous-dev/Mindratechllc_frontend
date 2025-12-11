import Image from "next/image";

export default function HomePage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        {/* Left: copy */}
        <section className="relative z-10 flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-emerald-200 shadow shadow-emerald-500/30 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow shadow-emerald-400/70" />
            <span>Celestia (Cici) is online</span>
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            The operational brain{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              founders actually use
            </span>
            , not just demo.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            MindraTech’s Celestia (Cici) is your execution layer: calendar,
            comms, workflows, and audit trails; all driven by your doctrine,
            not generic prompts. No fluff; just controlled automation.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:brightness-110"
            >
              Talk to Cici
            </a>
            <a
              href="#celestia"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-900/70 px-5 py-2 text-sm font-medium text-slate-100 shadow-sm hover:border-emerald-300/70 hover:text-emerald-200"
            >
              See what it runs
            </a>
          </div>

          <div className="mt-6 grid gap-4 text-xs text-slate-300/80 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="text-[11px] font-semibold text-emerald-300">
                Deterministic
              </div>
              <p className="mt-1">
                Every workflow is explicit, repeatable, and logged. No
                “mystery” AI decisions.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="text-[11px] font-semibold text-cyan-300">
                Doctrine-driven
              </div>
              <p className="mt-1">
                Founder manifesto compiled into governance: tone, risk, and
                escalation rules.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="text-[11px] font-semibold text-violet-300">
                Tenant-isolated
              </div>
              <p className="mt-1">
                Each tenant runs in its own lane; configs, logs, and workflows
                stay isolated.
              </p>
            </div>
          </div>
        </section>

        {/* Right: hero visual */}
        <section className="relative flex-1">
          <div className="pointer-events-none absolute -top-10 -right-10 h-60 w-60 rounded-full bg-emerald-400/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-10 h-52 w-52 rounded-full bg-violet-500/30 blur-3xl" />

          <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-emerald-500/30 backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-emerald-300/30 bg-slate-900/80">
              <Image
                src="/mindratech-brain.png"
                alt="Abstract neural interface"
                fill
                className="object-cover opacity-90"
                priority
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/20 via-transparent to-violet-400/25" />
                <div className="relative flex flex-col gap-1 px-3 py-3 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-300/90">
                    <span>Cici · TenantAlpha</span>
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      live
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-200">
                    “Calendar, briefs, tasks, and Celestia workflows wired and
                    governed. Ready for orders.”
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90">
                <Image
                  src="/mindratech-orbit.jpg"
                  alt="Orbiting nodes of the Celestia system"
                  width={400}
                  height={260}
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Simple anchor sections for later content */}
      <section
        id="celestia"
        className="mx-auto mt-16 max-w-6xl space-y-3 text-sm text-slate-200"
      >
        <h2 className="text-lg font-semibold text-slate-50">
          What Celestia (Cici) actually runs
        </h2>
        <p className="max-w-2xl text-slate-300/90">
          Calendar & meetings, email drafting, docs & briefs, task and incident
          tracking, and workflow triggers into your n8n / Render stack. All of
          it wrapped in tenant isolation and your governance rules.
        </p>
      </section>

      <section
        id="founders"
        className="mx-auto mt-12 max-w-6xl space-y-3 text-sm text-slate-200"
      >
        <h2 className="text-lg font-semibold text-slate-50">
          Built for founders who hate chaos
        </h2>
        <p className="max-w-2xl text-slate-300/90">
          Celestia is the system that remembers the things you shouldn&apos;t
          have to; enforces the standards you keep breaking; and keeps the
          company aligned with the principles you wrote when your head was
          clear.
        </p>
      </section>

      <section
        id="contact"
        className="mx-auto mt-16 mb-10 max-w-6xl rounded-2xl border border-emerald-300/30 bg-slate-950/80 p-6 text-sm text-slate-100 shadow-lg shadow-emerald-500/30"
      >
        <h2 className="text-base font-semibold text-emerald-300">
          Get Cici wired into your world
        </h2>
        <p className="mt-2 max-w-2xl text-slate-300/90">
          For now, contact is simple: reach out directly and we wire Cici to
          your stack the same way we wired TenantAlpha — governance first,
          workflows second, polish later.
        </p>
        <div className="mt-4 text-xs text-slate-300/90">
          <div>Email:{" "}
            <a
              href="mailto:jhous@mindratechllc.org"
              className="text-emerald-300 hover:underline"
            >
              jhous@mindratechllc.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
