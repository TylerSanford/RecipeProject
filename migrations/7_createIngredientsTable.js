exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
    tbl.increments('id').primary(); // primary key
		tbl.string('name').notNullable();
		tbl.string('abbreviation').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
