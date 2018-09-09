import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isEmpty, getVal } from 'react-redux-firebase';

import { hideLoginModal } from '../actions/AuthActions';

// import Routes from '../components/routes';
import Modal from '../components/Modal';
import Login from '../components/Login/Login';

const LoginContainer = (props) => {
  const { auth, show, hideLoginModal } = props;

  // Not logged in
  return (
    <Modal show={show} hide={hideLoginModal}>
      <Login />
    </Modal>
  );
};

const maptStateToProps = ({ firebase, auth }) => ({
  authError: getVal(firebase, 'authError'),
  auth: getVal(firebase, 'auth'),
  profile: getVal(firebase, 'profile'),
  show: auth.showModal,
});

const mapDispatchToprops = dispatch => ({
  hideLoginModal: () => dispatch(hideLoginModal()),
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
    mapDispatchToprops,
  ),
)(LoginContainer);
