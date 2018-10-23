import React from 'react'
import { compose, withReducer, withHandlers, flattenProp } from 'recompose'
import PropTypes from 'prop-types'

import SubscriptionStatus from 'components/pubsubhubbub/SubscriptionStatus'

const enhance = compose(
  flattenProp('subscription'),
  flattenProp('meta'),
)

const SubscriptionsListItem = enhance(({ channelId, parsed, url, title, thumbnails, regex }) => {
  if(parsed) {
    return (
      <div className="grid-row margin-bottom-small align-items-center">
        <div className="grid-item item-s-2 text-align-center">
          <a href={url} target="_blank" rel="noopener noreferrer"><img src={thumbnails.default.url} /></a>
        </div>
        <div className="grid-item item-s-8">
          <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
        </div>
        <div className="grid-item item-s-8">
          <SubscriptionStatus channelId={channelId} />
        </div>
        { /* JSON.stringify(subscription, null, 2)} */}
      </div>
    )
  }

  return null
})

SubscriptionsListItem.propTypes = {
  parsed: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  regex: PropTypes.string,
}

export default SubscriptionsListItem;
