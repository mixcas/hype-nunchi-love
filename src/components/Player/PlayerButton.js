import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  playerButton: {
    fill: '#fff',
  },
  playerButtonSvg: {
    fill: '#fff',
  }
}

const PlayerButton = ({classes, onClick, children}) => {
  const childrenWithExtraProp = React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: classes.playerButtonSvg,
    });
  });
  return (
    <button className={classes.playerButton} onClick={onClick}>
      {childrenWithExtraProp}
    </button>
  )
}

export default injectSheet(styles)(PlayerButton)
