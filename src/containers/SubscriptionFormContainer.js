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

const maptStateToProps = ({ id, firebase, subscriptionForm }) => ({
  subscription: () => id ? getVal(firebase, 'subscriptions') : null,
  formState: subscriptionForm,
});

const mapDispatchToProps = dispatch => ({
  submitForm: data  => dispatch({
    type: 'SUBMIT_SUBSCRIPTION_FORM',
    data,
  }),
  onUrlChange: data => dispatch(urlChange(data)),
  onRegexChange: data => dispatch(regexChange(data)),
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
    mapDispatchToProps,
  ),
)(SubscriptionFormContainer);
