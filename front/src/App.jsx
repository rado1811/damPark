import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import AppBar from './components/AppBar';


const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route exact path="/" component={BottomNavigation} />
    </Switch>
  </div>
);

export default App;
