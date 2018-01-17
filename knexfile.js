// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/recipe.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			tableName: 'dbmigrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	}

	// production: {
	//     client: 'sqlite3',
	//     connection: {
	//         database: 'recipe',
	//         user: 'tyler',
	//         password: 'pass',
	//     },
	//     pool: {
	//         min: 2,
	//         max: 10,
	//     },
	//     migrations: {
	//         tableName: 'dbmigrations',
	//     },
	//     seeds: {
	//         directory: './database/seeds',
	//     },
	// },
};
