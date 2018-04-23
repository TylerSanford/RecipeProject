// tbl.increments('id').primary(); // primary key
// tbl.string('name').notNullable();
// tbl.string('abbreviation').notNullable();

exports.seed = function(knex, Promise) {
	return knex('measurements')
		.del() // delete all user's
		.then(function() {
			return knex('measurements').insert([
				{

        },
      ]);
		});
};