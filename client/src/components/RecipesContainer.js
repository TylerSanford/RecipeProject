import React from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../actions';

import Recipes from './Recipes';

const RecipesContainer = () => {
  return <Recipes />;
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps, { getRecipes })(Recipes);
