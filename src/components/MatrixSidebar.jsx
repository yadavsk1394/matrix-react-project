import { NavLink, useNavigate } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: "🖥" },
  { name: "Users", path: "/users", icon: "👤" },
  { name: "Logs", path: "/logs", icon: "📜" },
  { name: "Settings", path: "/settings", icon: "⚙" },
];

export default function MatrixSidebar({ closeMenu }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth (future-proof)
    localStorage.removeItem("auth");
    closeMenu?.();
    navigate("/"); // 👈 Login page
  };

  return (
    <aside className="w-64 min-h-screen bg-black border-r border-green-500
                      shadow-[0_0_20px_#00ff00] flex flex-col">

      {/* Header */}
      <div className="p-6 text-center border-b border-green-500 relative">
        <h2 className="text-green-400 font-mono text-xl font-bold">
          MATRIX OS
        </h2>
        <p className="text-xs text-green-600 mt-1">
          Control Panel
        </p>

        <button
          onClick={closeMenu}
          className="absolute right-4 top-4 text-green-400 text-xl lg:hidden"
        >
          ✕
        </button>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-mono transition-all
               ${
                 isActive
                   ? "bg-green-500 text-black shadow-[0_0_15px_#00ff00]"
                   : "text-green-400 hover:bg-green-500/20"
               }`
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="m-4 px-4 py-3 rounded-lg font-mono
                   text-red-400 border border-red-500
                   hover:bg-red-500 hover:text-black
                   transition-all"
      >
        🚪 LOGOUT
      </button>
    </aside>
  );
}
