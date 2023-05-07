import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Favorite, MyLocation, AllLocation } from './pages';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        index: true,
        element: <MyLocation />,
      },
      {
        path: '/all',
        element: <AllLocation />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('favorite')) localStorage.setItem('favorite', '');
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
