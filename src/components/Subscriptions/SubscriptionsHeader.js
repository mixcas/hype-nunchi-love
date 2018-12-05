import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'

// STYLES
import { colorGray } from 'styl/constants';

const styles = {
 backgroundGray: {
   backgroundColor: colorGray,
 },
};

const SubscriptionsSectionHeader = ({ classes }) => (
  <nav className={classes.backgroundGray}>
    <div className={`container grid-row padding-top-micro padding-bottom-micro`}>
      <Link className='grid-item' to={'subscriptions/add'}>New</Link>
    </div>
  </nav>
);

export default injectSheet(styles)(SubscriptionsSectionHeader);
