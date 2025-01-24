import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthLayout from './layout';
import Router from './Router';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            {Router.map((route, index) => (
              <Route key={index} element={route?.element} path={route?.path} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
