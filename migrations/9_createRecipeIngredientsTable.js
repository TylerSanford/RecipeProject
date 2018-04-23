exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').references('id').inTable('recipes').onDelete('NO ACTION');
    tbl.string('quantity').notNullable();
    tbl
      .integer('measurementsId')
      .references('id')
      .inTable('measurements')
      .onDelete('NO ACTION');
    tbl
      .integer('ingredientsId')
      .references('id')
      .inTable('ingredients')
      .onDelete('NO ACTION');
    tbl.string('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredients');
};
