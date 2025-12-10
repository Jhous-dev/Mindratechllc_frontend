// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full py-16">
        {/* Top badge */}
        <div className="mb-6 inline-flex rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
          MindraTech LLC · Celestia / Cici
        </div>

        {/* Hero copy */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Operational intelligence for founders who refuse chaos.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-300/90 max-w-2xl mb-8">
          MindraTech is building Celestia—an enterprise-grade execution layer that runs on your
          calendar, your workflows, and your governance. Cici is the front-facing agent that
          turns founder intent into deterministic action.
        </p>

        {/* Two-column quick value props */}
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <h2 className="text-sm font-semibold mb-2 text-slate-100">
              What&apos;s live today
            </h2>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-300/90">
              <li>· Static frontend deployed on Render</li>
              <li>· Custom domain via Cloudflare: mindratechllc.org</li>
              <li>· TenantAlpha & Celestia EA provisioned and logging</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <h2 className="text-sm font-semibold mb-2 text-slate-100">
              Where we&apos;re taking it
            </h2>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-300/90">
              <li>· Cici: founder-aligned control surface for Celestia</li>
              <li>· Multi-tenant operational consoles for clients</li>
              <li>· Deep integration with Lindy, n8n, Render, and Google Workspace</li>
            </ul>
          </div>
        </div>

        {/* Simple CTA row */}
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          <span className="inline-flex items-center rounded-full border border-emerald-500/70 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-200">
            Status: Internal build in progress
          </span>
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300/90">
            Cici is being trained on the Founder&apos;s doctrine.
          </span>
        </div>
      </div>
    </main>
  );
}
