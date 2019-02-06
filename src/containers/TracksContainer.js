import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

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

const maptStateToProps = ({ firestore: { ordered: { tracks }}}) => ({
  tracks,
});

export default compose(
  connect(maptStateToPropsBefore),
  firestoreConnect( ({ page }) => [{
    collection: 'tracks',
    orderBy: ['published', 'desc'],
    limit: page * 60,
  }]),
  connect(
    maptStateToProps,
  ),
)(TracksContainer);
