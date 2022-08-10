import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from 'util/asyncComponent';

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}Gtfs`} component={asyncComponent(() => import('./GTFS'))} />
      <Route path={`${match.url}Transims`} component={asyncComponent(() => import('./Transims'))} />
      <Route path={`${match.url}Page1`} component={asyncComponent(() => import('./Page1'))} />
    </Switch>
  </div>
);

export default App;
