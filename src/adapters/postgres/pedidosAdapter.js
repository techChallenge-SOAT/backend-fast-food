const db = require('../db');

class PedidosAdapter {
  static async criarPedido(pedido) {
    try {
      await db.none(
        'INSERT INTO pedidos (id, cliente_cpf, data_pedido, status) VALUES ($1, $2, $3, $4)',
        [pedido.id, pedido.cliente_cpf, pedido.data_pedido, pedido.status]
      );
    } catch (error) {
      throw new Error('Erro ao criar pedido no banco de dados.');
    }
  }

  // Outros métodos relacionados a pedidos
}

module.exports = PedidosAdapter;
