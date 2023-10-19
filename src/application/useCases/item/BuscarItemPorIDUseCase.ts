import { ItemRepository } from '../../../adapters/postgres/item/ItemRepository';

export class BuscarItemPorIDUseCase {
  static async execute(id: number) {
    return ItemRepository.buscarPorId(id);
  }
}
