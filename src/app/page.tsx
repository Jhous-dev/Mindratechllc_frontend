import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 pb-16">
      {/* Hero */}
      <section className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 py-16 px-6 sm:px-10 lg:px-14">
        {/* layered background images */}
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
          <Image
            src="/mindratech-brain-ai.png"
            alt="Human–AI interface"
            fill
            priority
            className="object-cover object-left"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <Image
            src="/mindratech-orbit-core.jpg"
            alt="Orbital intelligence core"
            fill
            className="object-cover object-right"
          />
        </div>

        {/* gradient overlay to tie them together */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-950/70 to-slate-950/90" />

        <div className="relative z-10 max-w-xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-teal-300 uppercase">
            MindraTech LLC
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Human grit,{" "}
            <span className="bg-gradient-to-r from-teal-300 to-violet-400 bg-clip-text text-transparent">
              machine precision
            </span>
            .
          </h1>
          <p className="text-sm text-slate-200/80 sm:text-base">
            We’re building <strong>Celestia</strong> — an operational
            intelligence layer that runs calendars, workflows, and decisions
            with discipline. Exciting, but humble: no hype, just execution.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#celestia"
              className="rounded-full bg-teal-400/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-teal-300"
            >
              Explore Celestia
            </a>
            <a
              href="#founders"
              className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 hover:border-teal-300/80 hover:text-teal-200"
            >
              Founder’s message
            </a>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="mt-16 max-w-5xl space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Vision
        </h2>
        <p className="text-sm text-slate-200">
          Celestia is not a toy chatbot. It is an execution layer that encodes
          founder doctrine, runs repeatable workflows, and keeps a clean audit
          trail. We focus on reliability, clarity, and long-term leverage.
        </p>
      </section>

      {/* Celestia */}
      <section id="celestia" className="mt-12 max-w-5xl space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Celestia / Cici
        </h2>
        <p className="text-sm text-slate-200">
          Cici is the MindraTech executive operations agent. It schedules,
          drafts, triggers workflows, and logs every action. The goal is simple:
          give founders a system that never forgets and never hand-waves.
        </p>
      </section>

      {/* Founders */}
      <section id="founders" className="mt-12 max-w-5xl space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Founder’s message
        </h2>
        <p className="text-sm text-slate-200">
          MindraTech is built on ownership, merit, and radical honesty with
          respect. The stack, the workflows, and the automation all exist to
          reflect those principles in real operations.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-12 max-w-5xl space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Contact
        </h2>
        <p className="text-sm text-slate-200">
          For partnerships, pilots, or serious conversations about operational
          intelligence, reach out:{" "}
          <a
            href="mailto:jhous@mindratechllc.org"
            className="text-teal-300 underline-offset-2 hover:underline"
          >
            jhous@mindratechllc.org
          </a>
        </p>
      </section>
    </div>
  );
}
