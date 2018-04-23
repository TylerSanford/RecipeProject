exports.up = function(knex, Promise) {
  return knex.schema.createTable('keywords', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.string('keyword').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('keywords');
};
