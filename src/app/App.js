import React, { Component } from 'react';

import CharacterContainer from './containers/characterContainer';
import PlanetContainer from './containers/planetContainer';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CharacterContainer />
        <PlanetContainer />
      </div>
    );
  }
}

export default App;
