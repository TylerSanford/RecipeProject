import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';



import RecipesContainer from './components/RecipesContainer';
import Create from './components/Create';
import Navigation from './components/Navigation';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <Navigation />
          <div style={{ backgroundColor: '#cfd8dc' }}>
            <Route exact path="/" component={RecipesContainer} />
            <Route path="/create" component={Create} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
