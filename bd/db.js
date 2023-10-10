const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'sistema_pedidos',
  user: 'user',
  password: 'password',
};

const db = pgp(connection);

module.exports = db;