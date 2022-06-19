import { Routes, Route } from "react-router-dom";
import { Nav } from "./pages/Nav/Nav";
import { Favorite, Main, Profile } from "./pages/pages";
import { SApp } from "./App.style";

function App() {
  return (
    <SApp>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Nav />
    </SApp>
  );
}

export default App;
