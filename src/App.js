import React, { Component } from 'react';
import './App.css';

import { DataPanel } from './DataPanel';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>TripleA Scoreboard</h1>
          <br />
          <DataPanel />
      </div>
    );
  }
}

export default App;
