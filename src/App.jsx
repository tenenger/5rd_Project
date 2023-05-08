import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Favorite, MyLocation, AllLocation } from './pages';
import Root from './pages/Root';
import { PATH } from './constants/path';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: PATH.MY_LOCATION,
        index: true,
        element: <MyLocation />,
      },
      {
        path: PATH.ALL_LOCATION,
        element: <AllLocation />,
      },
      {
        path: PATH.FAVORITES,
        element: <Favorite />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
