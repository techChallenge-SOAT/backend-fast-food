import Pedido from '../../../application/valueObjects/Pedido';
import { ItemRepository } from '../../../adapters/postgres/item/ItemRepository';
import { PedidoRepository } from '../../../adapters/postgres/pedido/PedidoRepository';
import PedidoItem from '../../../application/valueObjects/PedidoItem';
import logger from '../../../config/logger';

export class CriarPedidoUseCase {
  static async execute(pedido: Pedido, itens: PedidoItem[]) {
    const pedido_criado = await PedidoRepository.criar(pedido);
    await Promise.all(
      itens.map(async ({ item_id, quantidade }) => {
        try {
          const item = await ItemRepository.buscarPorId(item_id);
          if (!item) {
            throw new Error('Item não encontrado');
          }
          return PedidoRepository.adicionarItem(
            pedido_criado,
            item,
            quantidade,
          );
        } catch (error) {
          logger.info('error ao adicionar item ao pedido', error);
        }
      }),
    );

    return pedido_criado;
  }
}
