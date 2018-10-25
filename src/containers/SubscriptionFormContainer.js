import React from 'react';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

// COMPONENTS
import SubscriptionForm from 'components/Subscriptions/SubscriptionForm';

const SubscriptionFormContainer = (props) => (
  <SubscriptionForm {...props} />
);

export default compose(
  firebaseConnect(),
)(SubscriptionFormContainer);
