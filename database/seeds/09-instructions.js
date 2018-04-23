// tbl.increments('id').primary(); // primary key
//     tbl.integer('recipeId').references('id').inTable('recipes');
//     tbl.integer('step').notNullable();
//     tbl.string('instruction').notNullable();

exports.seed = function(knex, Promise) {
	return knex('instructions')
		.del() // delete all user's
		.then(function() {
			return knex('instructions').insert([
				{

        },
      ]);
		});
};