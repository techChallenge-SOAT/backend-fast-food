import { ItemRepository } from '../../../adapters/postgres/item/ItemRepository';
import { PedidoRepository } from '../../../adapters/postgres/pedido/PedidoRepository';
import PedidoItens from 'src/domain/models/PedidosItens';

export class CriarPedidoUseCase {
  static async execute(cliente_cpf: string, pedidos_itens: PedidoItens[]) {
    const pedido = await PedidoRepository.criar(cliente_cpf);
    await Promise.all(
      pedidos_itens.map(async ({ item_id, quantidade }) => {
        const item = await ItemRepository.buscarPorId(item_id);
        if (!item) throw new Error('Item não encontrado');
        return PedidoRepository.adicionarItem(pedido, item, quantidade);
      }),
    );

    return pedido;
  }
}
