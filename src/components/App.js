import React, { Component } from 'react';

import Routes from './routes';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <main>
        <Header />

        <div>
          <Routes />
        </div>

        <footer>
        </footer>
      </main>
    );
  }
}

export default App;
