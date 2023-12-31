import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'bd-clientes-pedidos',
  username: 'user',
  password: 'password',
});

export default sequelize;