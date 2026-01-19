export default function Logs() {
  return (
    <div className="font-mono space-y-4">
      <h1 className="text-2xl sm:text-3xl text-green-400 font-bold">
        System Logs
      </h1>

      <div
        className="border border-green-500 rounded-xl bg-black/60
                   p-4 text-xs sm:text-sm
                   max-h-[60vh] overflow-y-auto"
      >
        {[
          "[10:45] Connection established",
          "[10:46] User admin logged in",
          "[10:47] Firewall check passed",
          "[10:48] Monitoring active",
          "[10:49] Data sync complete",
        ].map((log, i) => (
          <p key={i} className="border-b border-green-500/30 py-1">
            {log}
          </p>
        ))}
      </div>
    </div>
  );
}
