import React from 'react'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import StatusButton from './StatusButton'

const TracksListItem = ({ track }) => {
  const { link, title, status, published, ref  } = track;
  return (
    <div className="grid-row margin-bottom-small align-items-center">
      <div className="grid-item item-s-8">
        <h2><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      </div>
      <div className="grid-item item-s-4 text-align-center">
        {`${distanceInWordsToNow(published).replace('about ','')} ago` }
      </div>
      <div className="grid-item item-s-4 text-align-center">
        <StatusButton status={status} trackId={ref}/>
      </div>
    </div>
  )
}

TracksListItem.propTypes = {
  parsed: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  regex: PropTypes.string,
}

export default TracksListItem;
