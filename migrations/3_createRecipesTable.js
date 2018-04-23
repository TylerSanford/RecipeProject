exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.string('name').notNullable();
    tbl.integer('authorId').references('id').inTable('users').onDelete('SET NULL');
    tbl
      .dateTime('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl
      .dateTime('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl
      .integer('madeIt')
      .notNullable()
      .defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};


// tbl
    //   .integer('userId')
    //   .references('id')
    //   .inTable('users');
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
    // tbl
    //   .integer('comments')
    //   .references('recipeId')
    //   .inTable('comments');