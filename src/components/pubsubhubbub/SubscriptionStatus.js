import React from 'react'
import { compose, lifecycle, withState } from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import { checkPubSubscription } from 'lib/pubsubhubbub'

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
  withState('status', 'setStatus', 'loading'),
  lifecycle({
    componentWillMount() {
      const { setStatus, channelId } = this.props

      checkPubSubscription(channelId).then(response => {
        if(response === undefined) {
          return
        }

        const dom = document.createElement('html')
        dom.innerHTML = response.data
        const status = dom.querySelectorAll('dd')[1].innerText
        setStatus(status)
      })
    },
  }),
  injectSheet(styles)
)

const SubscriptionStatus = enhance(({ classes, status }) => (
  <span className={`${classes.status} ${classes[status]}`}>{status === 'loading' ? 'loading...' : status.toUpperCase()}</span>
))

SubscriptionStatus.propTypes = {
  parsed: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  regex: PropTypes.string,
}

export default SubscriptionStatus;
