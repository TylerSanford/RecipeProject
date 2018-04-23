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
				{

        },
      ]);
		});
};