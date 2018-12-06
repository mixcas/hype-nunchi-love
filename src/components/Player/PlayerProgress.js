import React from 'react'
import injectSheet from 'react-jss'
import { colorBlue, colorYellow } from 'styl/constants';

const styles = {
  playerProgress: {
    width: '100%',
    outline: 'none',
    padding: 0,
    border: 'none',
    borderRadius: 0,
    background: colorYellow,
    height: 12,
    '&::-webkit-slider-thumb': {
      '-webkit-appearance': 'none',
      width: 12,
      height: 12,
      background: colorBlue,
      appearance: 'none',
      border: 'none',
      borderRadius: 0,
    }
  }
}

const maxRange = 10000

const PlayerProgress = ({ classes, progress, duration }) => {
  const played = progress.played * maxRange || 0
  return (
    <input className={classes.playerProgress} type='range' step='1' min='1' max={maxRange} value={played} />
  )
}

export default injectSheet(styles)(PlayerProgress)
