import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

// import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import TracksContent from 'components/Tracks/TracksContent';

const TracksContainer = ({ tracks }) => (
  <section id="tracks">
    {/* <SubscriptionsHeader /> */}
    <TracksContent tracks={tracks} />
  </section>
);

const maptStateToProps = ({ firebase }) => ({
  tracks: getVal(firebase, 'ordered/tracks'),
});

export default compose(
  firebaseConnect([{
    path: 'tracks',
    queryParams: ['orderByChild=published'],
  }]),
  connect(
    maptStateToProps,
  ),
)(TracksContainer);
