exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl.integer('recipeId').references('id').inTable('recipes');
    tbl
      .dateTime('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl.string('comment', 500).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
