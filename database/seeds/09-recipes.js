// tbl.increments('id').primary(); // primary key
//     tbl.string('name').notNullable();
//     tbl
//       .dateTime('createdAt')
//       .notNullable()
//       .defaultTo(knex.fn.now());
//     tbl
//       .dateTime('updatedAt')
//       .notNullable()
//       .defaultTo(knex.fn.now());
//     tbl
//       .integer('madeIt')
//       .notNullable()
//       .defaultTo(0);

exports.seed = function(knex, Promise) {
  return knex('recipes')
    .del() // delete all recipes
    .then(function() {
      return knex('recipes').insert([
        {
          name: 'Nestle Toll House Chocolate Chip Cookies',
          madeIt: 2523
        },
        {
          name: 'Bacon Wrapped Jalapeno Poppers',
          madeIt: 785
        }
      ]);
    });
};
