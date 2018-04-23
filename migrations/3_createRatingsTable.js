exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').notNullable();
    tbl.integer('stars').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ratings');
};
