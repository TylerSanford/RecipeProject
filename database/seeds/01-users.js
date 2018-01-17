// tbl.increments('id').primary(); // primary key
// tbl
//     .string('username', 32)
//     .notNullable()
//     .unique('username');
// tbl.string('password', 32).notNullable();
// tbl.string('email', 70).notNullable();
// tbl.string('vcode', 8).notNullable();
// tbl.boolean('activated').defaultTo(false);
// tbl.string('userClass').defaultTo('probationary');

exports.seed = function(knex, Promise) {
	return knex('users')
		.del() // delete all user's
		.then(function() {
			return knex('users').insert([
				{
					id: 1,
					username: 'admin',
					password: 'admin123',
					email: 'tylersanford0311@gmail.com',
					vcode: 12345678,
					activated: true,
					userClass: 'admin'
				},
				{
					id: 2,
					username: 'tsanford',
					password: 'password123',
					email: 'tylersanford0311@gmail.com',
					vcode: 12345678,
					activated: true,
					userClass: 'user'
				},
				{
					id: 3,
					username: 'unactivated',
					password: 'password123',
					email: 'tylersanford0311@gmail.com',
					vcode: 12345678,
					activated: false,
					userClass: 'probationary'
				},
				{
					id: 4,
					username: 'recipeking',
					password: 'password123',
					email: 'tylersanford0311@gmail.com',
					vcode: 12345678,
					activated: true,
					userClass: 'user'
				},
				{
					id: 5,
					username: 'missbaker',
					password: 'password123',
					email: 'tylersanford0311@gmail.com',
					vcode: 12345678,
					activated: true,
					userClass: 'user'
				},
				{
					id: 6,
					username: 'cheflindsay',
					password: 'password123',
					email: 'tylersanford0311@gmail.com',
					vcode: 12345678,
					activated: true,
					userClass: 'user'
				}
			]);
		});
};
