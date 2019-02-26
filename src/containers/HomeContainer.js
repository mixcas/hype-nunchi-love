import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import Loading from 'components/Loading'

// import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import Playlist from 'components/Playlist/Playlist.js';

const HomeContainer = ({ tracks }) => {
  // Message for if todos are loading
  if(!isLoaded(tracks)) {
    return <Loading/>
  }

  return (
    <section id="tracks">
      <Playlist tracks={tracks} />
    </section>
  )
}

const maptStateToPropsBefore = ({ playlist }) => {
  return ({
    page: playlist.page,
  });
}

const maptStateToProps = ({ firebase, firestore }) => {
  return ({
    tracks: firestore.ordered.currentPlaylist,
  });
}

export default compose(
  connect(maptStateToPropsBefore),
  firestoreConnect( ({ page }) => {
    const oneMonthAgoUnix = new Date() - 2592000000
    console.log(oneMonthAgoUnix)
    return [{
      collection: 'tracks',
      orderBy: ['publishedTimestamp', 'desc'],
      where: [
        ['publishedTimestamp', '>=', String(oneMonthAgoUnix)],
        ['status', '==', 'published'],
      ],
      limit: page * 30,
      storeAs: 'currentPlaylist',
    }]
  }),
  connect(maptStateToProps),
)(HomeContainer);
