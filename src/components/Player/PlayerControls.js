import React from 'react';
import injectSheet from 'react-jss'

const PlayerControls = ({player, togglePlay}) => {
  return (
    <div>
      <button onClick={togglePlay}>Play</button>
    </div>
  )
}
export default PlayerControls
