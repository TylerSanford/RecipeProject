// tbl.increments('id').primary(); // primary key
// tbl.string('measurement').notNullable();
// tbl.string('abbreviation').notNullable();

exports.seed = function(knex, Promise) {
	return knex('measurements')
		.del() // delete all user's
		.then(function() {
			return knex('measurements').insert([
				{ // 1
					measurement: 'Cups',
					abbreviation: 'C',
				},
				{ // 2
					measurement: 'Teaspoons',
					abbreviation: 'Tsp',
				},
				{ // 3
					measurement: 'Cup',
					abbreviation: 'C',
				},
				{ // 4
					measurement: 'Teaspoon',
					abbreviation: 'Tsp',
				},
				{ // 5
					measurement: 'Large',
					abbreviation: 'Lg',
				},
				{ // 6
					measurement: 'Slices',
				},
				{ // 7
					measurement: 'Whole',
				},
				{ // 8
					measurement: 'Box',
				},
      ]);
		});
};