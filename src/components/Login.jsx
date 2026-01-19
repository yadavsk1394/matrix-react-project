import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Force dark mode (Matrix style)
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      navigate("/dashboard");
    } else {
      setError("ACCESS DENIED");
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center relative overflow-hidden">

      {/* Matrix Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.15),transparent_70%)] animate-pulse"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl
                      bg-black/60 border border-green-500
                      rounded-2xl shadow-[0_0_40px_#00ff00]
                      p-8">

        <h1 className="text-3xl font-mono font-bold text-center mb-2">
          SYSTEM LOGIN
        </h1>
        <p className="text-center text-green-300 text-sm mb-6">
          Enter credentials to access the Matrix
        </p>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4 animate-pulse">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-mono">USERNAME</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg
                         bg-black border border-green-500
                         text-green-400 font-mono
                         focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="text-sm font-mono">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg
                         bg-black border border-green-500
                         text-green-400 font-mono
                         focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-mono text-black
                       bg-green-400 hover:bg-green-300
                       shadow-[0_0_20px_#00ff00]
                       transition-all duration-300"
          >
            CONNECT
          </button>
        </form>

        <p className="text-xs text-green-600 text-center mt-6 font-mono">
          © MATRIX SYSTEM v1.0
        </p>
      </div>
    </div>
  );
}
