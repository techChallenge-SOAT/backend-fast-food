import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../configs/database';

class ClienteModel extends Model {
  public cpf!: string;
  public nome!: string;
  public email!: string;
  public senha!: string;
}

ClienteModel.init(
  {
    cpf: {
      type: DataTypes.STRING(14),
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes', 
    timestamps: true, 
  }
);

export default ClienteModel;
