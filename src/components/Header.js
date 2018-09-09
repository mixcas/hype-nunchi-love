import React from 'react';

const Header = (auth = false) => (
  <header className="container">
    <div className="grid-row">
      <div className="grid-item item-s-6">
        <h1>Nunchi</h1>
      </div>
      { auth !== false ?
      <div className="grid-item item-s-6">
        <h1>Logout</h1>
      </div>
      : null }
    </div>
  </header>
);

export default Header;
