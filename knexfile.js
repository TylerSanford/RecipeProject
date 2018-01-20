// Update with your config settings.

const keys = require('./configuration/keys');

module.exports = {
  client: 'pg',
  connection: {
    // host: keys.PGSQL_HOST,
    // user: keys.PGSQL_USER,
    // password: keys.PGSQL_PASSWORD,
    // database: keys.PGSQL_DATABASE,
    // port: keys.PSQL_PORT

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
};
