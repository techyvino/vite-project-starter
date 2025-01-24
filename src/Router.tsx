import { Navigate, useRoutes } from 'react-router-dom';

import AuthLayout from './layout';

const Router = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '/',
          element: (
            <div className="">
              <h1>Home</h1>
            </div>
          ),
        },
        {
          path: '/about',
          element: (
            <div className="">
              <h1>About</h1>
            </div>
          ),
        },
        {
          path: '/profile',
          element: (
            <div className="">
              <h1>Profile</h1>
            </div>
          ),
        },
        {
          path: '*',
          element: <Navigate to={'/'} replace />,
        },
      ],
    },
  ]);

  return element;
};

export default Router;
