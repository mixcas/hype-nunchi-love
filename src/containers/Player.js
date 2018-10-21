import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'


const Player = ({ player: { url = '', playing = false } }) => (
  <ReactPlayer url={url} playing={playing}/>
)

const maptStateToProps = ({ player }) => ({
  player,
});

export default compose(
  connect(
    maptStateToProps,
  ),
)(Player);
