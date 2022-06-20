import { Routes, Route } from "react-router-dom";
import { Nav } from "./pages/Nav/Nav";
import { Favorite, Main, AllLocation } from "./pages/pages";
import { SRoutes } from "./App.style";

function App() {
  return (
    <>
      <SRoutes>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all" element={<AllLocation />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </SRoutes>
      <Nav />
    </>
  );
}

export default App;
