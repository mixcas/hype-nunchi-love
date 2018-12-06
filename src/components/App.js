import React from 'react';
import { Helmet } from "react-helmet";

// import Routes from '../components/routes';
import Player from 'containers/Player';
import Header from 'containers/Header';
import MainContainer from 'containers/MainContainer';
import LoginContainer from 'containers/LoginContainer';

const App = () => (
  <main>
    <Header />

    <MainContainer />
    <Player />

    <footer>
    </footer>

    <LoginContainer />
  </main>
);

export default App;
