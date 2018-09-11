import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

import AdminHeader from '../components/AdminHeader';

const AdminContainer = (props) => {
  return (
    <section>
      <AdminHeader />
    </section>
  );
};

const maptStateToProps = ({ firebase }) => ({
  authError: getVal(firebase, 'authError'),
  auth: getVal(firebase, 'auth'),
  profile: getVal(firebase, 'profile')
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
  ),
)(AdminContainer);
