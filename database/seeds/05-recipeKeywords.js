// tbl.increments('id').primary(); // primary key
//     tbl.integer('recipeId');
//     tbl
//       .integer('keywordId')
//       .references('id')
//       .inTable('keywords');

exports.seed = function(knex, Promise) {
	return knex('recipeKeywords')
		.del() // delete all user's
		.then(function() {
			return knex('recipeKeywords').insert([
				{

        },
      ]);
		});
};