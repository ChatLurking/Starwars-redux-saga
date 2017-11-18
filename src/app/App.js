import React, { Component } from 'react';

import CharacterContainer from './containers/characterContainer';
import PlanetContainer from './containers/planetContainer';

class App extends Component {
  render() {
    return (
      <div>
        Sup
        <CharacterContainer />
        <PlanetContainer />
      </div>
    );
  }
}

export default App;
