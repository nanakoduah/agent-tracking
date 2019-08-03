import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={() => <div>Base set up</div>} />
    </Switch>
  </Router>
);

export default App;
