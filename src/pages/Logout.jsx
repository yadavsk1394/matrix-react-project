export default function Logout() {
  return (
    <div className="font-mono space-y-4">
      <h1 className="text-2xl sm:text-3xl text-green-400 font-bold">
        Logout
      </h1>

      <div
        className="border border-green-500 rounded-xl bg-black/60
                   p-4 text-xs sm:text-sm
                   max-h-[60vh] overflow-y-auto"
      >
       <a href="/login" className="flex items-center space-x-2 text-green-400
                           hover:text-red-400 transition-colors"
        >
          <span className="text-2xl">🚪</span>
          <span className="font-bold">Go To Login</span>
        </a>
      </div>
    </div>
  );
}
