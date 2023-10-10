import db from 'pg-promise';

const pgp = db();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'sistema_pedidos',
  user: 'user',
  password: 'password',
};

const dbInstance = pgp(connection);

export default dbInstance;
