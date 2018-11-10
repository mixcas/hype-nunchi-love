import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import { playTrack } from 'actions/PlayerActions'
import PlaylistItem from 'components/Playlist/PlaylistItem'

const sortBy = (a, b, param) => {
  const aParam = a.value[param]
  const bParam = b.value[param]

  if(aParam < bParam) return 1
  if(aParam > bParam) return -1
  return 0
}

const sortByPublishedDate = (a,b) => sortBy(a,b,'published')

const PlaylistList = ({ player, tracks, playTrack }) => {
  // Message for if todos are loading
  if(!isLoaded(tracks)) {
    return <span>Loading...</span>
  }

  // Message if todos are empty
  if(isEmpty(tracks)) {
    return <span>No Tracks Found</span>
  }

  return (
    <div className="container margin-top-small margin-bottom-basic">
      {tracks.sort(sortByPublishedDate).map( (item, index) => (
        <PlaylistItem track={item.value} key={item.key} onClick={playTrack} isPlaying={item.value.link === player.url}/>
      ))}
    </div>
  )
}

const maptStateToProps = ({ player }) => ({
  player
});

const mapDipatchToProps = (dispatch) => ({
  playTrack: (url) => {
    dispatch(playTrack(url))
  }
})

export default compose(
  connect(
    maptStateToProps,
    mapDipatchToProps,
  ),
)(PlaylistList);
