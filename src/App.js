import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';

import history from './history';
import appRoutes from './app-routes';
import Header from './components/header';
import SideBar from './components/side-bar';
import Dashboard from './components/dashboard';

const App = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          render={() => (
            <div className="app__wrapper">
              <SideBar />
              <div className="app__header-content-container">
                <Header />
                <div className="app__content-container">
                  <Route
                    path={appRoutes.home}
                    component={() => <div>Home</div>}
                  />
                  <Route path={appRoutes.dashboard} component={Dashboard} />
                </div>
              </div>
            </div>
          )}
        />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
