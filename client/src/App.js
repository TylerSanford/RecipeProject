import React, { Component } from 'react';

import RecipesContainer from './components/RecipesContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
