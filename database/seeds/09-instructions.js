// tbl.increments('id').primary(); // primary key
//     tbl.integer('recipeId').references('id').inTable('recipes');
//     tbl.integer('step').notNullable();
//     tbl.string('instruction').notNullable();

exports.seed = function(knex, Promise) {
	return knex('instructions')
		.del() // delete all user's
		.then(function() {
			return knex('instructions').insert([
				{
					recipeId: 1,
					step: 1,
					instruction: 'PREHEAT oven to 375° F.',
				},
				{
					recipeId: 1,
					step: 2,
					instruction: 'COMBINE flour, baking soda and salt in small bowl. Beat butter, granulated sugar, brown sugar and vanilla extract in large mixer bowl until creamy. Add eggs, one at a time, beating well after each addition. Gradually beat in flour mixture. Stir in morsels and nuts. Drop by rounded tablespoon onto ungreased baking sheets.',
				},
				{
					recipeId: 1,
					step: 3,
					instruction: 'BAKE for 9 to 11 minutes or until golden brown. Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.',
				},
				{
					recipeId: 1,
					step: 4,
					instruction: 'PAN COOKIE VARIATION: Preheat oven to 350° F.  Grease 15 x 10-inch jelly-roll pan. Prepare dough as above. Spread into prepared pan. Bake for 20 to 25 minutes or until golden brown. Cool in pan on wire rack. Makes 4 dozen bars.',
				},
				{
					recipeId: 1,
					step: 5,
					instruction: '* May be stored in refrigerator for up to 1 week or in freezer for up to 8 weeks.',
				},
				{
					recipeId: 1,
					step: 6,
					instruction: 'FOR HIGH ALTITUDE BAKING (5,200 feet):  Increase flour to 2 1/2 cups.  Add 2 teaspoons water with flour and reduce both granulated sugar and brown sugar to 2/3 cup each.   Bake drop cookies for 8 to 10 minutes and pan cookie for 17 to 19 minutes.',
				},
				{
					recipeId: 2,
					step: 1,
					instruction: 'Preheat oven to 425° F.',
				},
				{
					recipeId: 2,
					step: 2,
					instruction: 'Place 1-2 TBSP of creamcheese on each Jalapeno Half.',
				},
				{
					recipeId: 2,
					step: 3,
					instruction: 'Wrap Jalapeno and creamcheese with 1 slice of bacon.',
				},
				{
					recipeId: 2,
					step: 4,
					instruction: 'Bake in preheated oven 25-35 minutes.'
				},
      ]);
		});
};