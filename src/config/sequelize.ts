import { Sequelize } from 'sequelize';
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definida');
}

const sequelize = new Sequelize(process.env.DATABASE_URL || 
  'postgres://postgres:postgres@postgres:5432/bd-clientes-pedidos', {
  dialect: 'postgres',
  logging: console.log
});

export default sequelize;
