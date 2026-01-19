export default function Users() {
  return (
    <div className="font-mono space-y-4">
      <h1 className="text-2xl sm:text-3xl text-green-400 font-bold">
        Users
      </h1>

      <div className="border border-green-500 rounded-xl bg-black/60
                      overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-green-500 text-black">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-green-300">
            <tr className="border-t border-green-500">
              <td className="p-3">admin</td>
              <td className="p-3 text-green-400">ONLINE</td>
            </tr>
            <tr className="border-t border-green-500">
              <td className="p-3">neo</td>
              <td className="p-3 text-red-400">OFFLINE</td>
            </tr>
            <tr className="border-t border-green-500">
              <td className="p-3">trinity</td>
              <td className="p-3 text-green-400">ONLINE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
