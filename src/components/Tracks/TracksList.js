import React from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase'

import TracksListItem from 'components/Tracks/TracksListItem'

const TracksList = ({ tracks }) => {
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
      {tracks.map( (item, index) => (
        <TracksListItem track={item} key={item.id} />
      ))}
    </div>
  )
}

export default TracksList;
