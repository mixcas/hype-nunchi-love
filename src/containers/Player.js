import React from 'react'
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import PlayerControls from 'components/Player/PlayerControls'
import {
  handleProgress,
  handleDuration,
  togglePlay,
  handleOnEnded,
  playAnotherTrack,
} from 'actions/PlayerActions'

const controlsHeight = 40

const styles = {
  player: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
  },
  reactPlayer: {
    position: 'absolute',
    bottom: controlsHeight,
    right: 0,
  },
  playerControls: {
    height: controlsHeight,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    background: '#000',
  }
}

const playerWidth = window.innerWidth <= 500 ? window.innerWidth : 400
const playerHeight = playerWidth / 1.777777778

const Player = ({ classes, player, handleProgress, handleDuration, togglePlay, handleOnEnded, playAnotherTrack }) => {
  const { url = '', playing = false } = player

  return (
    <div className={classes.player}>
      <PlayerControls
        className={`align-items-center ${classes.playerControls}`}
        player={player}
        togglePlay={togglePlay}
        playAnotherTrack={playAnotherTrack}
      />
      <ReactPlayer
        className={classes.reactPlayer}
        url={url}
        playing={playing}
        width={`${playerWidth}px`}
        height={`${playerHeight}px`}
        muted={false}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              // controls: 1,
            }
          },
        }}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onEnded={handleOnEnded}
        progressInterval={1000/60}
      />
    </div>
  )
}

const maptStateToProps = ({ player }) => ({
  player,
})

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
  handleOnEnded: () => {
    dispatch(handleOnEnded())
  },
  playAnotherTrack: (offset) => {
    dispatch(playAnotherTrack(offset))
  },
})


export default compose(
  connect(
    maptStateToProps,
    mapDipatchToProps,
  ),
  injectSheet(styles)
)(Player)
