import React, { Component } from 'react'
import { compose, withReducer, withHandlers, flattenProp } from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import distanceInWords from 'date-fns/distance_in_words'
import { MdPlayCircleOutline, MdPlayCircleFilled } from 'react-icons/md';

const styles = {
  noFocus: {
    '&:focus': {
      outline: 'none',
    }
  },
};

const PlaylistItem = ({ track, isPlaying, onClick, classes }) => {
  const { title, status, published, link  } = track;
  return (
    <div className="grid-row align-items-center padding-top-tiny padding-bottom-tiny">
      <div className="grid-item item-s-1 u-flex-center">
        <button className={`${classes.noFocus} u-pointer`} onClick={() => onClick(link)}>
          { isPlaying ? <MdPlayCircleFilled/> : <MdPlayCircleOutline/> }
        </button>
      </div>
      <div className="grid-item item-s-16">
        <h2>
          <button className={`${classes.noFocus} u-pointer`} onClick={() => onClick(link)}>{title}</button>
        </h2>
        <div className='font-size-small'>
          <time datetime={published}>{ distanceInWords(published, new Date()) }</time>
        </div>
      </div>
      <div className="grid-item item-s-4 text-align-center">
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

export default injectSheet(styles)(PlaylistItem);
