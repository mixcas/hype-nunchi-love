import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SubscriptionsContainer from 'containers/SubscriptionsContainer';

const AdminSection = (props) => (
  <Switch>
    <Route path='/admin/subscriptions' component={SubscriptionsContainer} />
    <Route exact path='/admin/songs' component={() => 'Songs'} />
    <Route exact path='/admin/users' component={() => 'Users'} />
    <Route exact path='/admin/settings' component={() => 'Settings'} />
  </Switch>
);

export default AdminSection;