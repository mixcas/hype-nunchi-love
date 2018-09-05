import React, { Component } from 'react';
import { Route } from 'react-router';

// Components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={() => 'Hola'} />
      </div>
    );
  }
}

export default App;
