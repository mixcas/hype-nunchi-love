import React from 'react'
import { getFirebase, withFirestore } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  status: {
    padding: '3px 5px',
    borderRadius: '5px'
  },

  published: {
    background: 'rgba(120, 190, 255)'
  },
}

const toggleTrackStatus = (trackId, oldStatus, firestore) => {

  const status = oldStatus === 'published' ? 'unpublished' : 'published'

  const checked = window.confirm(`Are you sure you want to ${status.replace('ed','')} this track?`)
  if(checked) {
    firestore.update(`/tracks/${trackId}`, {
      status,
    })
  }
}

const enhance = compose(
  withHandlers({
    onClick: props => event => {
      toggleTrackStatus(props.trackId, props.status, props.firestore)
    },
  }),
  injectSheet(styles)
)

const StatusButton = enhance(({ classes, channelId, status, onClick }) => (
  <button className={`${classes.status} ${classes[status]}`} onClick={onClick}>{status}</button>
))

StatusButton.propTypes = {
  trackId: PropTypes.string,
  status: PropTypes.string,
}

export default withFirestore(StatusButton);
