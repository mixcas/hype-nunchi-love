import React from 'react';
import { compose } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase';

// import Routes from '../components/routes';
import Header from '../containers/Header';
import Login from '../components/Login/Login';
import NoMatch from '../components/NoMatch';


const App = (props) => {
  const { auth } = props;

  // Is loading
  if (!isLoaded(auth)) {
    return (
      <div>
        <span>Loading</span>
      </div>
    )
  }

  // Not logged in
  if (isEmpty(auth)) {
    return (
      <main>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={() => 'Top and stuff'} />
            <Route exact path='/login' component={Login} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
        <footer>
        </footer>
      </main>
    );
  }

  // Is logged in
  return (
    <main>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={() => 'Top and stuff'} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
      <footer>
      </footer>
    </main>
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
)(App);
