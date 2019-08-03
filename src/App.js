import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import appRoutes from './app-routes';
import Header from './components/header';
import AppContent from './components/app-content';
import Dashboard from './components/dashboard';

const App = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          render={() => (
            <React.Fragment>
              <Header />
              <AppContent>
                <Route
                  path={appRoutes.home}
                  component={() => <div>Home</div>}
                />
                <Route path={appRoutes.dashboard} component={Dashboard} />
              </AppContent>
            </React.Fragment>
          )}
        />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
