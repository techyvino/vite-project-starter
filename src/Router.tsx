import { Redirect } from 'react-router-dom';

export const Router = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    element: (
      <div className="">
        <h1>Home</h1>
      </div>
    ),
  },
  {
    path: '/about',
    title: 'About',
    element: (
      <div className="">
        <h1>About</h1>
      </div>
    ),
  },
  {
    path: '/profile',
    title: 'Profile',
    element: (
      <div className="">
        <h1>Profile</h1>
      </div>
    ),
  },
  {
    path: '*',
    title: 'Not Found',
    element: <Redirect to={'/'} />,
  },
];

export default Router;
