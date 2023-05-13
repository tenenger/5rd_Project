import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Root, Favorite, MyLocation, AllLocation, Login, Join } from './pages';
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
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
      {
        path: PATH.JOIN,
        element: <Join />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
