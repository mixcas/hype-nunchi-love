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

const maptStateToPropsBefore = ({ adminTracks }) => {
  return ({
    page: adminTracks.page,
  });
}

const maptStateToProps = ({ firebase: { ordered: { tracks }}}) => ({
  tracks,
});

export default compose(
  connect(maptStateToPropsBefore),
  firebaseConnect( ({ page }) => [{
    path: 'tracks',
    queryParams: [`limitToLast=${page * 30}`, 'orderByChild=published'],
  }]),
  connect(
    maptStateToProps,
  ),
)(TracksContainer);
