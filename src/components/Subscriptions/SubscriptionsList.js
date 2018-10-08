import React, { Component } from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase'

import SubscriptionsListItem from 'components/Subscriptions/SubscriptionsListItem'

const SubscriptionsList = ({ subscriptions }) => {
  // Message for if todos are loading
  if(!isLoaded(subscriptions)) {
    return <span>Loading...</span>
  }

  // Message if todos are empty
  if(isEmpty(subscriptions)) {
    return <span>No Todos Found</span>
  }

  return (
    <div className="container">
      {subscriptions.map( (item, index) => (
        <SubscriptionsListItem subscription={item.value} key={item.key} />
      ))}
    </div>
  )
}

export default SubscriptionsList;
