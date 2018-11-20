import React from 'react';
import { Switch, Redirect } from 'react-router';

import { LayoutRouter, MainLayout } from '../../components/Layout';

import HomePage from '../HomePage/HomePage';

const App = () => (
  <Switch>
    <LayoutRouter
      exact
      path="/"
      layout={MainLayout}
      component={HomePage}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

export default App;
