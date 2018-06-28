import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import StyledMal from './components/Map/Map2'
import StyledMap from './components/Map/Map2';


const App = () => (
  <div>

    <Switch>
      <Route exact path="/" component={StyledMap} />
    </Switch>
  </div>
);

export default App;
