import { useEffect, useState } from "react";
import { getMe } from "./api/api";
import Router from "next/router";

export default function Profile() {
  interface User {
    id: string;
    email: string;
    createdAt?: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/login");
      return;
    }
    getMe(token).then(setUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    Router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-zinc-900 shadow-xl rounded-2xl p-8 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Meu Perfil
        </h1>

        {user ? (
          <div className="space-y-4 text-gray-200">
            <p>
              <span className="font-medium text-gray-400">ID:</span>{" "}
              {user.id}
            </p>
            <p>
              <span className="font-medium text-gray-400">Email:</span>{" "}
              {user.email}
            </p>
            {user.createdAt && (
              <p>
                <span className="font-medium text-gray-400">Criado em:</span>{" "}
                {new Date(user.createdAt).toLocaleDateString("pt-BR")}
              </p>
            )}
          </div>
        ) : (
          <p className="text-gray-400 text-center">Carregando informações...</p>
        )}

        <button
        onClick={handleLogout}
        className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition duration-200 font-medium cursor-pointer"
        >
        Logout
        </button>

      </div>
    </div>
  );
}
