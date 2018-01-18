import React, { Component } from 'react';

import '../App.css';
import './recipe.css';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

import RecipeCard from './RecipeCard';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    const recipes = this.props.getRecipes();

    this.setState({
      recipes
    });
  }

  render() {
    return (
      <div className="wrapper">
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

        <div className="page body">
          {this.props.recipes.map((recipe, i) => {
            return (
              <RecipeCard
                name={recipe.name}
                author={recipe.author}
                createdAt={recipe.createdAt}
                rating={recipe.rating}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                madeIt={recipe.madeIt}
                key={i}
                id={recipe.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recipes;
