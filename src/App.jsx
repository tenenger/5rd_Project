import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Root, Favorite, Main, Login, Join, JoinComplete } from 'pages';
import { PATH } from 'constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: PATH.MAIN,
        index: true,
        element: <Main />,
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
      {
        path: PATH.JOIN_COMPLETE,
        element: <JoinComplete />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
