import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Heading from './Heading';
import AuthLayout from './layout';
import Router from './Router';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <AuthLayout />
        <Switch>
          {Router.map((route, index) => (
            <Route
              key={index}
              component={() => <Heading title={route?.title || ''} />}
              path={route?.path}
              exact={!!route?.exact}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
