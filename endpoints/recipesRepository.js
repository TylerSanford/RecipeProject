const db = require('../configuration/db.js');

module.exports = {
	get: function(id) {
		if (!id) {
			return { error: new Error('id is required') };
		}

		let rquery = db('recipes as r').where('r.id', id);
		let cquery = db('comments as c')
			.select('id', 'comment', 'plusOne', 'minusOne')
			.where('c.recipesId', id);
		const promises = [rquery, cquery];

		return Promise.all(promises).then(results => {
			const [recipes, comments] = results;
			const recipe = recipes[0];

			recipe.comments = comments;
			return recipe;
		});
	}
};
