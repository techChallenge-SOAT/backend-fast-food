import Item from 'src/application/valueObjects/Item';
import { ItemRepository } from '../../../adapters/postgres/item/ItemRepository';

export class CriarItemUseCase {
  static async execute(item: Item) {
    return ItemRepository.criar(item);
  }
}
