import { Routes, Route } from "react-router-dom";

import { Nav } from "pages/Nav/Nav";
import { Favorite, MyLocation, AllLocation } from "pages/pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyLocation />} />
        <Route path="/all" element={<AllLocation />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
