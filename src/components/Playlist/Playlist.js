import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import { playTrack } from 'actions/PlayerActions'
import { increasePage } from 'actions/PlaylistActions'
import PlaylistItem from 'components/Playlist/PlaylistItem'
import LoadMore from 'components/Playlist/LoadMore'

const sortBy = (a, b, param, order = 'desc') => {
  const aParam = a.value[param]
  const bParam = b.value[param]

  if(order === 'desc') {
    if(aParam < bParam) return 1
    if(aParam > bParam) return -1
  }

  if(order === 'asc') {
    if(aParam < bParam) return -1
    if(aParam > bParam) return 1
  }

  return 0
}

const sortByPublishedDate = (a,b) => sortBy(a,b,'published')

const sortByViews = (a,b) => sortBy(a,b,'views', 'asc')

const PlaylistList = ({ player, tracks, playTrack, increasePage }) => {
  // Message if todos are empty
  if(isEmpty(tracks)) {
    return <span>No Tracks Found</span>
  }

  const random = (min, max) => {
    return Math.floor(min + Math.random() * (max - min))
  }

  // TEST SORT BY VIEWS
  /*
  const trackWithRandomViews = tracks.map( item => {
    const value =  {
      ...item.value,
      views: random(100,1000),
    }
    return {
      ...item,
      value: value,
    }
  })

  debugger
  */

  return (
    <div className="margin-bottom-basic">
      <div>
        {/* trackWithRandomViews.sort(sortByViews).map( (item, index) => ( */}
        {tracks.sort(sortByPublishedDate).map( (item, index) => (
          <PlaylistItem track={item.value} key={item.key} onClick={playTrack} isPlaying={item.value.link === player.url} position={index + 1}/>
        ))}
      </div>
      <div className='grid-row justify-center margin-center-small margin-bottom-small'>
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
