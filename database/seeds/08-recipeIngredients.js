// tbl.increments('id').primary(); // primary key
//     tbl.integer('recipeId').notNullable();
//     tbl.integer('quantity').notNullable();
//     tbl
//       .integer('measurementsId')
//       .references('id')
//       .inTable('measurements');
//     tbl
//       .integer('ingredientsId')
//       .references('id')
//       .inTable('ingredients');
//     tbl.string('notes');

exports.seed = function(knex, Promise) {
	return knex('recipeIngredients')
		.del() // delete all user's
		.then(function() {
			return knex('recipeIngredients').insert([
				// Recipe #1
				{
					recipeId: 1,
					quantity: '2 1/4',
					measurementsId: 1, // Cups
					ingredientsId: 1, // Flour
				},
				{
					recipeId: 1,
					quantity: '1',
					measurementsId: 4, // Teaspoon
					ingredientsId: 2, // Baking Soda
				},
				{
					recipeId: 1,
					quantity: '1',
					measurementsId: 4, // Teaspoon
					ingredientsId: 3, // Salt
				},
				{
					recipeId: 1,
					quantity: '1',
					measurementsId: 3, // Cup
					ingredientsId: 4, // Butter
					notes: 'Softened',
				},
				{
					recipeId: 1,
					quantity: '3/4',
					measurementsId: 3, // Cup
					ingredientsId: 5, // Brown Sugar
					notes: 'Firmly Packed',
				},
				{
					recipeId: 1,
					quantity: '3/4',
					measurementsId: 3, // Cup
					ingredientsId: 6, // Sugar
				},
				{
					recipeId: 1,
					quantity: '1',
					measurementsId: 4, // Teaspoon
					ingredientsId: 7, // Vanilla Extract
				},
				{
					recipeId: 1,
					quantity: '2',
					measurementsId: 5, // Large
					ingredientsId: 8, // Eggs
				},
				{
					recipeId: 1,
					quantity: '2',
					measurementsId: 1, // Cups
					ingredientsId: 9, // Chocolate Chips
				},
				{
					recipeId: 1,
					quantity: '1',
					measurementsId: 3, // Cup
					ingredientsId: 10, // Chopped Nuts
					notes: 'Optional',
				},
      ]);
		});
};