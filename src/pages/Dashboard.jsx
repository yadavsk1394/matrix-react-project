export default function Dashboard() {
  return (
    <div className="font-mono space-y-6">
      <h1 className="text-2xl sm:text-3xl text-green-400 font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "SYSTEM STATUS", value: "ONLINE" },
          { label: "ACTIVE USERS", value: "3" },
          { label: "SECURITY LEVEL", value: "MAX" },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-green-500 rounded-xl p-5
                       bg-black/60 shadow-[0_0_15px_#00ff00]"
          >
            <p className="text-xs text-green-300">{item.label}</p>
            <p className="text-lg sm:text-xl text-green-400 font-bold mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
