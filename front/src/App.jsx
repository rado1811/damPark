import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';


const App = () => (
  <div>
    <h1>
      DAM PARK
    </h1>
    <Switch>
      <Route exact path="/" component={BottomNavigation} />
    </Switch>
  </div>
);

export default App;
