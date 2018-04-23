// tbl.increments('id').primary(); // primary key
// 		tbl.string('name').notNullable();

exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .del() // delete all ingredients
    .then(function() {
      return knex('ingredients').insert([
        {
          // 1
          name: 'All-Purpose Flour'
        },
        { // 2
          name: 'Baking Soda'
        },
        { // 3
          name: 'Salt'
        },
        { // 4
          name: 'Butter'
        },
        { // 5
          name: 'Brown Sugar'
        },
        { // 6
          name: 'Granulated Sugar'
        },
        { // 7
          name: 'Vanilla Extract'
        },
        { // 8
          name: 'Eggs'
        },
        { // 9
          name: 'Nestle Toll House Semi-Sweet Chocolate Chips'
        },
        { // 10
          name: 'Chopped Nuts'
        },
        { // 11
          name: 'Bacon'
        },
        { // 12
          name: "Jalapenos"
        },
        { // 13
          name: 'Cream Cheese'
        }
      ]);
    });
};
