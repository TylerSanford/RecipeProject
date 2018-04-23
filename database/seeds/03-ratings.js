// tbl.increments('id').primary(); // primary key
// tbl.integer('recipeId').notNullable();
// tbl.integer('stars').notNullable();

exports.seed = function(knex, Promise) {
  return knex('ratings')
    .del() // delete all user's
    .then(function() {
      return knex('ratings').insert([
        // Recipe #1
        {
          recipeId: 1,
          stars: 5
        },
        {
          recipeId: 1,
          stars: 4
        },
        {
          recipeId: 1,
          stars: 4
        },
        {
          recipeId: 1,
          stars: 3
        },
        {
          recipeId: 1,
          stars: 3
        },
        {
          recipeId: 1,
          stars: 1
        },
        {
          recipeId: 1,
          stars: 5
        },
        {
          recipeId: 1,
          stars: 5
        },
        // Recipe #2
        {
          recipeId: 2,
          stars: 5
        },
        {
          recipeId: 2,
          stars: 5
        },
        {
          recipeId: 2,
          stars: 4
        },
        {
          recipeId: 2,
          stars: 3
        },
        {
          recipeId: 2,
          stars: 3
        },
        {
          recipeId: 2,
          stars: 2
        },
        {
          recipeId: 2,
          stars: 4
        },
        {
          recipeId: 2,
          stars: 3
        },
        // Recipe #3
        {
          recipeId: 3,
          stars: 3
        },
        {
          recipeId: 3,
          stars: 3
        },
        {
          recipeId: 3,
          stars: 2
        },
        {
          recipeId: 3,
          stars: 5
        },
        {
          recipeId: 3,
          stars: 4
        },
        {
          recipeId: 3,
          stars: 4
        },
        {
          recipeId: 3,
          stars: 4
        },
        {
          recipeId: 3,
          stars: 1
        },
        // Recipe #4
        {
          recipeId: 4,
          stars: 2
        },
        {
          recipeId: 4,
          stars: 2
        },
        {
          recipeId: 4,
          stars: 4
        },
        {
          recipeId: 4,
          stars: 5
        },
        {
          recipeId: 4,
          stars: 4
        },
        {
          recipeId: 4,
          stars: 1
        },
        {
          recipeId: 4,
          stars: 5
        },
        {
          recipeId: 4,
          stars: 3
        },
        // Recipe #5
        {
          recipeId: 5,
          stars: 5
        },
        {
          recipeId: 5,
          stars: 5
        },
        {
          recipeId: 5,
          stars: 4
        },
        {
          recipeId: 5,
          stars: 4
        },
        {
          recipeId: 5,
          stars: 3
        },
        {
          recipeId: 5,
          stars: 2
        },
        {
          recipeId: 5,
          stars: 2
        },
        {
          recipeId: 5,
          stars: 1
        }
      ]);
    });
};
