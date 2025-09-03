import { useState } from "react";
import { login } from "./api/api";
import Router from "next/router";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
      Router.push("/profile");
    } else {
      alert("Login inválido");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-zinc-900 shadow-xl rounded-2xl p-8 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <input
            className="bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200 font-medium cursor-pointer"
          >
            Entrar
          </button>
        </div>

        <p className="text-sm text-center text-gray-400 mt-6">
          <Link
            href="/"
            className="text-green-400 font-medium hover:underline cursor-pointer"
          >
            Quero me cadastrar
          </Link>
        </p>
      </div>
    </div>
  );
}
