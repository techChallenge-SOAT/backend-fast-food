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
import { Item } from '../item/ItemModel';
import { PedidoItem } from './PedidoItemModel';

export class Pedido extends Model<
  InferAttributes<Pedido>,
  InferCreationAttributes<Pedido>
> {
  public id!: string;
  public cliente_cpf!: string;
  public data_pedido?: Date;
  public status!: string;
  //store the instance itens
  declare itens?: Item[];

  declare buscaItens: BelongsToManyGetAssociationsMixin<Item>;

  declare addItem: BelongsToManyAddAssociationMixin<Item, number>;

  declare addItens: BelongsToManyAddAssociationsMixin<Item, number>;

  declare setItem: BelongsToManySetAssociationsMixin<Item, number>;

  declare createItem: BelongsToManyCreateAssociationMixin<Item>;

  public static associations: {
    itens: Association<Pedido, Item>;
  };
}

Pedido.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    cliente_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Pedido',
  },
);

Pedido.belongsToMany(Item, { through: PedidoItem });
