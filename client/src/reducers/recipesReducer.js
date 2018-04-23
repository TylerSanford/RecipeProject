// import { GET_RECIPES, ADD_RECIPE } from '../actions';
import { GET_RECIPES } from '../actions';

export default (recipes = [], action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload.data;
    // case ADD_RECIPE:
    //   console.log('on Reducer', action.payload);
    //   return action.payload.data;
    default:
      return recipes;
  }
};
