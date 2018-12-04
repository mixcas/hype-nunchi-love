import React from 'react';
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import PlayerControls from 'components/Player/PlayerControls'
import {
  handleProgress,
  handleDuration,
  togglePlay,
} from 'actions/PlayerActions'

const styles = {
  player: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
  },
  reactPlayer: {
  }
}

const playerWidth = window.innerWidth <= 500 ? window.innerWidth : 400
const playerHeight = playerWidth / 1.777777778

const Player = ({ classes, player, handleProgress, handleDuration, togglePlay }) => {
  const { url = '', playing = false } = player
  return (
    <div className={classes.player}>
      <PlayerControls
        player={player}
        togglePlay={togglePlay}
      />
      <ReactPlayer
        className={classes.reactPlayer}
        url={url}
        playing={playing}
        width={`${playerWidth}px`}
        height={`${playerHeight}px`}
        muted={true}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0
            }
          },
        }}
        // onProgress={handleProgress}
        // onDuration={handleDuration}
      />
    </div>
  )
}

const maptStateToProps = ({ player }) => ({
  player,
});

const mapDipatchToProps = (dispatch) => ({
  handleDuration: (duration) => {
    dispatch(handleDuration(duration))
  },
  handleProgress: (progress) => {
    dispatch(handleProgress(progress))
  },
  togglePlay: () => {
    dispatch(togglePlay())
  },
})


export default compose(
  connect(
    maptStateToProps,
    mapDipatchToProps,
  ),
  injectSheet(styles)
)(Player);
