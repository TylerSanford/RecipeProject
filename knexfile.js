require('dotenv').config({path: './.env'});

module.exports = {
  client: 'pg',
  // connection: process.env.DATABASE_URL,
  connection: 'postgres://postgres:password123@127.0.0.1:5432/recipe',
  searchPath: ['knex', 'public'],
  useNullAsDefault: true,
  migrations: {
    tableName: 'dbmigrations'
  },
  seeds: {
    directory: './database/seeds'
  },
};
