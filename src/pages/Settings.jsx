export default function Settings() {
  return (
    <div className="font-mono space-y-4 max-w-xl">
      <h1 className="text-2xl sm:text-3xl text-green-400 font-bold">
        Settings
      </h1>

      <div className="border border-green-500 rounded-xl p-5 bg-black/60 space-y-5">
        <div>
          <label className="block text-sm text-green-300 mb-1">
            System Mode
          </label>
          <select className="w-full bg-black border border-green-500
                             text-green-400 px-4 py-2 rounded-lg">
            <option>Matrix</option>
            <option>Stealth</option>
            <option>Debug</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-green-300 mb-1">
            Security Level
          </label>
          <input
            type="range"
            min="1"
            max="10"
            className="w-full accent-green-500"
          />
        </div>
      </div>
    </div>
  );
}
