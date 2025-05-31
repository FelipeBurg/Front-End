import React, { useState } from "react";

export default function LoginDuolingoTailwind() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login com: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500 font-sans">
      <div className="bg-white rounded-xl shadow-lg p-10 w-80 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Bem-vindo ao Duolingo
        </h1>
        <p className="text-gray-600 mb-8 text-sm">
          Faça login para continuar aprendendo
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 rounded-lg"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-gray-600 text-sm">
          Não tem uma conta?{" "}
          <a href="#" className="text-green-600 font-semibold hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
