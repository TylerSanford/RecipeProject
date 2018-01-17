// tbl.increments('id').primary(); // primary key
// tbl.string('name').notNullable();
// tbl.integer('authorId').notNullable().references('id').inTable('users');
// tbl.dateTime('createdAt').notNullable();
// tbl.dateTime('updatedAt').notNullable();
// tbl.integer('rating').notNullable().defaultTo('0');
// tbl.string('keywords');
// tbl.text('ingredients').notNullable();
// tbl.text('instructions').notNullable();
// tbl.integer('madeIt').notNullable().defaultTo('0');

exports.seed = function(knex, Promise) {
	return knex('recipes')
		.del() // delete all recipes
		.then(function() {
			return knex('recipes').insert([
				{
					id: 1,
					name: 'Nestle Toll House Chocolate Chip Cookies',
					authorId: 2,
					rating: [[1, 0], [2, 2], [3, 13], [4, 35], [5, 77]],
					keywords: ['cookies', 'toll house', 'nestle', 'chocolate'],
					ingredients: [
						['2 1/4 cups', 'all-purpose flour'],
						['1 teaspoon', 'baking soda'],
						['1 teaspoon', 'salt'],
						['1 cup (2 sticks)', 'butter'],
						['3/4 cup', 'brown sugar'],
						['3/4 cup', 'granulated sugar'],
						['1 teaspoon', 'vanilla extract'],
						['2', 'large eggs'],
						[
							'2 cups (12 oz package)',
							'Nestle Toll House Semi-Sweet Chocolate Morsels'
						],
						['1 cup', 'chopped nuts']
					],
					instructions: 'do this then do that',
					madeIt: 25
				},
				{
					id: 2,
					name: 'Jalapeno Poppers',
					authorId: 4,
					rating: [[1, 1], [2, 0], [3, 14], [4, 22], [5, 16]],
					keywords: ['bacon', 'jalapeno', 'poppers'],
					ingredients: [
						['10 slices', 'bacon'],
						['5 whole', 'jalapeno poppers - halved and seeded'],
						['1 box', 'cream cheese']
					],
					instructions: 'do this then do that',
					madeIt: 133
				},
				{
					id: 3,
					name: 'Shepards Pie',
					authorId: 5,
					rating: [[1, 0], [2, 15], [3, 37], [4, 160], [5, 724]],
					keywords: ['shepards pie', 'ground beef'],
					ingredients: [
						['6', 'potatos cubed'],
						['1/2 lb', 'green beans'],
						['1 lb', 'ground beef']
					],
					instructions: 'do this then that',
					madeIt: 200
				},
				{
					id: 4,
					name: 'Ramen Noodle',
					authorId: 5,
					rating: [[1, 10], [2, 25], [3, 50], [4, 3], [5, 1]],
					keywords: ['noodles', 'ramen'],
					ingredients: [
						['1 pack', 'ramen noodles'],
						['2 cups', 'water']
					],
					instructions: 'do this then that',
					madeIt: 200
				},
				{
					id: 5,
					name: 'Peanut Butter Jelly',
					authorId: 5,
					rating: [[1, 60], [2, 0], [3, 50], [4, 200], [5, 100]],
					keywords: ['peanut butter', 'jelly', 'sandwich'],
					ingredients: [
						['2 Tablespoons', 'Peanut Butter'],
						['2 Tablespoons', 'Jelly'],
						['2 Slices', 'bread']
					],
					instructions: 'do this then that',
					madeIt: 200
				}
			]);
		});
};
