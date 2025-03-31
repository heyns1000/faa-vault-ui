export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-5xl font-bold">🛡 FAA ZONE</h1>
      <p className="mt-6 text-lg">OmniDrop Activated. Welcome to the Vault.</p>
      <div className="mt-10 space-y-3">
        <a href="/index" className="underline text-blue-500">📂 Enter FAA Index</a>
        <a href="/meta" className="underline text-purple-500">🔍 Meta Identity</a>
        <a href="/vault" className="underline text-green-500">🔐 Vault Signal Logs</a>
      </div>
    </div>
  );
}
