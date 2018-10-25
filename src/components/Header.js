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
  },
  backgroundBlue: {
    backgroundColor: colorBlue,
  },
  backgroundYellow: {
    backgroundColor: colorYellow,
  },

};

const Header = ({ classes, firebase, auth , profile, showLoginModal }) => (
  <header className={`${classes.header} ${classes.backgroundYellow}`}>
    <div className='grid-row align-items-center justify-between'>
      <div className={`grid-item item-s-24 item-m-8 text-align-center ${classes.backgroundBlue}`}>
        <Link to={'/'}>
          <StrokedText italic={true} fill='#fff'>Nunchi Hype</StrokedText>
        </Link>
      </div>
      <div className="grid-item item-s-24 item-m-12 padding-top-micro padding-bottom-micro no-gutter grid-row justify-end">
        { !isEmpty(auth) && isLoaded(auth) && profile.roles && profile.roles.admin ?
          <div className="grid-item text-align-center">
            <Link to={'/admin'}>Admin</Link>
          </div>
        : null }
        <div className="grid-item text-align-center">
        { isLoaded(auth) && !isEmpty(auth) ?
          <button onClick={() => firebase.logout()}>Logout</button>
        : <button onClick={() => showLoginModal()}>Login</button> }
        </div>
      </div>
    </div>
  </header>
);

export default injectSheet(styles)(Header);
