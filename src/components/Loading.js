import React from 'react';
import ReactLoading from 'react-loading';
import injectSheet from 'react-jss'

import { colorBlue } from 'styl/constants';

const styles = {
  loadingContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }
}

const Loading = ({classes}) => {
  return (
    <div className={`${classes.loadingContainer} u-flex-center`}>
      <ReactLoading type={'bars'} color={colorBlue} height={87} width={100} />
    </div>
  )
}

export default injectSheet(styles)(Loading)
