import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';

console.log(process.env.NODE_ENV);
const endpoint = '/api/recipes';

// if (process.env.NODE_ENV === 'production') {
//   const endpoint = '/api/recipes';
// } else {
// const endpoint = 'http://localhost:4000/api/recipes';
// }

export const getRecipes = () => {
  const recipesRequest = axios.get(endpoint);

  console.log('getRecipes Action Creator request', recipesRequest);

  return {
    type: GET_RECIPES,
    payload: recipesRequest
  };
};
