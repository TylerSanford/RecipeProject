import React, { Component } from 'react';
import '../App.css';
import './recipe.css';

import Recipe from './Recipe';

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
      <div class="wrapper">
        <div class="page header">Recipes!</div>
        <br />
        <div class="table">
          {this.props.recipes.map((recipe, i) => {
            return (
              <Recipe
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
