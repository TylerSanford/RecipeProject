// Update with your config settings.

module.exports = {
  // LOCAL
  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: '127.0.0.1',
  //     user: 'postgres',
  //     password: 'password123',
  //     database: 'recipe_app'
  //   },
  //   searchPath: ['knex', 'public'],
  //   useNullAsDefault: true,
  //   migrations: {
  //     tableName: 'dbmigrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   }
  // },

  // Heroku
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-54-243-193-227.compute-1.amazonaws.com',
      user: 'gutkvbvxltwiia',
      password:
        'dab5d682d6b34487517589a6ce2a6fcb2cd3c29379b86216cbe20e4271c628b6',
      port: '5432',
      database: 'd4kpfalr1id2km'
    },
    searchPath: ['knex', 'public'],
    useNullAsDefault: true,
    migrations: {
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: 'ec2-54-243-193-227.compute-1.amazonaws.com',
  //     user: 'gutkvbvxltwiia',
  //     password:
  //       'dab5d682d6b34487517589a6ce2a6fcb2cd3c29379b86216cbe20e4271c628b6',
  //     port: '5432',
  //     database: 'd4kpfalr1id2km'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   searchPath: ['knex', 'public'],
  //   useNullAsDefault: true,
  //   migrations: {
  //     tableName: 'dbmigrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   }
  // }
};
