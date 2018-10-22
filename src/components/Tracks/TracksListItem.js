import React from 'react'
import PropTypes from 'prop-types'
import distanceInWords from 'date-fns/distance_in_words'

const TracksListItem = ({ track }) => {
  const { link, title, status, published  } = track;
  return (
    <div className="grid-row margin-bottom-small align-items-center">
      <div className="grid-item item-s-8">
        <h2><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      </div>
      <div className="grid-item item-s-4 text-align-center">
        { distanceInWords(published, new Date()) }
      </div>
      <div className="grid-item item-s-4 text-align-center">
        <span>
          {status}
        </span>
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
