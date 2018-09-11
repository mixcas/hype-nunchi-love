import React from 'react';
import styled from 'styled-components';
import {  isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import StrokedText from './styled/StrokedText';

const Header = ({ firebase, auth , profile, showLoginModal }) => (
  <header>
    <div className="grid-row align-items-center justify-between">
      <div className="grid-item item-s-6 text-align-center">
        <StrokedText italic={true}>Nunchi Hype</StrokedText>
      </div>
      <div className="grid-item item-s-12 no-gutter grid-row justify-end">
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

export default Header;
