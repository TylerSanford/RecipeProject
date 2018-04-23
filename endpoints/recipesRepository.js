const db = require('../configuration/db.js');

module.exports = {
	get: function(id) {
		if (!id) {
			return { error: new Error('id is required') };
		}

		let a_query = db('recipes as r').where('r.id', id);
		let b_query = db('users as u').where('u.id', recipes.authorId);
		const promises = [a_query, b_query];

		return Promise.all(promises).then(results => {
			console.log('results ='+ results);
			// const [recipes, comments] = results;
			const [recipes] = results;
			const recipe = recipes[0];

			// recipe.comments = comments;
			return recipe;
		});
	}
};
