import { Sequelize } from 'sequelize';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definida');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {});

export default sequelize;
