exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').notNullable();
    tbl.string('quantity').notNullable();
    tbl
      .integer('measurementsId')
      .references('id')
      .inTable('measurements');
    tbl
      .integer('ingredientsId')
      .references('id')
      .inTable('ingredients');
    tbl.string('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredients');
};
