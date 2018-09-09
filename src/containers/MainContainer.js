import React from 'react';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

// import Routes from '../components/routes';
import Login from '../components/Login/Login';
import NoMatch from '../components/NoMatch';


const MainContainer = (props) => {
  const { auth } = props;

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
