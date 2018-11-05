import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import { subscribePubSubHubbub } from 'lib/pubsubhubbub'

const styles = {
  status: {
    padding: '3px 5px',
    borderRadius: '5px'
  },

  loading: {
    color: 'rgba(0,0,0,0.5)'
  },

  verified: {
    background: 'rgba(120, 190, 255)'
  },

  expired: {
    background: 'rgb(255,120,123)'
  },
}

const enhance = compose(
  withState('status', 'setStatus', ''),
  withHandlers({
    onClick: props => event => {
      const { setStatus, channelId } = props

      setStatus('loading')

      subscribePubSubHubbub(channelId)
        .then(response => {
          if(response === undefined) {
            setStatus('')
          } else {
            setStatus(response.data)
          }

        })
        .catch( error => {
          debugger
          setStatus('')
        })
    },
  }),
  injectSheet(styles)
)

const SubscriptionButton = enhance(({ classes, status, onClick}) => (
  <button onClick={onClick} className={`${classes.status} ${classes[status]}`}>{status === '' ? 'Subscribe' : status}</button>
))

SubscriptionButton.propTypes = {
}

export default SubscriptionButton
