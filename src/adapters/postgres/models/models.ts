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
import sequelize from '../../../config/sequelize';

class Pedido extends Model<
  InferAttributes<Pedido>,
  InferCreationAttributes<Pedido>
> {
  public id!: string;
  public cliente_cpf!: string;
  public data_pedido?: Date;
  public status!: string;
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
    tableName: 'pedidos',
  },
);

class PedidoItem extends Model {
  public pedido_id!: string;
  public item_id!: number;
  public quantidade!: number;
}

PedidoItem.init(
  {
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
    tableName: 'pedidos_itens',
  },
);

class Item extends Model {
  public id!: string;
  public categoria!: string;
  public nome!: string;
  public descricao!: string;
  public preco_unitario!: number;
}

Item.init(
  {
    id: {
      type: DataTypes.STRING,
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
    tableName: 'itens',
    timestamps: false,
  },
);

Pedido.belongsToMany(Item, { through: PedidoItem });
Item.belongsToMany(Pedido, { through: PedidoItem });

export { Pedido, PedidoItem, Item };
