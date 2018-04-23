exports.seed = function(knex, Promise) {
	return knex('ingredients')
		.del() // delete all ingredients
		.then(function() {
			return knex('ingredients').insert([
				{
          id: 
          recipeId: 
          quantity:
          measurement:
          Ingredient