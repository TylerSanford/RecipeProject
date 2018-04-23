// tbl.increments('id').primary(); // primary key
//     tbl.string('keyword').notNullable();

exports.seed = function(knex, Promise) {
	return knex('keywords')
		.del() // delete all user's
		.then(function() {
			return knex('keywords').insert([
				{
					
        },
      ]);
		});
};