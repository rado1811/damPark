import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StyledMap from './components/Map/Map2';
import Loading from './components/Loading';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wait: false,

    };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ wait: true }); }, 3000);
  }

  render() {
    return (
      <div>
        {(this.state.wait === false)
          ? <Loading />
          : (
            <Switch>
              <Route exact path="/" component={StyledMap} />
            </Switch>
          )
        }
      </div>
    );
  }
}


export default App;
