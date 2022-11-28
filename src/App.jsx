import { Routes, Route } from "react-router-dom";

import { Favorite, MyLocation, AllLocation } from "pages/index";
import Navigation from "./components/UI/Navigation/Navigation";


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MyLocation />} />
        <Route path="/all" element={<AllLocation />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
