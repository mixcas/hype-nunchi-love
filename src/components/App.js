import React from 'react';

// import Routes from '../components/routes';
import Header from '../containers/Header';
import MainContainer from '../containers/MainContainer';
import LoginContainer from '../containers/LoginContainer';

const App = () => (
  <main>
    <Header />
    <MainContainer />
    <footer>
    </footer>
    <LoginContainer />
  </main>
);

export default App;
