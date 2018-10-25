import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import AdminHeader from 'components/Admin/AdminHeader';
import AdminSection from 'components/Admin/AdminSection';

const AdminContainer = (props) => {
  return (
    <section>
      <AdminHeader />
      <AdminSection />
    </section>
  );
};

const maptStateToProps = ({ router }) => ({
  routePathname: router.location.pathname,
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
  ),
)(AdminContainer);
