import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <main className="flex pt-16">
        <Nav />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
