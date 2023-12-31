import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/sequelize';

export class Cliente extends Model {
  public id!: string;
  public cpf!: string;
  public nome!: string;
  public email!: string;
  public senha!: string;
}

Cliente.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'clientes',
    timestamps: false,
  },
);
