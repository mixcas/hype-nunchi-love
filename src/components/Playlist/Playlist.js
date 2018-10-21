import React, { Component } from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import { playTrack } from 'actions/PlayerActions'
import PlaylistItem from 'components/Playlist/PlaylistItem'

const PlaylistList = ({ tracks, playTrack }) => {
  // Message for if todos are loading
  if(!isLoaded(tracks)) {
    return <span>Loading...</span>
  }

  // Message if todos are empty
  if(isEmpty(tracks)) {
    return <span>No Tracks Found</span>
  }

  return (
    <div className="container margin-top-basic margin-bottom-basic">
      {tracks.reverse().map( (item, index) => (
        <PlaylistItem track={item.value} key={item.key} onClick={playTrack} />
      ))}
    </div>
  )
}

const mapDipatchToProps = (dispatch) => ({
  playTrack: (url) => {
    dispatch(playTrack(url))
  }
})

export default compose(
  connect(
    null,
    mapDipatchToProps,
  ),
)(PlaylistList);
