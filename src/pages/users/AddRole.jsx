import { useState } from "react";

export default function AddRole() {

  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState([]);

  const permList = [
    "Read Users",
    "Write Users",
    "Delete Users",
    "View Logs",
    "System Settings",
  ];

  const togglePermission = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ROLE DATA:", role, permissions);
    alert("Role Created Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-black border border-green-500
                      rounded-xl p-6 shadow-[0_0_25px_#00ff00]">

        <h2 className="text-green-400 text-xl font-mono font-bold mb-6 text-center">
          ⚙ CREATE ROLE
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Role Name */}
          <input
            type="text"
            placeholder="Role Name"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="matrix-input"
          />

          {/* Permissions */}
          <div className="space-y-2">

            <p className="text-green-400 font-mono text-sm">
              Permissions
            </p>

            {permList.map((perm) => (
              <label
                key={perm}
                className="flex items-center gap-3 text-green-300 font-mono text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={permissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                  className="accent-green-500"
                />

                {perm}
              </label>
            ))}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500
                       text-black font-mono font-bold
                       hover:shadow-[0_0_25px_#00ff00]
                       transition"
          >
            SAVE ROLE
          </button>

        </form>

      </div>
    </div>
  );
}
