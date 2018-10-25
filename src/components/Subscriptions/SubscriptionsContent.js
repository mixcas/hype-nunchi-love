import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import SubscriptionFormContainer from 'containers/SubscriptionFormContainer';
import SubscriptionsList from 'components/Subscriptions/SubscriptionsList'

const SubscriptionsContent = ({ subscriptions, classes }) => (
  <section id='admin-section-content' className={`grid-row justify-end padding-top-micro padding-bottom-micro`}>
    <Switch>
      <Route exact path='/admin/subscriptions' render={() => <SubscriptionsList subscriptions={subscriptions} />} />
      <Route exact path='/admin/subscriptions/add' component={SubscriptionFormContainer} />
    </Switch>
  </section>
);

export default SubscriptionsContent;
