import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';

const endpoint = '/api/recipes';

export const getRecipes = () => {
  const recipesRequest = axios.get(endpoint);

  console.log('getRecipes Action Creator request', recipesRequest);

  return {
    type: GET_RECIPES,
    payload: recipesRequest
  };
};
