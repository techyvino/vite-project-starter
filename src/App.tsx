import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
