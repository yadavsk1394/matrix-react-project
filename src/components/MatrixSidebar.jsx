import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "🖥",
  },
  {
    name: "Users",
    icon: "👤",
    children: [
      { name: "All Users", path: "/users" },
      { name: "Add User", path: "/users/add" },
      { name: "Roles", path: "/users/roles" },
    ],
  },
  {
    name: "Logs",
    icon: "📜",
    children: [
      { name: "System Logs", path: "/logs/system" },
      { name: "Security Logs", path: "/logs/securitylog" },
    ],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "⚙",
  },
];

export default function MatrixSidebar({ closeMenu }) {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    closeMenu?.();
    navigate("/");
  };

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
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

      {/* Navigation */}
      <nav className="p-4 space-y-2 flex-1 overflow-y-auto">

        {menu.map((item) => (

          <div key={item.name}>

            {/* SINGLE LINK */}
            {!item.children ? (
              <NavLink
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
            ) : (

              /* DROPDOWN MENU */
              <>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="w-full flex items-center justify-between
                             px-4 py-3 rounded-lg font-mono
                             text-green-400 hover:bg-green-500/20 transition"
                >
                  <div className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    {item.name}
                  </div>

                  <span
                    className={`transition-transform duration-300
                    ${openMenu === item.name ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                {/* SUB MENU */}
                <div
                  className={`ml-6 mt-2 space-y-1 overflow-hidden transition-all duration-300
                    ${openMenu === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-md font-mono text-sm transition-all
                        ${
                          isActive
                            ? "bg-green-500 text-black shadow-[0_0_10px_#00ff00]"
                            : "text-green-300 hover:bg-green-500/20"
                        }`
                      }
                    >
                      ▸ {sub.name}
                    </NavLink>
                  ))}
                </div>
              </>
            )}

          </div>
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
