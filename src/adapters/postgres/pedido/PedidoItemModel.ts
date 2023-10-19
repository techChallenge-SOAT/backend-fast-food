import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/database';

export class PedidoItem extends Model {
  public id!: number;
  public pedido_id!: string;
  public item_id!: number;
  public quantidade!: number;
}

PedidoItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    pedido_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'PedidoItem',
  },
);
