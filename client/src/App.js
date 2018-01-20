import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import RecipesContainer from './components/RecipesContainer';
import Create from './components/Create';

import './App.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

class App extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Tyler's Recipe Project
            </Typography>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <div>
            <Link to="/Create">Create</Link>
            <Link to="/">Recipes</Link>
            <Route exact path="/" component={RecipesContainer} />
            <Route path="/Create" component={Create} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
