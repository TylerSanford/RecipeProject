exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').references('id').inTable('recipes').onDelete('SET NULL');
    tbl.integer('step').notNullable();
    tbl.text('instruction').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
