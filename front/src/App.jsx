import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import FilterTheme from './components/FilterTheme';


const App = () => (
  <div>
    <h1>
      DAM PARK
    </h1>
    <Switch>
      <Route exact path="/" component={BottomNavigation} />
      <Route exact path="/filtertheme" component={FilterTheme} />
    </Switch>
  </div>
);

export default App;
