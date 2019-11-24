module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'ts_service',
      user:     'scott',
      password: 'mypassword123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
