import Item from '../../valueObjects/Item';
import { ItemRepository } from '../../../adapters/postgres/item/ItemRepository';
import { v4 as uuidv4 } from 'uuid';

export class CriarItemUseCase {
  static async execute(
    categoria: string,
    nome: string,
    descricao: string,
    preco_unitario: number,
    ) {
      try {
        const item = new Item(
          categoria,
          nome,
          descricao,
          preco_unitario,
        )
        return ItemRepository.criar(item);
      } catch (error) {
        throw error;
      }
  }
}
