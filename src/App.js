import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import './containers/Home/Home.scss';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" exact component={Home} />
        </Switch>
      </AppLayout>
    );
  }
}

export default App;
