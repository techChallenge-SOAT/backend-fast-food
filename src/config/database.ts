import { Sequelize } from 'sequelize';

const url =
  process.env.DATABASE_URL ||
  'postgres://user:password@localhost:5432/bd-clientes-pedidos';

const sequelize = new Sequelize(url, {
  dialect: 'postgres',
});

export default sequelize;
