import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TextField from 'material-ui/TextField';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      recipeDescription: '',
      recipeIngredients: [],
      recipeDirections: ''
    };
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeDescriptionChange = this.handleRecipeDescriptionChange.bind(
      this
    );
    this.submitRecipe = this.submitRecipe.bind(this);
  }

  handleRecipeNameChange(e) {
    this.setState({ recipeName: e.target.value });
    console.log('Recipe Name State = ' + this.state.recipeName);
  }

  handleRecipeDescriptionChange(e) {
    this.setState({ recipeDescription: e.target.value });
    console.log('Recipe Description State = ' + this.state.recipeDescription);
  }

  submitRecipe(e) {
    e.preventDefault();
    const {
      recipeName,
      recipeDescription,
      recipeIngredients,
      recipeDirections
    } = this.state;
    const newRecipe = {
      recipeName,
      recipeDescription,
      recipeIngredients,
      recipeDirections
    };
    this.setState({
      recipeName: '',
      recipeDescription: '',
      recipeIngredients: [],
      recipeDirections: ''
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          {/* TEXT FIELD FOR RECIPE NAME */}
          <TextField
            id="recipeNameForm"
            onChange={this.handleRecipeNameChange}
            label="Recipe Name"
            type="text"
            value={this.state.recipeName}
          />
          <br />
          <br />
          {/* TEXT FIELD FOR RECIPE DESCRIPTON */}
          <TextField
            id="recipeDescriptionForm"
            onChange={this.handleRecipeDescriptionChange}
            label="Recipe Description"
            type="text"
            value={this.state.recipeDescription}
          />
          <br />
          <br />
          <button type="submit" onClick={this.submitRecipe}>
            Submit Recipe
          </button>
        </form>
      </div>
    );
  }
}
