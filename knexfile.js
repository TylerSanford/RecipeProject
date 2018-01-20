// Update with your config settings.

const keys = require('./configuration/keys');

module.exports = {
  client: 'pg',
  connection: {
    host: keys.PGSQL_HOST,
    user: keys.PGSQL_USER,
    password: keys.PGSQL_PASSWORD,
    database: keys.PGSQL_DATABASE,
    port: keys.PSQL_PORT
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
