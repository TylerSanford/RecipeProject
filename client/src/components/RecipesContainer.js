import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { getRecipes } from '../actions';

import RecipeCard from './RecipeCard';

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

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
        <div className="page body">
          {this.props.recipes.map((recipe, i) => {
            console.log(recipe);
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

export default connect(mapStateToProps, { getRecipes })(Recipes);
