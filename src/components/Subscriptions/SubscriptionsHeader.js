import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'
import { Route, Switch, withRouter } from 'react-router-dom';

// STYLES
import { colorGray, colorWhite } from 'styl/constants';

const styles = {
 backgroundGray: {
   backgroundColor: colorGray,
 },
};

const SubscriptionsSectionHeader = ({ classes }) => (
  <div className={`grid-row padding-top-micro padding-bottom-micro ${classes.backgroundGray}`}>
    <Link className='grid-item' to={'subscriptions/add'}>New</Link>
  </div>
);

export default injectSheet(styles)(SubscriptionsSectionHeader);
