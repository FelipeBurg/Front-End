import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full">
        oiie
        <Outlet />
      </main>
    </div>
  );
}

export default App;
