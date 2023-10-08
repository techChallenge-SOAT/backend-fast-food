const db = require('../db');

class PedidosItensAdapter {
  static async adicionarItemAoPedido(pedidoItem) {
    try {
      await db.none(
        'INSERT INTO pedidos_itens (pedido_id, item_id, quantidade) VALUES ($1, $2, $3)',
        [pedidoItem.pedido_id, pedidoItem.item_id, pedidoItem.quantidade]
      );
    } catch (error) {
      throw new Error('Erro ao adicionar item ao pedido no banco de dados.');
    }
  }

  // Outros métodos relacionados a pedidos_itens
}

module.exports = PedidosItensAdapter;
