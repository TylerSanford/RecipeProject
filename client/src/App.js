import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'reactstrap';

import RecipesContainer from './components/RecipesContainer';
import Create from './components/Create';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <a class="navbar-brand" href="/">
              R
            </a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mr-auto mt-2 mt-lg-0">
                <LinkContainer
                  exact
                  to="/"
                  class="nav-item nav-link"
                  activeClassName="active"
                >
                  <Button color="primary">Home</Button>
                </LinkContainer>
                <LinkContainer
                  class="nav-item nav-link"
                  to="/create"
                  activeClassName="active"
                >
                  <Button color="primary">Create</Button>
                </LinkContainer>
              </div>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
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
