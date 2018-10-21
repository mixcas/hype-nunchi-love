import React from 'react';
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'

const styles = {
  player: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    maxWidth: '25%',
  }
}

const Player = ({ classes, player: { url = '', playing = false } }) => (
  <div className={classes.player}>
    <ReactPlayer
      url={url}
      playing={playing}
      width={'304px'}
      height={'171px'}
    />
  </div>
)

const maptStateToProps = ({ player }) => ({
  player,
});

export default compose(
  connect(
    maptStateToProps,
  ),
  injectSheet(styles)
)(Player);
