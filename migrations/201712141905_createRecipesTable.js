exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipes', function(tbl) {
		tbl.increments('id').primary(); // primary key
		tbl.string('name').notNullable();
		tbl
			.integer('authorId')
			.notNullable()
			.references('id')
			.inTable('users');
		tbl
			.dateTime('createdAt')
			.notNullable()
			.defaultTo(knex.fn.now());
		tbl
			.dateTime('updatedAt')
			.notNullable()
			.defaultTo(knex.fn.now());
		tbl.string('rating');
		tbl.string('keywords');
		tbl.text('ingredients');
		tbl.text('instructions').notNullable();
		tbl
			.integer('madeIt')
			.notNullable()
			.defaultTo(0);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
