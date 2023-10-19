import { Item as ItemModel } from './ItemModel';

export class ItemRepository {
  static async criar(
    categoria: string,
    nome: string,
    descricao: string,
    preco_unitario: number,
  ) {
    return await ItemModel.create({
      categoria,
      nome,
      descricao,
      preco_unitario,
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
