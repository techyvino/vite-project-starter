import { NavLink, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Login</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Register</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
