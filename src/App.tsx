import { useState } from 'react';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router';

import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="mt-4">
          <Button onClick={() => setCount((prev) => prev + 1)}>
            count is {count}
          </Button>
          <div className="">
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      ),
    },
    {
      path: '/about',
      element: (
        <div>
          <p>About</p>
          <NavLink to="/">Home</NavLink>
        </div>
      ),
    },
  ]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-sky-500 hover:underline hover:text-current">
        Vite + React
      </h1>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
