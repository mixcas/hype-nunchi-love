import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { colorOrange } from 'styl/constants';

const styles = {
  loadMore: {
    textAlign: 'center',
    width: '100%',
    background: '#000',
    color: colorOrange,
  }
}

const LoadMore = ({classes, onClick}) => (
  <button className={`padding-top-small padding-bottom-small margin-top-small margin-bottom-small font-italic u-pointer ${classes.loadMore}`} onClick={onClick}>Load More</button>
)

LoadMore.propTypes = {
  onClick: PropTypes.func,
}

export default injectSheet(styles)(LoadMore);
