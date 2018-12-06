import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect } from 'react-redux-firebase';
import Loading from 'components/Loading'

// import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import Playlist from 'components/Playlist/Playlist.js';

const HomeContainer = ({ playlist }) => {
  // Message for if todos are loading
  if(!isLoaded(playlist)) {
    return <Loading/>
  }

  return (
    <section id="tracks">
      <Playlist tracks={playlist} />
    </section>
  )
}

const maptStateToProps = ({ firebase }) => {
  return ({
    playlist: firebase.ordered.currentPlaylist
  });
}

export default compose(
  firebaseConnect([{
    path: 'chart/latest/tracks',
    storeAs: 'currentPlaylist',
    queryParams: ['limitToLast=30', 'orderByChild=published'],
  }]),
  connect(
    maptStateToProps,
  ),
)(HomeContainer);
