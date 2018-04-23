exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').notNullable();
    tbl.integer('step').notNullable();
    tbl.string('instruction').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
