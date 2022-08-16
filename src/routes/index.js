import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from 'util/asyncComponent';

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}Page1`} component={asyncComponent(() => import('./Page1'))} />
      <Route
        path={`${match.url}Anomaly_Decomposition`}
        component={asyncComponent(() => import('./Anomaly_Decomposition'))}
      />
      <Route path={`${match.url}Trends`} component={asyncComponent(() => import('./Trends'))} />
      <Route
        path={`${match.url}Anomaly_Details`}
        component={asyncComponent(() => import('./Anomaly_Details'))}
      />
    </Switch>
  </div>
);

export default App;
