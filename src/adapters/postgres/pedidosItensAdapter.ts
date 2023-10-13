import db from '@db/db';
import PedidoItem from '../../domain/pedidoItemModel';

class PedidosItensAdapter {
  static async adicionarItemAoPedido(pedidoItem: PedidoItem) {
    try {
      await db.none(
        'INSERT INTO pedidos_itens (pedido_id, item_id, quantidade) VALUES ($1, $2, $3)',
        [pedidoItem.pedido_id, pedidoItem.item_id, pedidoItem.quantidade],
      );
    } catch (error) {
      throw new Error('Erro ao adicionar item ao pedido no banco de dados.');
    }
  }

  // Outros métodos relacionados a pedidos_itens
}

module.exports = PedidosItensAdapter;
