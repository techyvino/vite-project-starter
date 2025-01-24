import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-sky-500 hover:underline hover:text-current">
        Vite + React
      </h1>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
