import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'

// STYLES
import { colorOrange } from '../styl/constants';

const styles = {
 backgroundOrange: {
   backgroundColor: colorOrange,
 },
};

const AdminHeader = ({ classes }) => (
  <div className={`grid-row justify-end padding-top-micro padding-bottom-micro ${classes.backgroundOrange}`}>
    <Link className='grid-item' to={'/admin/subscriptions'}>Subscriptions</Link>
    <Link className='grid-item' to={'/admin/songs'}>Songs</Link>
    <Link className='grid-item' to={'/admin/users'}>User</Link>
    <Link className='grid-item' to={'/admin/settings'}>Settings</Link>
  </div>
);

export default injectSheet(styles)(AdminHeader);
