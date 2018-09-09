import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { showLoginModal } from '../actions/AuthActions';
import Header from '../components/Header';

const maptStateToProps = ({firebase: { auth, profile }}) => ({
  auth,
  profile,
});

const mapDipatchToProps = dispatch => ({
  showLoginModal: () => dispatch(showLoginModal()),
});

export default compose(
  firebaseConnect(),
  connect(
    maptStateToProps,
    mapDipatchToProps,
  ),
)(Header);
