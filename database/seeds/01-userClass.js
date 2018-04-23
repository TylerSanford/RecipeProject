// tbl.increments('id').primary(); // primary key
//     tbl
//       .string('class', 32)
//       .notNullable();

exports.seed = function(knex, Promise) {
	return knex('userClass')
		.del() // delete all user's
		.then(function() {
			return knex('userClass').insert([
				{ // 1
					class: 'Guest',
				},
				{ // 2
					class: 'Probationary'
				},
				{ // 3
					class: 'User',
				},
				{ // 4
					class: 'Admin'
				},
      ]);
		});
};