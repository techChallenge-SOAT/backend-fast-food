import db from '@db/db';
import type Cliente from '../../domain/clienteModel';

export default class ClientesAdapter {
  static async criarCliente(cliente: Cliente) {
    try {
      await db.none(
        'INSERT INTO clientes (cpf, nome, email, senha) VALUES ($1, $2, $3, $4)',
        [cliente.cpf, cliente.nome, cliente.email, cliente.senha],
      );
    } catch (error) {
      throw new Error('Erro ao criar cliente no banco de dados.');
    }
  }

  static async buscarClientePorCPF(cpf: string) {
    try {
      const cliente = await db.oneOrNone(
        'SELECT * FROM clientes WHERE cpf = $1',
        [cpf],
      );
      return cliente;
    } catch (error) {
      throw new Error('Erro ao buscar cliente por CPF no banco de dados.');
    }
  }

  // Outros métodos relacionados a clientes
}
