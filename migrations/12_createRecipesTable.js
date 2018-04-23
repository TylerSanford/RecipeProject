exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.string('name').notNullable();
    tbl
      .integer('userId')
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
    tbl
      .integer('rating')
      .references('recipeId')
      .inTable('ratings');
    tbl
      .integer('keywords')
      .references('recipeId')
      .inTable('recipeKeywords');
    tbl
      .integer('ingredients')
      .references('recipeId')
      .inTable('recipeIngredients');
    tbl
      .integer('instructions')
      .references('recipeId')
      .inTable('instructions');
    tbl
      .integer('madeIt')
      .notNullable()
      .defaultTo(0);
    tbl
      .integer('comments')
      .references('recipeId')
      .inTable('commends');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
