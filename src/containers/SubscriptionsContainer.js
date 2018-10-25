import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import SubscriptionsContent from 'components/Subscriptions/SubscriptionsContent';

const SubscriptionsContainer = ({ subscriptions }) => (
  <section id="subscriptions">
    <SubscriptionsHeader />
    <SubscriptionsContent subscriptions={subscriptions} />
  </section>
);

const maptStateToProps = ({ firebase: { ordered: { subscriptions }}}) => ({
  subscriptions,
});

export default compose(
  firebaseConnect([
    'subscriptions',
  ]),
  connect(
    maptStateToProps,
  ),
)(SubscriptionsContainer);
