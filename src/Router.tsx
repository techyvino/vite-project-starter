import { Navigate, NavLink, useRoutes } from 'react-router-dom';

import AuthLayout from './layout';

const Router = () => {
  const element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/',
          element: (
            <div className="">
              <h1>Home</h1>
              <NavLink to={'/about'}>About</NavLink>
              <NavLink to={'/login'}>Login</NavLink>
            </div>
          ),
        },
      ],
    },
    {
      path: '/about',
      element: (
        <div className="">
          <h1>About</h1>
          <NavLink to={'/'}>Home</NavLink>
        </div>
      ),
    },
    {
      path: '/login',
      element: (
        <div className="">
          <h1>Login</h1>
          <NavLink to={'/'}>Home</NavLink>
        </div>
      ),
    },
    {
      path: '*',
      element: <Navigate to={'/'} replace />,
    },
  ]);

  return element;
};

export default Router;
