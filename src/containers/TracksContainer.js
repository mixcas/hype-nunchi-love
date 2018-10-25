import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

// import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import TracksContent from 'components/Tracks/TracksContent';

const TracksContainer = ({ tracks }) => (
  <section id="tracks">
    {/* <SubscriptionsHeader /> */}
    <TracksContent tracks={tracks} />
  </section>
);

const maptStateToProps = ({ firebase: { ordered: { tracks }}}) => ({
  tracks,
});

export default compose(
  firebaseConnect([{
    path: 'tracks',
    queryParams: ['orderByChild=status', `limitToLast=30`],
  }]),
  connect(
    maptStateToProps,
  ),
)(TracksContainer);
