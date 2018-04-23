exports.up = function(knex, Promise) {
  return knex.schema.createTable('measurements', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.string('measurement').notNullable();
    tbl.string('abbreviation');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('measurements');
};
