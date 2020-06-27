import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Default from '../Default/';
import CreateCheck from '../CreateCheck';
import EditCheck from '../EditCheck';
import Check from '../Check';
import CreateNotification from '../CreateNotification';
import HealthDashboard from '../HealthDashboard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/check/create" component={CreateCheck} />
        <Route exact path="/check/:checkId" component={Check} />
        <Route exact path="/check/:checkId/update" component={EditCheck} />
        <Route exact path="/check/:checkId/notification/create" component={CreateNotification} />
        <Route exact path="/health" component={HealthDashboard} />
        <Route exact path="/" component={Default} />
      </Switch>
    </Router>
  )
}
