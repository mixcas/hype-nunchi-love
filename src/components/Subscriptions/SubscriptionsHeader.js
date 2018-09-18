import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'
import { Route, Switch, withRouter } from 'react-router-dom';

// STYLES
import { colorBlue, colorWhite } from 'styl/constants';

const styles = {
 backgroundBlue: {
   backgroundColor: colorBlue,
   color: colorWhite,
 },
};

const SubscriptionsSectionHeader = ({ classes }) => (
  <div className={`grid-row padding-top-micro padding-bottom-micro`}>
    <Link className='grid-item' to={'subscriptions/add'}>New</Link>
  </div>
);

export default SubscriptionsSectionHeader;
