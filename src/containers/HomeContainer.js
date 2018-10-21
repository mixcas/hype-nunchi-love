import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

// import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import Playlist from 'components/Playlist/Playlist.js';

const HomeContainer = ({ tracks }) => (
  <section id="tracks">
    <Playlist tracks={tracks} />
  </section>
);

const maptStateToProps = ({ firebase }) => ({
  tracks: getVal(firebase, 'ordered/tracks'),
});

export default compose(
  firebaseConnect([{
    path: 'tracks',
    queryParams: ['orderByChild=status', `equalTo=published`],
  }]),
  connect(
    maptStateToProps,
  ),
)(HomeContainer);
