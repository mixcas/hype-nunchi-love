import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

// ACTIONS
import { urlChange, regexChange } from 'actions/SubscriptionFormActions';

// COMPONENTS
import SubscriptionForm from 'components/Subscriptions/SubscriptionForm';

const SubscriptionFormContainer = (props) => (
  <SubscriptionForm {...props} />
);

export default compose(
  firebaseConnect(),
)(SubscriptionFormContainer);
