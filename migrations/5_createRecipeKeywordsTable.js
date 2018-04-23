exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeKeywords', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').notNullable();
    tbl
      .integer('keywordId')
      .references('id')
      .inTable('keywords');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeKeywords');
};
