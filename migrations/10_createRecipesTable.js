exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.string('name').notNullable();
    // tbl
    //   .integer('userId')
    //   .references('id')
    //   .inTable('users');
    tbl
      .dateTime('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl
      .dateTime('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    // tbl
    //   .integer('rating')
    //   .references('recipeId')
    //   .inTable('ratings');
    // tbl
    //   .integer('keywords')
    //   .references('id')
    //   .inTable('recipeKeywords');
    // tbl
    //   .integer('ingredients')
    //   .references('recipeId')
    //   .inTable('recipeIngredients');
    // tbl
    //   .integer('instructions')
    //   .references('id')
    //   .inTable('instructions');
    tbl
      .integer('madeIt')
      .notNullable()
      .defaultTo(0);
    // tbl
    //   .integer('comments')
    //   .references('recipeId')
    //   .inTable('comments');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
