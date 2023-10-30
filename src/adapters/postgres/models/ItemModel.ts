import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  Association,
  BelongsToManySetAssociationsMixin,
} from 'sequelize';
import sequelize from '../../../config/database';

class Item extends Model {
  public id!: number;
  public categoria!: string;
  public nome!: string;
  public descricao!: string;
  public preco_unitario!: number;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco_unitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Item',
    timestamps: false,
  },
);

Pedido.belongsToMany(Item, { through: PedidoItem });
Item.belongsToMany(Pedido, { through: PedidoItem });

export { Pedido, PedidoItem, Item };
