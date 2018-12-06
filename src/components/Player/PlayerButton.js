import React from 'react'
import injectSheet from 'react-jss'
import { colorBlue, colorYellow } from 'styl/constants';

const styles = {
  playerButton: {
    display: 'flex',
    alignContent: 'center',
    fill: '#fff',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      fill: colorYellow,
    }
  },
  playerButtonSvg: {
    fill: '#fff',
    '&:hover': {
      fill: colorYellow,
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
