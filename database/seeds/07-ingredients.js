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
        {
          name: 'Baking Soda'
        },
        {
          name: 'Salt'
        },
        {
          name: 'Butter'
        },
        {
          name: 'Brown Sugar'
        },
        {
          name: 'Granulated Sugar'
        },
        {
          name: 'Vanilla Extract'
        },
        {
          name: 'Large Eggs'
        },
        {
          name: 'Nestle Toll House Semi-Sweet Chocolate Chips'
        },
        {
          name: 'Chopped Nuts'
        },
        {
          name: 'Bacon'
        },
        {
          name: "Jalapeno's"
        },
        {
          name: 'Cream Cheese'
        }
      ]);
    });
};
