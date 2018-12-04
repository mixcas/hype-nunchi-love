import React from 'react';
import injectSheet from 'react-jss'

const PlayerControls = ({player, togglePlay, playAnotherTrack}) => {
  return (
    <div>
      <button onClick={() => playAnotherTrack(-1)}>Prev</button>
      <button onClick={togglePlay}>Play</button>
      <button onClick={() => playAnotherTrack(1)}>Next</button>
    </div>
  )
}
export default PlayerControls
