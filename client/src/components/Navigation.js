import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Button } from 'reactstrap';

export default class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-extra navbar-expand-sm navbar-dark bg-primary">
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
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
