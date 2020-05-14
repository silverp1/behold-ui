import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Default from '../Default/';
import CreateCheck from '../CreateCheck';
import Check from '../Check';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/check/create">
          <CreateCheck />
        </Route>
        <Route path="/check/:checkId">
          <Check />
        </Route>
        <Route path="/">
          <Default />
        </Route>
      </Switch>
    </Router>
  )
}
