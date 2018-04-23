// tbl.increments('id').primary(); // primary key
// 		tbl.string('name').notNullable();
// 		tbl.string('abbreviation').notNullable();

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