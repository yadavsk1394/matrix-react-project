import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout"; 
import AddUser from "./pages/users/AddUser.jsx";
import AddRole from "./pages/users/AddRole.jsx";
import System from "./pages/logs/System.jsx";
import Securitylog from "./pages/logs/Securitylog.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/roles" element={<AddRole />} />
        <Route path="/logs/system" element={<System />} />
        <Route path="/logs/securitylog" element={<Securitylog />} />

      </Route>
    </Routes>
  );
}
