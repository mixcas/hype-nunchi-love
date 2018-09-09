import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

const Header = ({ firebase, auth , profile }) => (
  <header className="container">
    <div className="grid-row">
      <div className="grid-item item-s-6">
        <h1>Nunchi</h1>
      </div>
      { !isEmpty(auth) ?
      <div className="grid-item item-s-6">
        <button onClick={() => firebase.logout()} >Logout</button>
      </div>
      : <Link to='/login' className='link-underline'>Login</Link> }
    </div>
  </header>
);

const maptStateToProps = ({firebase: { auth, profile }}) => ({
  auth,
  profile,
});

const mapDipatchToProps = dispatch => ({
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
    mapDipatchToProps,
  ),
)(Header);
