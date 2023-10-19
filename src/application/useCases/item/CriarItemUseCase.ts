import { ItemRepository } from '../../../adapters/postgres/item/ItemRepository';

export class CriarItemUseCase {
  static async execute(
    categoria: string,
    nome: string,
    descricao: string,
    preco_unitario: number,
  ) {
    const item = await ItemRepository.criar(
      categoria,
      nome,
      descricao,
      preco_unitario,
    );
    return item;
  }
}
