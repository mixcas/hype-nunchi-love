import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'react-redux-firebase';

import StrokedText from './styled/StrokedText';

const Header = ({ firebase, auth , profile, showLoginModal }) => (
  <header className="container">
    <div className="grid-row align-items-center justify-between">
      <div className="grid-item item-s-6 no-gutter grid-row">
        <div className="grid-item item-s-24 no-gutter grid-row">
          <StrokedText italic={true}>Nunchi Hype</StrokedText>
        </div>
      </div>
      <div className="grid-item item-s-6 no-gutter grid-row justify-end">
        <div className="grid-item item-s-12 no-gutter grid-row">
        { !isEmpty(auth) ?
          <button onClick={() => firebase.logout()}>Logout</button>
        : <button onClick={() => showLoginModal()}>Login</button> }
        </div>
      </div>
    </div>
  </header>
);

export default Header;
