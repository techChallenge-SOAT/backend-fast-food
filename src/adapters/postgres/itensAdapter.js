const db = require('../db');

class ItensAdapter {
  static async criarItem(item) {
    try {
      await db.none(
        'INSERT INTO itens (categoria, nome, descricao, preco_unitario) VALUES ($1, $2, $3, $4)',
        [item.categoria, item.nome, item.descricao, item.preco_unitario]
      );
    } catch (error) {
      throw new Error('Erro ao criar item no banco de dados.');
    }
  }

  // Outros métodos relacionados a itens
}

module.exports = ItensAdapter;
