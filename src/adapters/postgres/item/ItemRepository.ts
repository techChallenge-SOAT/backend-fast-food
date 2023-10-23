import Item from 'src/application/valueObjects/Item';
import { Item as ItemModel } from '../pedido/models';

export class ItemRepository {
  static async criar(item: Item) {
    return await ItemModel.create({
      categoria: item.categoria,
      nome: item.nome,
      descricao: item.descricao,
      preco_unitario: item.preco_unitario,
    });
  }

  static async buscarPorId(id: number) {
    return ItemModel.findByPk(id);
  }

  static async buscarTodos() {
    return ItemModel.findAll({
      order: [['nome', 'ASC']],
    });
  }
}
