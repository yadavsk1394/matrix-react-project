import { useState } from "react";

export default function AddUser() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USER DATA:", form);

    // API later
    alert("User Added Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-black border border-green-500
                      rounded-xl p-6 shadow-[0_0_25px_#00ff00]">

        <h2 className="text-green-400 text-xl font-mono font-bold mb-6 text-center">
          ➕ ADD USER
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Username"
            required
            value={form.name}
            onChange={handleChange}
            className="matrix-input"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="matrix-input"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="matrix-input"
          />

          {/* Role */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="matrix-input"
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500
                       text-black font-mono font-bold
                       hover:shadow-[0_0_25px_#00ff00]
                       transition"
          >
            CREATE USER
          </button>

        </form>

      </div>
    </div>
  );
}
