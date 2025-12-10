export default function CiciConsole() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Cici · Celestia Control Surface
        </h1>
        <p className="text-sm md:text-base text-slate-300/90 mb-6">
          This will become the founder-facing console for Celestia — where intents, workflows,
          and governance come together into one operational surface.
        </p>
        <p className="text-xs text-slate-400">
          For now, this is a placeholder while we wire Lindy, n8n, Render, and Google Workspace into a
          cohesive harness.
        </p>
      </div>
    </main>
  );
}
