import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/database';

export class Cliente extends Model {
  public cpf!: string;
  public nome!: string;
  public email!: string;
  public senha!: string;
}

Cliente.init(
  {
    cpf: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cliente',
    timestamps: false,
  }
);
