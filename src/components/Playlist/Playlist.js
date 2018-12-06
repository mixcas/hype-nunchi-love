import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import { playTrack } from 'actions/PlayerActions'
import { increasePage } from 'actions/PlaylistActions'
import PlaylistItem from 'components/Playlist/PlaylistItem'
import LoadMore from 'components/Playlist/LoadMore'

const sortBy = (a, b, param) => {
  const aParam = a.value[param]
  const bParam = b.value[param]

  if(aParam < bParam) return 1
  if(aParam > bParam) return -1
  return 0
}

const sortByPublishedDate = (a,b) => sortBy(a,b,'published')

const PlaylistList = ({ player, tracks, playTrack, increasePage }) => {
  // Message if todos are empty
  if(isEmpty(tracks)) {
    return <span>No Tracks Found</span>
  }

  return (
    <div className="margin-bottom-basic">
      <div>
        {tracks.sort(sortByPublishedDate).map( (item, index) => (
          <PlaylistItem track={item.value} key={item.key} onClick={playTrack} isPlaying={item.value.link === player.url} position={index + 1}/>
        ))}
      </div>
      <div class='grid-row justify-center margin-center-small margin-bottom-small'>
        <div className={`grid-item item-s-20 item-m-12 item-l-8`}>
          <LoadMore onClick={increasePage} />
        </div>
      </div>
    </div>
  )
}

const maptStateToProps = ({ player }) => ({
  player
});

const mapDipatchToProps = (dispatch) => ({
  playTrack: (url) => {
    dispatch(playTrack(url))
  },
  increasePage: () => dispatch(increasePage()),
})

export default compose(
  connect(
    maptStateToProps,
    mapDipatchToProps,
  ),
)(PlaylistList);
