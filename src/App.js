import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import appRoutes from './app-routes';
import Dashboard from './components/dashboard';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        path="/"
        render={() => (
          <React.Fragment>
            <Route path={appRoutes.home} component={() => <div>Home</div>} />
            <Route path={appRoutes.dashboard} component={Dashboard} />
          </React.Fragment>
        )}
      />
    </Switch>
  </Router>
);

export default App;
