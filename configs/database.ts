import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'sistema_pedidos',
  username: 'user',
  password: 'password',
  host: 'localhost',
  port: 5432,
});

export default sequelize;
