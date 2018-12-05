import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'

// STYLES
import { colorOrange } from 'styl/constants';

const styles = {
 backgroundOrange: {
   backgroundColor: colorOrange,
 },
};

const AdminHeader = ({ classes }) => (
  <nav className={classes.backgroundOrange}>
    <div className={`container grid-row justify-end padding-top-micro padding-bottom-micro`}>
      <Link className='grid-item' to={'/admin/subscriptions'}>Subscriptions</Link>
      <Link className='grid-item' to={'/admin/tracks'}>Tracks</Link>
      <Link className='grid-item' to={'/admin/users'}>Users</Link>
      <Link className='grid-item' to={'/admin/settings'}>Settings</Link>
    </div>
  </nav>
);

export default injectSheet(styles)(AdminHeader);
