exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments('id').primary(); // primary key
    tbl
      .dateTime('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl
      .string('username', 32)
      .notNullable()
      .unique('username');
    tbl.string('password', 100).notNullable();
    tbl.string('email', 70).notNullable();
    tbl.string('vcode', 8).notNullable();
    tbl.boolean('activated').defaultTo(false);
    tbl
      .integer('userClass')
      .references('id')
      .inTable('userClass');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
