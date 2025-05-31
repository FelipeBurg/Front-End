import React, { useState } from "react";

export default function LoginDuolingoTailwind() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login com: ${email}`);
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans flex flex-col items-center">
        {/* Espaço antes da barra */}
        <div className="h-12"></div>
        {/* Barra cinza mais grossa, menor largura e com bordas arredondadas */}
        <div className="h-4 w-200 bg-gray-300 rounded-full mb-2"></div>{" "}
        <div className="flex justify-center flex-grow px-4 w-full max-w-md">
          <div className="bg-white rounded-xl p-14 w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Bem-vindo ao Bloop
            </h1>
            <p className="text-gray-600 mb-10 text-sm">
              Faça login para continuar
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
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

            <p className="mt-12 text-gray-600 text-sm">
              Não tem uma conta?{" "}
              <a
                href="#"
                className="text-green-600 font-semibold hover:underline"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
