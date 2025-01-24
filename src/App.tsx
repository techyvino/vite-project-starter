import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            component={() => (
              <div className="flex flex-col items-center justify-center">
                <h1>Home</h1>
                <Link to="/sf">Login</Link>
              </div>
            )}
          />
          <Route
            path={'/sf'}
            component={() => (
              <div className="flex flex-col items-center justify-center">
                <h1>Salesforce</h1>
                <Link to="/">Home</Link>
              </div>
            )}
          />
          <Route
            path={'/about'}
            component={() => (
              <div className="flex flex-col items-center justify-center">
                <h1>About</h1>
                <Link to="/">Home</Link>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
