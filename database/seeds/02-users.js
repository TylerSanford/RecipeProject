// tbl.increments('id').primary(); // primary key
//     tbl
//       .dateTime('createdAt')
//       .notNullable()
//       .defaultTo(knex.fn.now());
//     tbl
//       .string('username', 32)
//       .notNullable()
//       .unique('username');
//     tbl.string('password', 100).notNullable();
//     tbl.string('email', 70).notNullable();
//     tbl.string('vcode', 8).notNullable();
//     tbl.boolean('activated').defaultTo(false);
//     tbl
//       .integer('userClass')
//       .references('id')
//       .inTable('userClass');

exports.seed = function(knex, Promise) {
	return knex('users')
		.del() // delete all user's
		.then(function() {
			return knex('users').insert([
				{
					username: 'admin',
					password: 'password',
					email: 'tylersanford0311@gmail.com',
					vcode: 123456,
					activated: true,
					userClass: 4,
				},
				{
					username: 'tsanford',
					password: 'password',
					email: 'tylersanford0311@gmail.com',
					vcode: 123456,
					activated: true,
					userClass: 3,
				},
				{
					username: 'unactivated',
					password: 'password',
					email: 'tylersanford0311@gmail.com',
					vcode: 123456,
					activated: false,
					userClass: 1,
				},
				{
					username: 'recipeking',
					password: 'password',
					email: 'tylersanford0311@gmail.com',
					vcode: 123456,
					activated: true,
					userClass: 3,
				},
				{
					username: 'missbaker',
					password: 'password',
					email: 'tylersanford0311@gmail.com',
					vcode: 123456,
					activated: true,
					userClass: 3,
				},
				{
					username: 'cheflindsay',
					password: 'password',
					email: 'tylersanford0311@gmail.com',
					vcode: 123456,
					activated: true,
					userClass: 3,
				}
			]);
		});
};
