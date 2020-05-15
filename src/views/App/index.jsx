import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Default from '../Default/';
import CreateCheck from '../CreateCheck';
import Check from '../Check';
import CreateNotification from '../CreateNotification';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/check/create" component={CreateCheck} />
        <Route exact path="/check/:checkId" component={Check} />
        <Route exact path="/check/:checkId/notification/create" component={CreateNotification} />
        <Route exact path="/" component={Default} />
      </Switch>
    </Router>
  )
}
