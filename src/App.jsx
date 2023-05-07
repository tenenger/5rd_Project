import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Favorite, MyLocation, AllLocation } from './pages';
import Navigation from './components/UI/Navigation/Navigation';

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('favorite')) localStorage.setItem('favorite', '');
  }, []);

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
};

export default App;
