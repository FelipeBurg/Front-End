import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-24 h-24 hover:drop-shadow-xl transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-24 h-24 hover:drop-shadow-xl transition-transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
