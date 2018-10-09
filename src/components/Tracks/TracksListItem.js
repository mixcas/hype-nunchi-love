import React, { Component } from 'react'
import { compose, withReducer, withHandlers, flattenProp } from 'recompose'
import PropTypes from 'prop-types'
import distanceInWords from 'date-fns/distance_in_words'

const enhance = compose(
  // flattenProp('track'),
  // flattenProp('meta'),
)

const TracksListItem = enhance(({ track }) => {
  const { link, title, draft, hidden, published  } = track;
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
          {draft ? 'draft' : ''}
          {draft && hidden ? ' / ' : ''}
          {hidden ? 'hidden' : ''}
        </span>
      </div>
    </div>
  )

})

TracksListItem.propTypes = {
  parsed: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  regex: PropTypes.string,
}

export default TracksListItem;
