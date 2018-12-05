import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  playerButton: {
    display: 'flex',
    alignContent: 'center',
    fill: '#fff',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      fill: '#ffff59',
    }
  },
  playerButtonSvg: {
    fill: '#fff',
    '&:hover': {
      fill: '#ffff59',
    }
  }
}

const PlayerButton = ({classes, onClick, children}) => {
  const childrenWithExtraProp = React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: classes.playerButtonSvg,
    });
  });
  return (
    <button className={`${classes.playerButton} u-pointer`} onClick={onClick}>
      {childrenWithExtraProp}
    </button>
  )
}

export default injectSheet(styles)(PlayerButton)
