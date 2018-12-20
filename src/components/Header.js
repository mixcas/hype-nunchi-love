import React from 'react';
import injectSheet from 'react-jss'
import {  isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

// STYLES
import { colorBlue, colorYellow } from 'styl/constants';

// COMPONENTS
import StrokedText from './styled/StrokedText';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    color: '#fff',
    fontStyle: 'italic',
  },
  backgroundBlue: {
    backgroundColor: '#000',
  },
  backgroundYellow: {
    backgroundColor: '#000',
  },
  headerButton: {
    color: '#fff',
    fontStyle: 'italic',
  }
};

const Header = ({ classes, firebase, auth , profile, showLoginModal }) => (
  <header className={`${classes.header} ${classes.backgroundYellow}`}>
    <div className='container grid-row align-items-center justify-between'>
      <div className={`grid-item item-s-24 item-m-8 ${classes.backgroundBlue}`}>
        <Link to={'/'}>
          <h1>
            <StrokedText italic={true} stroke={colorYellow} fill='#000' hover={colorBlue} >Nunchi Hype</StrokedText>
          </h1>
        </Link>
      </div>
      <div className="grid-item item-s-24 item-m-12 padding-top-micro padding-bottom-micro no-gutter grid-row justify-end">
        { !isEmpty(auth) && isLoaded(auth) && profile.roles && profile.roles.admin ?
          <div className="grid-item text-align-center">
            <Link className={classes.headerButton} to={'/admin'}>Admin</Link>
          </div>
        : null }
        <div className="grid-item text-align-center">
        { isLoaded(auth) && !isEmpty(auth) ?
          <button className={classes.headerButton} onClick={() => firebase.logout()}>Logout</button>
        : <button className={classes.headerButton} onClick={() => showLoginModal()}>Login</button> }
        </div>
      </div>
    </div>
  </header>
);

export default injectSheet(styles)(Header);
