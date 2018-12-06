import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect } from 'react-redux-firebase';
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

const maptStateToProps = ({ firebase }) => {
  return ({
    tracks: firebase.ordered.currentPlaylist,
  });
}

export default compose(
  connect(maptStateToPropsBefore),
  firebaseConnect( ({ page }) => [{
      path: 'chart/latest/tracks',
      storeAs: 'currentPlaylist',
      queryParams: [`limitToLast=${page * 30}`, 'orderByChild=published'],
    }]
  ),
  connect(maptStateToProps),
)(HomeContainer);
