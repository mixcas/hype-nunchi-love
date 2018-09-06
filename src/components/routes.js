import React, { Component } from 'react';
import { Route } from 'react-router';

import Login from './Login/Login';

const Routes = () => (
  <div>
    <Route exact path="/" component={() => 'Hola'} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Routes;
