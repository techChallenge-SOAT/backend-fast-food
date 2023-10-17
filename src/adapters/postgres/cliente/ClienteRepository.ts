/* eslint-disable no-useless-catch */
import { Cliente } from './ClienteModel';

export class ClienteRepository {
  static async adicionarCliente(
    cpf: string,
    nome: string,
    email: string,
    senha: string,
  ) {
    try {
      const cliente = await Cliente.create({
        cpf,
        nome,
        email,
        senha,
      });
      return cliente;
    } catch (error) {
      throw error;
    }
  }

  static async buscarClientePorCPF(cpf: string) {
    try {
      const cliente = await Cliente.findByPk(cpf);
      return cliente;
    } catch (error) {
      throw error;
    }
  }

  static async buscarTodosClientes() {
    try {
      const clientes = await Cliente.findAll();
      return clientes;
    } catch (error) {
      throw error;
    }
  }
}
