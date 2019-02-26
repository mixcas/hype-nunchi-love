import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { MdPlayCircleOutline, MdPlayCircleFilled } from 'react-icons/md';
import { colorBlue } from 'styl/constants';

const styles = {
  noFocus: {
    '&:focus': {
      outline: 'none',
    }
  },
  playlistItem: {
    transition: 'background 150ms',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  rankPosition: {
    background: '#ffff59',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  evenRow: {
    background: '#79bbff1a',
  },
  oddRow: {
    background: '#79bbff40',
  },
  isPlaying: {
    background: colorBlue,
  },
};

const isEven = n => {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

const PlaylistItem = ({ track, isPlaying, onClick, classes, position }) => {
  const { title, published, link  } = track;
  return (
    <div className={`${classes.playlistItem} ${isEven(position) ? classes.evenRow : classes.oddRow} ${ isPlaying ? classes.isPlaying : ''}`}>
      <div className={`container grid-row align-items-center padding-top-micro padding-bottom-micro`}>
        <div className={`grid-item item-s-1 u-flex-center align-self-stretch`}>
          <div className={`align-self-stretch ${classes.rankPosition}`}>
            {position}
          </div>
        </div>
        <div className="grid-item item-s-16">
          <button className={`${classes.noFocus} ${classes.textAlignLeft} u-pointer`} onClick={() => onClick(link)}>
            <h2>
              {title}
            </h2>
            <div className='font-size-small font-italic'>
              <time dateTime={published}>{`${distanceInWordsToNow(published).replace('about ','')} ago`}</time>
            </div>
          </button>
        </div>
        <div className="grid-item item-s-4 text-align-center">
        </div>
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
