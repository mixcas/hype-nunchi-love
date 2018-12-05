import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect } from 'react-redux-firebase';
import Loading from 'components/Loading'

// import SubscriptionsHeader from 'components/Subscriptions/SubscriptionsHeader';
import Playlist from 'components/Playlist/Playlist.js';

const HomeContainer = ({ chart }) => {
  // Message for if todos are loading
  if(!isLoaded(chart)) {
    return <Loading/>
  }

  return (
    <section id="tracks">
      <Playlist tracks={chart.latest.tracks} />
    </section>
  )
}

const maptStateToProps = ({ firebase }) => {
  return ({
    chart: firebase.ordered.chart
  });
}

export default compose(
  firebaseConnect([{
    path: 'chart/latest/tracks',
    queryParams: ['limitToLast=30', 'orderByChild=published'],
  }]),
  connect(
    maptStateToProps,
  ),
)(HomeContainer);
