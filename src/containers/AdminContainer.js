import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

import AdminHeader from '../components/AdminHeader';
import AdminSection from '../components/AdminSection';

const AdminContainer = (props) => {
  return (
    <section>
      <AdminHeader />
      <AdminSection />
    </section>
  );
};

const maptStateToProps = ({ firebase }) => ({
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
  ),
)(AdminContainer);
