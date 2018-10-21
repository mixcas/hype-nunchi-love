import React, { Component } from 'react'
import { compose, withReducer, withHandlers, flattenProp } from 'recompose'
import PropTypes from 'prop-types'
import distanceInWords from 'date-fns/distance_in_words'

const PlaylistItem = ({ track, onClick }) => {
  const { title, status, published, link  } = track;
  return (
    <div className="grid-row margin-bottom-small align-items-center">
      <div className="grid-item item-s-12">
        <h2>
          <button className='u-pointer' onClick={() => onClick(link)}>{title}</button>
        </h2>
      </div>
      <div className="grid-item item-s-4 text-align-center">
        { distanceInWords(published, new Date()) }
      </div>
    </div>
  )
}

PlaylistItem.propTypes = {
  parsed: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  regex: PropTypes.string,
}

export default PlaylistItem;
