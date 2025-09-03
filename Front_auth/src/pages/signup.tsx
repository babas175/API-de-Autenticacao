import { useState } from "react";
import { signup } from "./api/api";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async () => {
    if (password !== confirm) {
      alert("As senhas não conferem");
      return;
    }
    await signup(email, password);
    alert("Usuário criado! Agora faça login.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-zinc-900 shadow-xl rounded-2xl p-8 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Criar Conta
        </h1>

        <div className="flex flex-col gap-4">
          <input
            className="bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirmar Senha"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 font-medium cursor-pointer"
          >
            Cadastrar
          </button>
        </div>

        <p className="text-sm text-center text-gray-400 mt-6">
          Já tem conta?{" "}
          <a href="/login" className="text-blue-400 font-medium hover:underline cursor-pointer">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
