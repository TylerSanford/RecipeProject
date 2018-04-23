// tbl.increments('id').primary(); // primary key
// tbl.string('measurement').notNullable();
// tbl.string('abbreviation').notNullable();

exports.seed = function(knex, Promise) {
	return knex('measurements')
		.del() // delete all user's
		.then(function() {
			return knex('measurements').insert([
				{
					measurement: 'Cups',
					abbreviation: 'C',
				},
				{
					measurement: 'Teaspoons',
					abbreviation: 'Tsp',
				},
				{
					measurement: 'Cup',
					abbreviation: 'C',
				},
				{
					measurement: 'Teaspoon',
					abbreviation: 'Tsp',
				},
				{
					measurement: 'Large',
					abbreviation: 'Lg',
				},
				{
					measurement: 'Slices',
				},
				{
					measurement: 'Whole',
				},
				{
					measurement: 'Box',
				},
      ]);
		});
};