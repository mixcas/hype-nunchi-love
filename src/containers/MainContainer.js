import React from 'react';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

// import Routes from '../components/routes';
import AdminContainer from '../containers/AdminContainer';
import NoMatch from '../components/NoMatch';

const MainContainer = (props) => {
  const { auth, profile } = props;

  // Is loading
  if (!isLoaded(auth)) {
    return (
      <div>
        <span>Loading</span>
      </div>
    )
  }

  return (
    <Switch>
      <Route exact path='/' component={() => 'Top and stuff'} />
      { !isEmpty(auth) && isLoaded(auth) && profile.roles && profile.roles.admin ?
        <Route exact path='/admin' component={AdminContainer} />
      : null }
      <Route component={NoMatch}/>
    </Switch>
  );
};

const maptStateToProps = ({ firebase }) => ({
  authError: getVal(firebase, 'authError'),
  auth: getVal(firebase, 'auth'),
  profile: getVal(firebase, 'profile')
});

export default compose(
  firebaseConnect(),
  withRouter,
  connect(
    maptStateToProps,
  ),
)(MainContainer);
