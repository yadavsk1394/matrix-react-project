import { useState } from "react";
import { Outlet } from "react-router-dom";
import MatrixSidebar from "../components/MatrixSidebar";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-black text-green-400 min-h-screen">

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-20 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static z-30
          w-64 min-h-screen
          bg-black
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <MatrixSidebar closeMenu={() => setOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Bar (Mobile Only) */}
        <header className="lg:hidden flex items-center gap-4
                           border-b border-green-500 p-4">
          <button
            onClick={() => setOpen(true)}
            className="text-2xl text-green-400"
          >
            ☰
          </button>
          <h1 className="font-mono text-lg">MATRIX PANEL</h1>
        </header>

        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
